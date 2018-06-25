import React from "react";
import styled from "styled-components";

import PeopleList from "./PeopleList";
import Search from "./Search";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  border: 5px solid #eee;
  padding-top: 15px;
`;

export default ({ people, updatePeopleList }) => (
  <Container>
    <Search updatePeopleList={updatePeopleList} />
    <PeopleList people={people} />
  </Container>
);