import Vue from "vue";
import Vuex from "vuex";
// @ts-ignore
import KeenUI from "keen-ui";
import "./styles.scss";
import "../favicon.ico";

declare var require: any;
let App = require('./components/App.vue').default;
let Base = require('./components/Base.vue').default;
let Calendar = require('./components/Calendar.vue').default;
let Symbols = require('./components/Symbols.vue').default;
let Table = require('./components/Table.vue').default;

window.onload = () => {
    new Vue(App);
    new Vue(Base);
    new Vue(Calendar);
    new Vue(Symbols);
    new Vue(Table);
    Vue.use(Vuex);
    Vue.use(KeenUI);
};
