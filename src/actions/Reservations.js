import * as types from '../constants/ActionTypes';
import ReservationService from '../domain/Reservations';

export function fetchReservations() {
    return function (dispatch) {
        dispatch({type: types.FETCH_RESERVATIONS});

        return ReservationService.listReservations().then((reservations) => {
            dispatch({type: types.FETCH_RESERVATIONS_SUCCESS, data: reservations});
        }).catch((err) => {
            dispatch({type: types.FETCH_RESERVATIONS_ERROR, error: err});
        });
    }
}