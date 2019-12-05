<template>
    <div style="width:100%; height:100%; background-color: #FBFBFF; padding-top: 64px;">
        <v-card-text style="padding-top: 0px;">
            <v-container ma-0 pa-0>
                
                <v-layout column>
                    <h2 class=" text-center"> INFORMAÇÕES</h2>
                    <v-flex xs12 sm6 md6 lg4 xl4 style="padding: 0px">
                        <v-card style="background-color: white;">    
                            <v-card-title style="background-color: #E0E0E0;">
                                <v-layout>
                                    <v-flex style="text-align: left">
                                       OS: {{os.number}}
                                    </v-flex>
                                </v-layout>
                            </v-card-title>
                                <v-divider></v-divider>
                                <v-card-text style="text-align: right; padding-left: 0; padding-top: 0; padding-bottom: 0;  font-style: italic; ">Criado em {{os.creation_date}} às {{os.creation_time}}</v-card-text>
                           
                            
                             <v-card-text style="padding-top: 16px;">
                            <v-layout>

                                <v-flex class="fonteCard">
                                    Equipamento : 
                                </v-flex>
                                <v-flex class="fonteCard" style="text-align: right">
                                    {{os.equipamento}}
                                </v-flex>

                            </v-layout>
                             <v-layout>

                                <v-flex class="fonteCard">
                                    Setor : 
                                </v-flex>
                                <v-flex class="fonteCard" style="text-align: right">
                                    {{os.setor}}
                                </v-flex>
                                
                            </v-layout>
                             <v-layout>

                                <v-flex class="fonteCard">
                                    Tipo de serviço
                                </v-flex>
                                <v-flex class="fonteCard" style="text-align: right">
                                    {{os.tipo_serviço}}
                                </v-flex>
                                
                            </v-layout>
                             <v-layout>

                                <v-flex class="fonteCard">
                                    Descrição do problema:
                                </v-flex>
                                <v-flex class="fonteCard" style="text-align: right">
                                    {{os.desc_problema}}
                                </v-flex>
                                
                            </v-layout>
                        
                        </v-card-text>
      
                        </v-card>
                        <v-flex mt-4 class="text-center">
                            <v-btn rounded dark @click="andamento">Iniciar</v-btn>
                        </v-flex>
                     
                    </v-flex>
                </v-layout>
            </v-container>                
        </v-card-text>
    </div>

</template>

<script>

import firebase from 'firebase'

export default {
    fiery: true,
    data() {
        return {
            os: {},
            id: ''
        }
    },
      components: {
       
    },
    methods: {
        andamento(){
        this.$router.push('/andamentoOS')
     }
     
    },
    created (){
            

    },
    mounted (){
        let oc = this.$store.getters.getSelectedOcorrencia
            var splits = oc['.uid'].split('/', 6)

            var tempid = splits[4]
            console.log(tempid)
            let that = this
            this.$fiery(firebase.firestore().collection('OS').doc(tempid), {
                onSuccess: (todos) => {
                    console.log(todos)
                    that.os = todos
                  
                }
            })

    },
    computed: {

        tipo(){
            return this.$store.getters.getUser
        },
        user () {
            console.log(this.$store.getters.getUser)
            return this.$store.getters.getUser
        },
    },
    created () {
        
    }
}
</script>