import Vue from "vue";
import Vuex from "vuex";
import { getList } from "./service/ratesService";

declare var require: any;
let App = require('./components/App.vue').default;

window.onload = () => {
    getList();
    new Vue(App);
    Vue.use(Vuex);
};
