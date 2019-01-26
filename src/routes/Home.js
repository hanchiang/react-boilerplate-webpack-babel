/* eslint-disable react/prefer-stateless-function */
import React from 'react';

import MyLoadable from '../common/MyLoadable';

const LoadableComponent = MyLoadable({
  loader: () => new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.3) {
        resolve(import(/*  webpackChunkName: "Foo" */'../components/Foo'));
      } else {
        reject(new Error('OH NO!'));
      }
    }, 3000);
  })
});

export default function Home() {
  return (
    <div className="home">
      <img src="/dist/images/header.jpg" alt="Sky" className="app-header" />
      <p>
        We are a most promising species, Mr. Spock, as predators go. Did you know that? I
        frequently have my doubts. I dont. Not any more. And maybe in a thousand years or so, we
        will be able to prove it.
      </p>

      <LoadableComponent />
    </div>
  );
}
