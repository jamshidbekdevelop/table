import styled from "styled-components";

export const Basic = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
  gap: 10px;
`;
export const Main =styled.div`
display: flex;
`
export const Input = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  padding-left: 15px;
  color: #000;
  font-size: 20px;
  border: 1px solid black;
`;
export const Buttun = styled.button`
  padding:  15px 30px;
  border: 1px solid black;
  font-size: 20px;
  cursor: pointer;
  :hover {
    opacity: 0.6;
  }
`;