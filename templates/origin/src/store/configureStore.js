import {createStore, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {rootReducer} from '../reducers'

export default function configureStore() {
    let middlewares = [thunkMiddleware]
    if (process.env.NODE_ENV !== 'production') {
        middlewares = middlewares.concat(require('redux-logger')())
    }
    const composeEnhancers =
        process.env.NODE_ENV !== 'production' &&
        typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                // Specify here name, actionsBlacklist, actionsCreators and other options
            }) : compose

    const store = createStore(
        rootReducer,
        composeEnhancers(
            applyMiddleware(...middlewares)
        )
    )
    return store
}
