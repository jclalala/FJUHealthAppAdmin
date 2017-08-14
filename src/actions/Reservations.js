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

export function setReserveDate({reservationId, reserveDate}) {
    return function (dispatch) {
        dispatch({type: types.SET_RESERVATION_DATE});

        return ReservationService.setReserveDate({reservationId, reserveDate}).then((reservation) => {
            dispatch({type: types.SET_RESERVATION_DATE_SUCCESS, data: reservation});
        }).catch((err) => {
            dispatch({type: types.SET_RESERVATION_DATE_ERROR, error: err});
        });
    }
}

export function setPaymentDate({reservationId, paymentDate}) {
    return function (dispatch) {
        dispatch({type: types.SET_PAYMENT_DATE});

        return ReservationService.setPaymentDate({reservationId, paymentDate}).then((reservation) => {
            dispatch({type: types.SET_PAYMENT_DATE_SUCCESS, data: reservation});
        }).catch((err) => {
            dispatch({type: types.SET_PAYMENT_DATE_ERROR, error: err});
        });
    }
}

export function setSentPackageDate({reservationId, sentPackageDate}) {
    return function (dispatch) {
        dispatch({type: types.SET_SENT_PACKAGE_DATE});

        return ReservationService.setSentPackageDate({reservationId, sentPackageDate}).then((reservation) => {
            dispatch({type: types.SET_SENT_PACKAGE_DATE_SUCCESS, data: reservation});
        }).catch((err) => {
            dispatch({type: types.SET_SENT_PACKAGE_DATE_ERROR, error: err});
        });
    }
}

export function setAgentCalledDate({reservationId, agentCalledDate}) {
    return function (dispatch) {
        dispatch({type: types.SET_AGENT_CALLED_DATE});

        return ReservationService.setAgentCalledDate({reservationId, agentCalledDate}).then((reservation) => {
            dispatch({type: types.SET_AGENT_CALLED_DATE_SUCCESS, data: reservation});
        }).catch((err) => {
            dispatch({type: types.SET_AGENT_CALLED_DATE_ERROR, error: err});
        });
    }
}
