import { GetterTree } from 'vuex';
import { IState } from '../types';
import { RootState } from '../../types';

export const getters: GetterTree<IState, RootState> = {
    getRates(state): object {
        return state.rates.rates;
    },
    getBase(state): string {
        return state.rates.base;
    },
    getDate(state): string {
        return state.rates.date;
    }
};
