import Vue from "vue";
import Vuex from "vuex";
import App from "./components/App.vue";

window.onload = () => {
    new Vue(App);
    Vue.use(Vuex);
};
