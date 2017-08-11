import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import settings from './Settings';
import reservations from './Reservations';

const reducers = {
    routing: routerReducer,
    settings,
    reservations
};

module.exports = combineReducers(reducers);
