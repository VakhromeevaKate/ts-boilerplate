import { ActionTree } from 'vuex';
import axios from 'axios';
import { IRatesState, IRates /*, IParams*/ } from '../types';
import { RootState } from '../../types';


export const actions: ActionTree<IRatesState, RootState> = {
    fetchData({ commit }): any {
        /* const getterParams = params.base && params.date ?
            `?symbols=${params.base}` : '';*/
        axios({
            url: `https://api.ratesapi.io/api/latest`
        }).then((response) => {
            const payload: IRates = response && response.data;
            commit('ratesLoaded', payload);
        }, (error) => {
            console.log(error);
            commit('ratesError');
        });
    },
    updateDate({ commit }, payload): any {
        commit('updateDate', payload)
    },
    updateBase({ commit }, payload): any {
        commit('updateBase', payload)
    }
};
