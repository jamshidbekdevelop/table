import React, { useState } from "react";
import { datas } from "../../mock/data";
import {
  Basic,
  Btn,
  Button,
  Containers,
  Like,
  Star,
  Title,
  Trash,
} from "./styled";
const Postlist = () => {
  // const [state, setState] = useState(false);
  const [data, setData] = useState(datas);
  const onDelate = (id) => {
    setData(data.filter((value) => value.id !== id));
  };

 console.log(data.hidden);
  // let classNames = "red";
  // if (state.hidden === true) {
  //   classNames = " +hidden";
  // }
  return (
    <Basic>
      {data.map(({ id, title, hidden }) => (
        <Containers key={id}>
          <Title>{title}</Title>
          <Btn>
            <Button onClick={onClick}>
              <Star/>
            </Button>
            <Button onClick={() => onDelate(id)}>
              <Trash />
            </Button>
            <Like />
          </Btn>
        </Containers>
      ))}
    </Basic>
  );
};

export default Postlist;
