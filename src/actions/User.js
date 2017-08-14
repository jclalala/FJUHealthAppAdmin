import * as types from '../constants/ActionTypes';
import UserService from '../domain/User';

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