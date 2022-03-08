import React, { useState } from "react";
import styled from "styled-components";

interface Props {
  register: any;
  name: string;
  title: string;
  min: string;
  max: string;
}

export const FilterLine: React.FC<Props> = ({
  register,
  name,
  title,
  min,
  max,
}) => {
  const [range, setRange] = useState("0");
  return (
    <Continer>
      <span>{title}</span>
      <Div>
        <Input
          {...register(name)}
          type={"range"}
          min={min}
          max={max}
          step="1"
          onChange={(e) => {
            setRange(e.target.value);
          }}
        />
        <ShowRange>{range}</ShowRange>
      </Div>
    </Continer>
  );
};

const Continer = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Input = styled.input`
  width: 9rem;
  -webkit-appearance: none;
  height: 15px;
  cursor: ew-resize;
  background: #fff;
  border-radius: 16px;
  border: 1px solid #81858b;
`;

const ShowRange = styled.span`
  border: 1px solid #e0e0e2;
  border-radius: 16px;
  min-width: 30px;
  max-width: 30px;
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
`;
