<template>
    <div style="height: 100%; background-color: #FBFBFF; display: flex; align-items: center;">
        
        <v-container style="padding-top: 64px; max-width: 500px;">
            
            <v-layout  column>
                <v-layout>
                    <v-flex>
                        <h3>Preencha os campos abaixo:</h3>
                    </v-flex>
                </v-layout>
                 <v-flex>
                    <v-select
                    :items="equipamentos"
                    label="Equipamento"
                    v-model="equipamento"
                    ></v-select>
                </v-flex>
        
                <v-flex>
                    <v-select
                    :items="setores"
                    label="Setor"
                    v-model="setor"
                    ></v-select>
                </v-flex>
                <v-flex>
                    <v-select
                    :items="serviços"
                    label="Tipo de serviço"
                    v-model="serviço"
                    ></v-select>
                </v-flex>
                 <v-flex>
                    <v-select
                    :items="Maquinas"
                    label="Máquina parou?"
                    v-model="Maquina"
                    ></v-select>
                </v-flex>
               
                 <v-flex>
                     
                    <v-textarea outlined v-model="comentario" label="Descrição do problema"  >
                        
                    </v-textarea>
                </v-flex>
            </v-layout>
             <v-flex mt-2>
                    <v-layout>
                        <v-spacer></v-spacer>
                        <v-btn @click="finish">
                            Gerar OS
                        </v-btn>
                    </v-layout>
                    
                </v-flex>
            <v-layout>
                <v-dialog
                v-model="confirmDialog"
                >
                    <v-card>
                        <v-card-text style="font-weight: 500; font-size: 1.5em; color: black; padding-top: 16px; padding-bottom: 10px;">OS criada com sucesso!</v-card-text>


                        <v-card-text>
                        OS criado! Os agentes mais próximos dos órgãos selecionados serão direcionados ao local em instantes.
                        </v-card-text>

                        <v-card-actions>
                        <div class="flex-grow-1"></div>
                        <v-btn
                            color="green darken-1"
                            text
                            @click="goHome()"
                        >
                            Voltar à página principal
                        </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-layout>
        </v-container>
    </div>
    
</template>
<script>
import firebase from 'firebase'
export default {
    fiery: true,
    data () {
        return {
            equipamentos:['Máquina ROMI C420 v5', 'Ar condicionado', 'Fogão'],
            equipamento: '',
            OS: this.$fiery(firebase.firestore().collection('OS')),
            setor:'',
            setores:['Produção Norte', 'Produção Sul', 'Produção Leste'],
            serviço: '',
            serviços: ['Corretiva','Preventiva', 'Melhoria'],
            Maquina: '',
            Maquinas: ['Sim', 'Não'],
            confirmDialog: false,
            comentario:'',
            status: 'aberto'

        }
    },
    methods: {
       finish () {
            var today = new Date();
            var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            var number = Math.floor(100000000 + Math.random() * 900000000);
            this.$fires.OS.add({
                number: number,
                creation_timestamp: Math.floor((new Date().getTime())/1000),
                creation_date : date,
                creation_time: time,
                equipamento: this.equipamento,
                Maquina_Quebrou: this.Maquina,
                setor: this.setor,
                desc_problema: this.comentario,
                tipo_serviço: this.serviço,
                status_tecnico: 'aberto',
                status: 'aberto'


            })
           
            this.confirmDialog = true
            this.serviço= ''
            this.comentario=''
            this.equipamento=''
            this.Maquina=''
            this.setor=''
        },
        goHome(){
            this.$router.push('/gerente')
        }
       
    }
}
</script>