import { MutationTree } from 'vuex';
import { IRatesState, IRates } from '../types';

export const mutations: MutationTree<IRatesState> = {
    ratesLoaded(state, payload: IRates) {
        state.error = false;
        state.rates = payload;
    },
    ratesError(state) {
        state.error = true;
        // @ts-ignore
        state.rates = undefined;
    }
};
