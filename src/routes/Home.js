/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ActionCreator from '../redux/actions';

import MyLoadable from '../common/MyLoadable';

import header from '../static/images/header.jpg';

const LoadableComponent = MyLoadable({
  loader: () => new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.3) {
        resolve(import(/*  webpackChunkName: "Foo" */'../components/Foo'));
      } else {
        reject(new Error('OH NO!'));
      }
    }, 2000);
  })
});

class Home extends Component {
  static propTypes = {
    start: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.start();
  }

  render() {
    return (
      <div className="home">
        <img src={header} alt="Sky" className="app-header" />
        <p>
          We are a most promising species, Mr. Spock, as predators go. Did you know that? I
          frequently have my doubts. I dont. Not any more. And maybe in a thousand years or so, we
          will be able to prove it.
        </p>

        <LoadableComponent />
      </div>
    );
  }
}

const mapStateToProps = state => ({ list: state });
const mapDispatchToProps = dispatch => ({ start: () => dispatch(ActionCreator.start()) });

export default connect(mapStateToProps, mapDispatchToProps)(Home);
