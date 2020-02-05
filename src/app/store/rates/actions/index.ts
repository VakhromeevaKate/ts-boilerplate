import { ActionTree } from 'vuex';
import axios from 'axios';
import { IRatesState, IRates, IParams } from '../types';
import { RootState } from '../../types';


export const actions: ActionTree<IRatesState, RootState> = {
    fetchData({ commit }, payload: IParams): any {
        const date = payload.date || 'latest';
        let getParams = '';

        if (payload.base && payload.symbols && payload.symbols.length > 0) {
            getParams =  `?base=${payload.base}&symbols=${payload.symbols.join(',')}`;
        }
        if (payload.base && payload.symbols && payload.symbols.length === 0) {
            getParams =  `?base=${payload.base}`;
        }
        if (!payload.base && payload.symbols && payload.symbols.length > 0) {
            getParams =  `?symbols=${payload.symbols}`;
        }

        axios({
            url: `https://api.ratesapi.io/api/${date}${getParams}`
        }).then((response) => {
            const payload: IRates = response && response.data;
            commit('ratesLoaded', payload);
        }, (error) => {
            console.log(error);
            commit('ratesError');
        });
    },
    updateDate({ commit }, payload): any {
        commit('updateDate', payload);
    },
    updateBase({ commit }, payload): any {
        commit('updateBase', payload);
    },
    updateSymbols({ commit }, payload): any {
        console.log('updateSymbols', payload);
        commit('updateSymbols', payload);
    }
};
