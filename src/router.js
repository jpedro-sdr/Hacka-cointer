import Vue from 'vue'
import Router from 'vue-router'
import NovaOcorrencia from './views/NovaOcorrencia.vue'
import Login from './views/Login.vue'
import Ocorrencias from './views/Ocorrencias'
import Ocorrencia from './views/Ocorrencia'
import Cheguei from './views/Cheguei.vue'
import Gerente from './views/Gerente.vue'
import Tecnico from './views/Tecnico.vue'
import OS from './views/OS'
import OcorrenciaOS from './views/OcorrenciaOS'
import qrCode from './views/qrCode'
import andamentoOS from './views/andamentoOS'
import instrucoes from './views/Instrucoes.vue'
import Relatorio from './views/Relatorio'
import instrucoesFinais from './views/instrucoesfinais'
import finalizandoOS from './views/finalizandoOS'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
      meta:{
        show: false            
      }
    },
    {
      path: '/novaocorrencia',
      name: 'novaOcorrencia',
      component: NovaOcorrencia,
      meta:{
        show: true            
      }
    },
    {
      path: '/ocorrencias',
      name: 'ocorrencias',
      component: Ocorrencias,
      meta:{
        show: true            
      }
    },
    {
      path: '/ocorrenciaOS',
      name: 'ocorrenciaOS',
      component: OcorrenciaOS,
      meta:{
        show: true            
      }
    },
    {
      path: '/ocorrencia',
      name: 'ocorrencia',
      component: Ocorrencia,
      meta:{
        show: true            
      }
    },
    {
      path: '/cheguei',
      name: 'cheguei',
      component: Cheguei,
      meta:{
        show: false            
      }
    },
    {
      path: '/gerente',
      name: 'gerente',
      component: Gerente
    },
    {
      path: '/tecnico',
      name: 'tecnico',
      component: Tecnico
    },
    {
      path: '/os',
      name: 'OS',
      component: OS
    },
    {
      path: '/qrCode',
      name: 'qrCode',
      component: qrCode
    },
    {
      path: '/andamentoOS',
      name: 'andamentoOS',
      component: andamentoOS
    },
    {
      path: '/finalizandoOS',
      name: 'finalizandoOS',
      component: finalizandoOS
    },
    {
      path: '/instrucoes',
      name: 'instrucoes',
      component: instrucoes
    },
    {
      path: '/instrucoesfinais',
      name: 'instrucoesfinais',
      component: instrucoesFinais
    },
    {
      path: '/relatorio',
      name: 'relatorio',
      component: Relatorio
    }

  ]
})
