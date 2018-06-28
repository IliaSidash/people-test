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
      zxqw: {
        id: 'zxqw',
        name: 'Jamie Brown',
        activeColor: 'red',
      },
      erdf: {
        id: 'erdf',
        name: 'Antonia Bins',
        activeColor: 'red',
      },
      dfcv: {
        id: 'dfcv',
        name: 'Brendan Wehner IV',
        activeColor: 'green',
      },
      cver: {
        id: 'cver',
        name: 'Wava Schuster',
        activeColor: 'yellow',
      },
    },
    peopleList: [],
    colors: ['red', 'yellow', 'green'],
    colorForSorted: '',
    valueForSorted: '',
  };

  componentWillMount() {
    const { people } = this.state;
    this.setState({
      peopleList: Object.keys(people),
    });
  }

  setActiveColor = (id, color) => {
    this.setState(
      (prevState) => {
        const { people } = prevState;
        people[id].activeColor = color;

        return {
          people,
        };
      },
      () => {
        this.updatePeopleList();
      },
    );
  };

  handleInput = (value) => {
    this.setState(
      {
        valueForSorted: value,
      },
      () => {
        this.updatePeopleList();
      },
    );
  };

  handleColorForFilter = (color) => {
    this.setState(
      (prevState) => {
        const { colorForSorted } = prevState;
        if (colorForSorted === color) {
          return {
            colorForSorted: '',
          };
        }
        return {
          colorForSorted: color,
        };
      },
      () => {
        this.updatePeopleList();
      },
    );
  };

  updatePeopleList = () => {
    this.setState((prevState) => {
      const { valueForSorted, colorForSorted } = prevState;
      const people = values(prevState.people);
      const results = filter(people, valueForSorted, { key: 'name' });

      if (colorForSorted.length > 0) {
        const filteredByColor = results.filter(person => person.activeColor === colorForSorted);
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
    const {
      people, peopleList, colors, colorForSorted,
    } = this.state;
    return (
      <Main
        peopleList={peopleList}
        people={people}
        colors={colors}
        colorForSorted={colorForSorted}
        setActiveColor={this.setActiveColor}
        handleInput={this.handleInput}
        handleColorForFilter={this.handleColorForFilter}
      />
    );
  }
}

export default App;
