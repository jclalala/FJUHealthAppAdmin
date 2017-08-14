const HttpResponseErrorHandler = store => next => action => {
    let result = null;

    if (action.error) {
        result = Promise.reject(next(action).error);

        // TODO: Jeff, emit 401 and 500 events for client side global error handling
    } else {
        result = next(action);
    }

    return result;
};

export default HttpResponseErrorHandler;