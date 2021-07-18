const reducerBuilder = (initialState, reducers) => {
    return (state = initialState, action) => {
        if (reducers.hasOwnProperty(action.type)) {
            return reducers[action.type](state, action);
        }
        return state;
    }
}

const actionBuilder = (type, ...argNames) => {
    return (...values) => {
        if (argNames.length === values.length) {
            let action = { type };
            if (argNames.length && values.length) {
                argNames.forEach((arg, index) => {
                    action[argNames[index]] = values[index];
                });
            }
            return action;
        }
    }
}

const thunkBuilder = processor => {
    return value => {
        return (dispatch, getState) => {
            processor(value, dispatch, getState);
        }
    }
}

module.exports = {
    reducerBuilder,
    actionBuilder,
    thunkBuilder
}