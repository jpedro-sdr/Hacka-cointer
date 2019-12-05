<template>
  <v-container>
      <h3> Máquina ROMI C420 v5</h3>
    <v-img style="height:80%;" contain :src="require('../../imagens/Tela home/instrucao.jpeg')"></v-img>
    <v-flex style="margin-top:100px; " >
         <v-btn rounded dark  @click="retornar">retornar</v-btn>
    </v-flex>
   
  </v-container>
</template>

<script>
export default {
    methods:{
        retornar(){
            this.$router.push('/finalizandoOS')
        }
    }
}
</script>

<style>

</style>