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

export default ({ people }) => (
  <People>
    <div>
      <Result>Найдено: 30 из 1000002</Result>
      <PeopleList>
        {people.map(person => (
          <Person key={person.id}>
            {person.name}
            <ColorPicker colors={person.colors} />
          </Person>
        ))}
      </PeopleList>
    </div>
    <Statistic />
  </People>
);
