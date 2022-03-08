import React from "react";
import { useState } from "react";
import styled from "styled-components";

interface Props {
  title: string;
  name: string;
  register: any;
  checkboxs: string[];
}

export const CheckBox: React.FC<Props> = ({
  name,
  title,
  register,
  checkboxs,
}) => {
  return (
    <Container>
      <p>{title}</p>
      <Div>
        {checkboxs.map((checkBoxName: string) => {
          return (
            <>
              <label htmlFor={checkBoxName}>{checkBoxName}</label>
              <input
                {...register(name)}
                type="checkbox"
                id={checkBoxName}
                value={checkBoxName}
              />
            </>
          );
        })}
      </Div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  direction: rtl;
  margin: 5px;
`;

const Div = styled.div`
  display: flex;
  justify-content: space-around;
`;
