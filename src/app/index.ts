import Vue from "vue";
import Vuex from "vuex";

declare var require: any;
let App = require('./components/App.vue').default;

window.onload = () => {
    new Vue(App);
    Vue.use(Vuex);
};
