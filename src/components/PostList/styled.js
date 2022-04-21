import styled from "styled-components";
import { ReactComponent as star } from "../../assets/icons/star.svg";
import { ReactComponent as trash } from "../../assets/icons/trash.svg";
import { ReactComponent as like } from "../../assets/icons/like.svg";
export const Basic = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  gap: 10px;
`;
export const Containers = styled.div`
  width: 100%;
  height: 100px;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  align-items: center;
  font-size: 30px;
  justify-content: space-between;
  padding: 0px 60px;
  box-sizing: border-box;
`;
export const Title = styled.h1`
  color: black;
  font-size: 3vw;
  /* :active{
    color: yellow;
  }
  :focus{
    color: yellow;
  } */
  /* color: ${({ hidden }) => `${(hidden===true) ? 'red' : "black"}`}; */
  /* :hover {
    color: yellow;
  } */
`;
export const Btn = styled.div`
  display: flex;
  gap: 5px;
`;
export const Button = styled.button`
  padding: 10px;
  :hover {
    opacity: 0.7;
  }
`;
export const Star = styled(star)`
  width: 20px;
  path {
    fill: black;
  }
`;
export const Trash = styled(trash)`
  width: 20px;
  path {
    fill: red;
  }
`;
export const Like = styled(like)`
  width: 25px;
  path {
    fill: black;
  }
`;
