import Vue from "vue";
import Vuex from "vuex";
import App from "./components/App.vue";
import { getList } from "./service/ratesService";

window.onload = () => {
    getList(console.log);
    new Vue(App);
    Vue.use(Vuex);
};
