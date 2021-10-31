import Vue from 'vue'
import Index from './index.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'

Vue.use(BootstrapVue)

new Vue({
    el: '#app',
    router,
    render: h => h(Index)
})