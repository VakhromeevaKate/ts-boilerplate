import { ActionTree } from 'vuex';
import axios from 'axios';
import { IRatesState, IRates } from '../types';
import { RootState } from '../../types';


export const actions: ActionTree<IRatesState, RootState> = {
    fetchData({ commit }): any {
        axios({
            url: 'https://api.ratesapi.io/api/latest'
        }).then((response) => {
            const payload: IRates = response && response.data;
            commit('ratesLoaded', payload);
        }, (error) => {
            console.log(error);
            commit('ratesError');
        });
    },
    sayHello({commit}): any {
        console.log("HELLO, VUEX IS RUNNING");
    }
};
