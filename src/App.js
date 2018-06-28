import React, { Component } from 'react';
import { filter } from 'fuzzaldrin';
import { values, keyBy, keys } from 'lodash/fp';

import Main from './Main';

class App extends Component {
  state = {
    people: {
      qwer: {
        id: 'qwer',
        name: 'Brooklyn Heller',
        activeColor: 'red',
      },
      asdf: {
        id: 'asdf',
        name: 'Miss Santa Brown',
        activeColor: 'red',
      },
      zxcv: {
        id: 'zxcv',
        name: 'Mr. Berta Kuhn',
        activeColor: 'green',
      },
      qwas: {
        id: 'qwas',
        name: 'Cristal Town',
        activeColor: 'yellow',
      },
    },
    peopleList: ['qwer', 'asdf', 'zxcv', 'qwas'],
    colors: ['red', 'yellow', 'green'],
  };

  setActiveColor = (id, color) => {
    this.setState((prevState) => {
      const { people } = prevState;
      people[id].activeColor = color;

      return {
        people,
      };
    });
  };

  updatePeopleList = (value, activeColor) => {
    this.setState((prevState) => {
      const people = values(prevState.people);
      const results = filter(people, value, { key: 'name' });

      if (activeColor) {
        const filteredByColor = results.filter(person => person.activeColor === activeColor);
        const peopleList = keys(keyBy('id', filteredByColor));
        return {
          peopleList,
        };
      }

      const peopleList = keys(keyBy('id', results));
      return {
        peopleList,
      };
    });
  };

  render() {
    const { people, peopleList, colors } = this.state;
    return (
      <Main
        peopleList={peopleList}
        people={people}
        colors={colors}
        setActiveColor={this.setActiveColor}
        updatePeopleList={this.updatePeopleList}
      />
    );
  }
}

export default App;
