<template>
    <div style="height: 100%; background-color: #FBFBFF;">
        <v-container style="padding-bottom: 0; padding-top: 64px; margin-top: 10px;">
                <v-layout>
                    <v-select hide-details v-model="selectedStatus" :items="status" return-object label="Selecione o status das OS  " outlined></v-select>
                </v-layout>
        </v-container> 
        
        <v-container>
            <v-layout column>
                {{events}}
                <v-flex xs12 sm6 md6 lg4 xl4 v-for="(os, i) in OS" :key="i" style="padding: 5px; cursor: pointer" @click="goTo(os)"   >  
                    <v-card
                        elevation-5
                        style="border-radius: 10px;"
                        class="mx-auto fonteCard"
                    >
                        <v-card-title  style="background: #E0E0E0">
                            <v-layout>
                                
                                <v-flex style="text-align: left">
                                    
                                    {{os.number}}
                                </v-flex>
                            </v-layout>
                        </v-card-title>
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
                        
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>


<script>
import firebase from 'firebase'
export default {
    fiery: true,
    data() {
        return { 
            status: [ 
                {text: 'Em aberto', value: 'aberto'},
                {text: 'Em andamento', value: 'andamento'}, 
                {text: 'Encerrados', value: 'finalizado'}
            ],
            selectedStatus: {text: 'Em aberto', value: 'aberto'},
            aberto: this.$fiery(firebase.firestore().collection('OS'), {
                query: q => q.where('status_tecnico' ,'==', 'aberto').orderBy('creation_timestamp', 'desc'),
            }),
            andamento: this.$fiery(firebase.firestore().collection('OS'), {
                query: q => q.where('status_tecnico' ,'==', 'andamento').orderBy('creation_timestamp', 'desc'),
            }),
            finalizado: this.$fiery(firebase.firestore().collection('OS'), {
                query: q => q.where('status_tecnico' ,'==', 'finalizado').orderBy('creation_timestamp', 'desc'),
            })
        }
    },
        methods:{
            goTo (os) {   
                this.$store.commit('setOcorrencia', os)   
                this.$router.push('/ocorrenciaOS')
            }
        },
        computed: {
            user () {
                // console.log(this.$store.getters.getUser)
                return this.$store.getters.getUser
            },  
            OS() {
                if (this.selectedStatus.value == 'aberto') {
                    console.log(this.aberto)
                    return this.aberto
                }else if (this.selectedStatus.value == 'andamento') {
                    console.log(this.andamento)
                    return this.andamento
                }else if (this.selectedStatus.value == 'finalizado') {
                    return this.finalizado
                } 
            },
            events () {
            return this.selectedStatus.text 
            } 
 
        // events () {
        //    return this.selectedStatus.text 
        // },
        // OS () {
        //     if (this.selectedStatus.value == 'aberto') {
        //         return this.aberto
        //     }else if (this.selectedStatus.value == 'andamento') {
        //         return this.andamento
        //     }else if (this.selectedStatus.value == 'finalizado') {
        //         return this.finalizado
        //     } 
        // },
    }
}
</script>

<style>

</style>