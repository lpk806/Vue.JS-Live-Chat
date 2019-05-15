<template>
    <div class="chat container">
        <h2 class="center teal-text">Chat</h2>
        <div class="car">
            <div class="card-content">
                <ul class="messages" v-chat-scroll>
                    <li v-for="message in messages" :key="message.id">
                        <span class="teal-text">{{ message.name }}</span>
                        <span class="grey-text text-darken-3">{{ message.content}}</span>
                        <br>
                        <span class="grey-text time"> {{ message.timestamp }}</span>
                    </li>
                </ul>
            </div>
            <div class="card-action">
                <NewMessage :name="name" />
            </div>
        </div>
    </div>
</template>

<script>
import db from '@/firebase/init'
import NewMessage from '@/components/NewMessage'
import moment from 'moment'

export default {
    name: 'Chat',
    props:['name'],
    components:{
        NewMessage
    },
    data() {
        return {
            messages:[]
        }
    },
    created() {
        let ref = db.collection('message').orderBy('timestamp')

        ref.onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                if (change.type == 'added'){
                    let doc = change.doc
                    this.messages.push({
                        id: doc.id,
                        name: doc.data().name,
                        content:doc.data().content,
                        timestamp: moment(doc.data().timestamp).format('MMMM Do YYYY, h:mm:ss a')
                   })
                }
            })
        })        
    },
}
</script>

<style>
    .chat h2{
        font-size: 2.6em;
        margin-bottom: 40px;
    }

    .chat span{
        font-size: 1.4em;
    }

    .chat time{
        display: block;
        font-size: 0.8em;
    }

    .messages{
        max-height: 300px;
        overflow: auto;
    }
    
</style>