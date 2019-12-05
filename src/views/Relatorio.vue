<template>
    <v-container fluid style="width:100%; height:100%">
          <v-flex mt-4>      
              <v-card><h3>Máquina ROMI C420 v5</h3>
              </v-card>
        </v-flex>
        <vue-speech lang="pt-BR" @onTranscriptionEnd="onEnd"/>
        <v-textarea outlined v-model="texto" label="Comentários"  >
         </v-textarea>   
         <v-flex  style="margin-top:80%;">
            <v-btn @click="ocorrencias()"  color="#ffd700">
                retornar
            </v-btn>
         </v-flex>
       
     </v-container>
</template>

<script>
import firebase from 'firebase'
export default {
    data(){
        return{
            texto:''
        }
    },
    methods:{
        onEnd({ lastSentence, transcription }){
            this.texto= this.texto + lastSentence
        },
        async   ocorrencias(){
            let oc = this.$store.getters.getSelectedOcorrencia
            var splits = oc['.uid'].split('/', 6)
            var tempid = splits[4]
           
                await firebase.firestore().collection('OS').doc(tempid).update({
                    status_tecnico: 'finalizado' 
                })
                

            this.$router.push('/tecnico')
        }
    },
    // mounted (){
    //     let oc = this.$store.getters.getSelectedOcorrencia
    //         var splits = oc['.uid'].split('/', 6)

    //         var tempid = splits[4]
    //         console.log(tempid)
    //         let that = this
    //         this.$fiery(firebase.firestore().collection('OS').doc(tempid), {
    //             onSuccess: (todos) => {
    //                 console.log(todos)
    //                 that.os = todos
                  
    //             }
    //         })

    // },
 
}
</script>