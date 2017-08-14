import * as types from '../constants/ActionTypes';

const initialState = {data: []};

const reservations = (state = initialState, action) => {
    let newState, reservation;
    switch (action.type) {
        case types.FETCH_RESERVATIONS_SUCCESS:
            return {
                ...state,
                data: action.data
            };
        case types.SET_RESERVATION_DATE_SUCCESS:
        case types.SET_PAYMENT_DATE_SUCCESS:
        case types.SET_SENT_PACKAGE_DATE_SUCCESS:
        case types.SET_AGENT_CALLED_DATE_SUCCESS:
            newState = JSON.parse(JSON.stringify(state));
            reservation = newState.data.find((reservation) => reservation.id === action.data.id);
            reservation.reserveDate = action.data.reserveDate;
            reservation.paymentDate = action.data.paymentDate;
            reservation.sentPackageDate = action.data.sentPackageDate;
            reservation.agentCalledDate = action.data.agentCalledDate;

            return {
                ...state,
                data: newState.data
            };
        case types.FETCH_RESERVATIONS_ERROR:
        case types.SET_RESERVATION_DATE_ERROR:
        case types.SET_PAYMENT_DATE_ERROR:
            return {
                ...state,
                error: action.error
            };
        default:
            return state;
    }
};

module.exports = reservations;
