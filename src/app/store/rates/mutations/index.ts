import { MutationTree } from 'vuex';
import { IRatesState, IRates } from '../types';

export const mutations: MutationTree<IRatesState> = {
    ratesLoaded(state, payload: IRates) {
        state.error = false;
        state.rates = payload.rates;
        state.base = payload.base;
        state.date = payload.date
    },
    ratesError(state) {
        state.error = true;
        state.rates = {};
    },
    updateDate (state, payload) {
        state.date = payload
    },
    updateBase (state, payload) {
        state.base = payload;
    },
    updateSymbols (state, payload) {
        state.symbols = payload
    },
    currencyListLoaded (state, payload ) {
        state.currencyList = payload
    }
};
