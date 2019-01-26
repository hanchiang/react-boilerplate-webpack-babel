/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './styles.scss';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      captain: {},
      Foo: null
    };
  }

  componentDidMount() {
    this.onGetKirkBio();
    import(/* webpackChunkName: 'Foo' */ './Foo').then(Foo => {
      this.setState({ Foo: Foo.default });
    });
  }

  onGetKirkBio = async () => {
    try {
      const result = await fetch('http://stapi.co/api/v1/rest/character/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: {
          title: 'James T. Kirk',
          name: 'James T. Kirk',
        },
      });
      const resultJSON = await result.json();
      const character = resultJSON.characters[0];
      this.setState({ captain: character });
    } catch (error) {
      console.log('error', error);
    }
  }

  render() {
    const { captain, Foo } = this.state;

    return (
      <div className="app">
        <img src="/dist/images/header.jpg" alt="Sky" className="app-header" />
        <p>
          We are a most promising species, Mr. Spock, as predators go. Did you know that? I
          frequently have my doubts. I dont. Not any more. And maybe in a thousand years or so, we
          will be able to prove it.
        </p>
        <p>- Captain Kirk</p>
        <section>
          {Object.values(captain).length === 0 ? (
            <p>Loading User Information</p>
          ) : (
            <p style={{ wordBreak: 'break-all' }}>{JSON.stringify(captain)}</p>
          )}
        </section>

        {Foo ? <Foo /> : <p>Foo is loading</p>}
      </div>
    );
  }
}
