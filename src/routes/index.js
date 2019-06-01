import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import MyLoadable from '../common/MyLoadable';
import NavBar from '../common/NavBar';
import store from '../redux/store';

const Home = MyLoadable({ loader: () => import(/* webpackChunkName: "Home" */'./Home') });

export default function Router() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <NavBar />

        <Provider store={store}>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Provider>
      </div>
    </BrowserRouter>
  );
}
