import { MutationTree } from 'vuex';
import { IState, IRates } from '../types';

export const mutations: MutationTree<IState> = {
    ratesLoaded(state, payload: IRates) {
        state.rates.error = false;
        state.rates.rates = payload.rates;
    },
    ratesError(state) {
        state.rates.error = true;
        state.rates.rates = {};
    }
};
