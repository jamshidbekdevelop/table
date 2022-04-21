import React from "react";
import { Basic, Like, Main, Name, Post } from "./styled";

const AppHeader = () => {
  return (
    <Basic>
      <Main>
        <Name>Jamshidbek</Name>
      </Main>

      <Main>
        <Post>Post 0</Post>
        <Like>Like 0</Like>
      </Main>
    </Basic>
  );
};

export default AppHeader;
