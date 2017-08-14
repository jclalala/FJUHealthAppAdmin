import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {Router, hashHistory} from 'react-router';
import {syncHistoryWithStore, routerMiddleware} from 'react-router-redux';
import ReduxThunk from 'redux-thunk';
import HttpResponseErrorHandler from 'domain/HttpResponseErrorHandler';
import reducers from './reducers';

const store = createStore(
    reducers,
    applyMiddleware(routerMiddleware(hashHistory), ReduxThunk, HttpResponseErrorHandler)
);

const history = syncHistoryWithStore(hashHistory, store);

function scrollToTop() {
    window.scrollTo(0, 0);
}

const rootRoute = {
    childRoutes: [{
        path: '/',
        component: require('./containers/App'),
        indexRoute: {onEnter: (nextState, replace) => replace('/login')},
        childRoutes: [
            require('./routes/app'),
            require('./routes/404'),
            require('./routes/500'),
            require('./routes/login'),
            {
                path: '*',
                indexRoute: {onEnter: (nextState, replace) => replace('/404')},
            }
        ]
    }]
};

render(
    <Provider store={store}>
        <Router
            onUpdate={scrollToTop}
            history={history}
            routes={rootRoute}
        />
    </Provider>,
    document.getElementById('app-container')
);
