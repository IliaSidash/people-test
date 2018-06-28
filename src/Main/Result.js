import React from 'react';
import styled from 'styled-components';

const Result = styled.div`
  text-align: right;
  max-width: 400px;
`;

export default ({ people, peopleList }) => (
  <Result>
    Найдено:
    {peopleList.length}
    из
    {Object.keys(people).length}
  </Result>
);
