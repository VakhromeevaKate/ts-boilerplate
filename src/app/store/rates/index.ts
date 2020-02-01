import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { IRatesState } from './types';
import { RootState } from '../types';

export const state: IRatesState = {
    rates: {
        data: undefined,
        error: false
    },
    error: false
};

const namespaced: boolean = true;

export const rates: Module<IRatesState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
};
