import { ActionTree } from 'vuex';
import axios from 'axios';
import { IRatesState, IRates, IParams } from '../types';
import { RootState } from '../../types';


export const actions: ActionTree<IRatesState, RootState> = {
    fetchData({ commit }, payload: IParams): any {
        const date = payload.date || 'latest';
        const symbols = payload.symbols && payload.symbols.length > 0 ? payload.symbols : null;
        let getParams = '';

        if (payload.base && symbols) {
            getParams =  `?base=${payload.base}&symbols=${symbols.join(',')}`;
        }
        if (payload.base && !symbols) {
            getParams =  `?base=${payload.base}`;
        }
        if (!payload.base && symbols) {
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
    fetchCurrencyList({ commit }): any {
        axios({
            url: `https://api.ratesapi.io/api/latest`
        }).then((response) => {
            const payload: IRates = response && response.data;
            commit('currencyListLoaded', Object.keys(payload.rates));
        }, (error) => {
            console.log(error);
            commit('currencyListError');
        });
    },
    updateDate({ commit }, payload): any {
        commit('updateDate', payload);
    },
    updateBase({ commit }, payload): any {
        commit('updateBase', payload);
    },
    updateSymbols({ commit }, payload): any {
        commit('updateSymbols', payload);
    }
};
