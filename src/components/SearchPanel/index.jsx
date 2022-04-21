import React from "react";
import { Basic, Buttun, Input, Main } from "./styled";

const SearchPanel = () => {
  return (
    <Basic>
      <Input placeholder="Search by posts" />
      <Main>
        <Buttun>All</Buttun>
        <Buttun>Liked</Buttun>
      </Main>
    </Basic>
  );
};

export default SearchPanel;
