/**
 * Created by Cral-Gates on 2017/6/25.
 */
'use strict';
import * as types from '../constants/ActionTypes';

const initialState = {
    loading : false,
    data:''
};

export default function login(state = initialState, action){
    switch (action.type) {
        case types.PERFORM_LOGIN_ACTION:
            return Object.assign({}, state, {
                loading: true
            });
        case types.RECEIVE_LOGIN_ACTION:
            return Object.assign({}, state, {
                loading: false,
                data: action.result
            });
        default:
            return state;
    }
}