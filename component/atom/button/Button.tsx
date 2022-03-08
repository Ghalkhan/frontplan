import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
}

export const Button: React.FC<Props> = ({ title }) => {
  return <ButtonForm>{title}</ButtonForm>;
};

const ButtonForm = styled.button`
  background-color: #ffb1be;
  border: 2px solid pink;
  padding: 1rem;
  border-radius: 0.5rem;
`;
