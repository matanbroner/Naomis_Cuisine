import {
    applyMiddleware,
    compose,
    createStore
} from 'redux';
import reducers from '../reducers/index';
import {
    createBrowserHistory as createHistory
} from 'history'
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootSaga from '../sagas';
// import {routerMiddleware} from 'react-router-redux';


export const history = createHistory();
// const routeMiddleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, routerMiddleware(history)];

export default function configureStore(initialState) {
    const store = createStore(
        reducers(history),
        initialState,
        composeWithDevTools(applyMiddleware(...middlewares))
    );

    sagaMiddleware.run(rootSaga);

    // if (module.hot) {
    //     // Enable Webpack hot module replacement for reducers
    //     module.hot.accept('../reducers/index', () => {
    //         const nextRootReducer = require('../reducers/index');
    //         store.replaceReducer(nextRootReducer);
    //     });
    // }
    return store;
}
