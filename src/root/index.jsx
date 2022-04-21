import React from "react";
import AppHeader from "../components/AppHeader";
import PostAddForm from "../components/PostAddForm";
import Postlist from "../components/PostList";
import SearchPanel from "../components/SearchPanel";
import { AddPanel, Basic, Container, Top } from "./styled";

const Root = () => {
  return (
    <Basic>
      <Top>
        <AppHeader />
        <SearchPanel />
      </Top>
      <Container>
        <Postlist />
      </Container>
      <AddPanel>
        <PostAddForm />
      </AddPanel>
    </Basic>
  );
};

export default Root;
