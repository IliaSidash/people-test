import React from 'react';
import styled from 'styled-components';

import ColorPicker from './ColorPicker';
import Statistic from './Statistic';
import Result from './Result';

const People = styled.div`
  display: flex;
`;

const PeopleList = styled.div`
  padding: 5px;
  width: 400px;
  border: 1px solid #000;
`;

const Person = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
`;

export default ({
  people, peopleList, colors, setActiveColor,
}) => (
  <People>
    <div>
      <Result people={people} peopleList={peopleList} />

      <PeopleList>
        {peopleList.map(person => (
          <Person key={people[person].id}>
            {people[person].name}
            <ColorPicker
              activeColor={people[person].activeColor}
              colors={colors}
              setActiveColor={color => setActiveColor(people[person].id, color)}
            />
          </Person>
        ))}
      </PeopleList>
    </div>
    <Statistic />
  </People>
);
