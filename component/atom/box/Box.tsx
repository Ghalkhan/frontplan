import React from "react";
import styled from "styled-components";
import { Button } from "../button/Button";

interface Props {
  title: string;
  isRow?: boolean;
}
interface IStyle {
  isRow?: boolean;
}
export const MainBox: React.FC<Props> = ({ isRow, children, title }) => {
  return (
    <Box>
      <BoxHeader>{title}</BoxHeader>
      <BoxCantainer isRow={isRow}>{children}</BoxCantainer>
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  flex-direction: column; 
  background-color: #ffdce2;
  border: 4px solid pink;
  margin: 1rem 15%;
  border-radius: 1.5rem;
`;

const BoxHeader = styled.h3`
  background-color: #ffb1be;
  padding: 1rem 0.5rem;
  flex: 1;
  border-radius: 1.5rem 1.5rem 0 0;
  margin: -4px;
`;

const BoxCantainer = styled.div<IStyle>`
  display: flex;
  /* justify-content: space-between; */
  padding: 1rem;
  flex-direction: ${(p) => (p.isRow ? "row" : "column")};
`;
