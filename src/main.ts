import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import Nav from "@/components/Nav.vue";
import Layout from "@/components/Layout.vue";
//console.log(Nav);
import "@/assets/reset.scss";

//引入mint-ui
import "mint-ui/lib/style.css";
import { Button, Cell } from "mint-ui";

// Vue.use(Button);
Vue.component(Button.name, Button);
Vue.use(Cell);
// Vue.use(mt-button);

import { Field } from 'mint-ui';
Vue.component(Field.name, Field);

import { Badge } from 'mint-ui';
Vue.component(Badge.name, Badge);




Vue.component("Nav", Nav); //将导航栏注册为全局组件
Vue.component("Layout", Layout); //将布局注册为全局组件

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
