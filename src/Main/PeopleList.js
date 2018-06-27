import React from "react";
import styled from "styled-components";

import ColorPicker from "./ColorPicker";
import Statistic from "./Statistic";

const People = styled.div`
  display: flex;
`;

const Result = styled.div`
  text-align: right;
  max-width: 400px;
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

export default ({ people, setActiveColor }) => (
  <People>
    <div>
      <Result>Найдено: {people.length} из 100000</Result>
      <PeopleList>
        {people.map((person, index) => (
          <Person key={person.id}>
            {person.name}
            <ColorPicker
              activeColor={person.activeColor}
              setActiveColor={color => setActiveColor(index, color)}
            />
          </Person>
        ))}
      </PeopleList>
    </div>
    <Statistic />
  </People>
);
