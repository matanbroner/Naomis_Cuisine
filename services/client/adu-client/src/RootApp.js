import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import configureStore, { history } from './store';
import NotificationsManager from './containers/NotificationsManager'
import App from './containers/App';

export const store = configureStore();

const RootApp = () => {
    return(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <NotificationsManager>
                    <Switch>
                        <Route path="/" component={App}/>
                    </Switch>
                </NotificationsManager>
            </ConnectedRouter>
        </Provider>
    )
}


export default RootApp;