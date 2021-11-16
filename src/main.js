import Vue from 'vue'
import App from './App.vue'
import router from './router'

//Vuex
import store from "./store";

// vant
import { Tabbar, TabbarItem, NavBar, List, Cell,Tab, Tabs,Step, Steps, Field,Form ,Button,Uploader,Toast,Card,ActionSheet } from 'vant';

Vue.use(Tabbar).use(TabbarItem).use(NavBar).use(List).use(Cell).use(Tab).use(Tabs).use(Step).use(Steps).use(Field).use(Form).use(Button).use(Uploader).use(Toast).use(Card).use(ActionSheet)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
