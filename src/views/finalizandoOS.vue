<template>
    <v-container style="width:100%; height:75%;">
        <h2 class="text-center"> Atividade em andamento </h2>
          <v-flex mt-4>      
              <v-card><h3>Máquina ROMI C420 v5</h3>
              </v-card>
        </v-flex>
        <div class="centralizar">
            <v-row 
            
            class="mb-0 mt-0"
            
            >
        <v-col
                style="width:100%; "
                sm="6"
                md="5"
                offset-md="2"
                lg="6"
                offset-lg="0"
            >        
                <v-card
                @click="relatorio()"
                style="background: #ffd700; width:100%;"
                class="pa-2"
                outlined
                hover
                tile
                >
                <!-- <v-img contain :src="require('../../imagens/Tela home/orçamento icon2.png')" style="width:60%; height:100%; "></v-img> -->
                <h3 style="color:white;"  class="text-center">Finalizar <br> procedimento</h3>
                </v-card>
            </v-col>
            </v-row>
            <v-row>

        
            <v-col
                sm="6"
                md="5"
                offset-md="2"
                lg="6"
                offset-lg="0"
                style="width:100%;"
            >
                <v-card
                @click="instrucoes()"
                class="pa-2"
                style="background: #ffd700"
                outlined
                hover
                tile>
                <!-- <v-img contain :src="require('../../imagens/Tela home/histórico icon2.png')" style="width:60%; height:100%; "></v-img> -->

                <h3 style="color:white;" class="text-center"><br>Instruções </h3>
                </v-card>
            </v-col>
            </v-row>
                <!-- <v-row>

        
            <v-col
                sm="6"
                md="5"
                offset-md="2"
                lg="6"
                offset-lg="0"
                style="width:100%;"
            >
                <v-card
                @click="relatorio()"
                class="pa-2"
                style="background: #ffd700"
                outlined
                hover
                tile>
                <v-img contain :src="require('../../imagens/Tela home/histórico icon2.png')" style="width:60%; height:100%; "></v-img>

                <h3 style="color:white;" class="text-center" >Enviar<br>Relatório </h3>
                </v-card>
            </v-col>
            </v-row> -->
        </div>
    </v-container>
</template>


<script>
export default {
    data(){
            return{
                
            }
        },
    methods: {
        qrCode(){
            this.$router.push('/qrCode')
        },
        instrucoes(){
            this.$router.push('/instrucoes')
        },
        relatorio(){
            this.$router.push('/relatorio')
        }
    }
}
</script>

<style>
.centralizar{
    margin-top:40%;
}
</style>