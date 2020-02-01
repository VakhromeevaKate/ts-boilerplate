import { GetterTree } from 'vuex';
import { IRatesState, IRates } from '../types';
import { RootState } from '../../types';

export const getters: GetterTree<IRatesState, RootState> = {
    getRates(state): IRates {
        const { rates } = state;
        return rates
    }
};
