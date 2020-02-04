import Vue from "vue";
import Vuex from "vuex";
// @ts-ignore
import KeenUI from "keen-ui";

declare var require: any;
let App = require('./components/App.vue').default;

window.onload = () => {
    new Vue(App);
    Vue.use(Vuex);
    Vue.use(KeenUI);
};
