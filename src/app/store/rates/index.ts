import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { IState } from './types';
import { RootState } from '../types';

export const state: IState = {
    rates: {
        rates: {},
        base: '',
        date: '',
        error: false,
    }
};

const namespaced: boolean = true;

export const rates: Module<IState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
};
