
<template>
    <v-container style="width:100%; height:75%;">
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
            @click="criarOS()"
            style="background: #ffd700; width:100%;"
            class="pa-2"
            outlined
            hover
            tile
            >
            <v-img contain :src="require('../../imagens/Tela home/orçamento icon2.png')" style="width:60%; height:100%; "></v-img>
            <h3 style="color:white;"  class="text-center">Cadastrar<br>OS</h3>
            </v-card>
        </v-col>
        <v-col
            sm="6"
            md="5"
            offset-md="2"
            lg="6"
            offset-lg="0"
            style="width:50%;"
        >
            <v-card
            class="pa-2"
            style="background: #ffd700"
            outlined
            hover
            tile>
            <v-img contain :src="require('../../imagens/Tela home/histórico icon2.png')" style="width:60%; height:100%; "></v-img>

            <h3 style="color:white;" class="text-center">Máquinas com defeito</h3>
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
            style="width:50%;"
        >
            <v-card
            class="pa-2"
            style="background: #03a7df; width:100%;"
            outlined
            hover
            tile
            
            >
            <v-img contain :src="require('../../imagens/Tela home/alterar dados icon2.png')" style="width:60%; height:100%; "></v-img>
            <h3 style="color:white; " class="text-center">Alterar dados pessoais</h3>
            </v-card>
        </v-col>
        <v-col
            sm="6"
            md="5"
            offset-md="2"
            lg="6"
            offset-lg="0"
            style="width:50%;"  
        >
            <v-card
            class="pa-2"
            style="background: #03a7df; width:100%;"
            outlined
            hover
            tile
            >
            <v-img contain :src="require('../../imagens/Tela home/sobre nós icon.png')" style="width:60%; height:100%; "></v-img>
            <h3 style="color: white;" class="text-center"> <br> Sobre nós </h3>
            </v-card>
        </v-col>
        
        </v-row> -->
    </v-container>
</template>

<script>
export default {
    methods:{
        criarOS(){
            this.$router.push('/os')
            
        }
    }

}
</script>

<style>
 .card{
        border-radius: 5px;
        background: rgba(23, 61, 231, 0.815); /* Old browsers */
        background: -moz-radial-gradient(center, ellipse cover, rgba(231,23,23,1) 0%, rgba(120,0,1,1) 100%); /* FF3.6-15 */
        background: -webkit-radial-gradient(center, ellipse cover, rgba(231,23,23,1) 0%,rgba(120,0,1,1) 100%); /* Chrome10-25,Safari5.1-6 */
        background: radial-gradient(ellipse at center, rgba(231,23,23,1) 0%,rgba(120,0,1,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e71717', endColorstr='#780001',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
        background-size: cover; 
        background-position: center;
        text-align: center;
        height: 100%;
        width: 100%;
    }
   #card_icon_xs{
        font-size: 2em;
        color: white;
    }
</style>