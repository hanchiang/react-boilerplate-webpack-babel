import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MyLoadable from '../common/MyLoadable';
import NavBar from '../common/NavBar';

const Home = MyLoadable({ loader: () => import(/* webpackChunkName: "Home" */'./Home') });
const Feed = MyLoadable({ loader: () => import(/* webpackChunkName: "Feed" */'./Feed') });

export default function Router() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <NavBar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/feed" component={Feed} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
