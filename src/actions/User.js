import * as types from '../constants/ActionTypes';
import UserService from '../domain/User';
import DomainCommon from '../domain/Common'

export function login({email, password}) {
    return function (dispatch) {
        dispatch({type: types.LOGIN});
        return UserService.login({email, password}).then((user) => {
            dispatch({type: types.LOGIN_SUCCESS, data: user});
            return user;
        }).catch((err) => {
            return dispatch({type: types.LOGIN_ERROR, error: err});
        });
    }
}

export function logout() {
    return function (dispatch) {
        DomainCommon.clearAPIToken();
        return dispatch({type: types.LOGOUT});
    }
}