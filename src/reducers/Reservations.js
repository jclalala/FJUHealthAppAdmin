import APPCONFIG from 'constants/Config';
import {
    FETCH_RESERVATIONS,
    FETCH_RESERVATIONS_SUCCESS,
    FETCH_RESERVATIONS_ERROR
} from '../constants/ActionTypes';

const initialState = {data: []};

const reservations = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_RESERVATIONS_SUCCESS:
            return {
                ...state,
                data: action.data
            };
        case FETCH_RESERVATIONS_ERROR:
            return {
                ...state,
                error: action.error
            };
        default:
            return state;
    }
};

module.exports = reservations;
