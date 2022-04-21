import React from "react";
import { Basic, Buttun, Input, Main } from "./styled";

const PostAddForm = () => {
  return (
    <Basic>
      <Input placeholder="What are you thinking about?" />
      <Main>
        <Buttun>Add</Buttun>
      </Main>
    </Basic>
  );
};

export default PostAddForm;
