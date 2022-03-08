import React from "react";
import styled from "styled-components";

interface INav {
  title: string;
  href: string;
}

interface Props {
  links: INav[];
}

const color = ["#f9ffaa", "#8ce4ff", "#ffc5cf", "#b0ff8c", "#dc91ff"];

export const Nav: React.FC<Props> = ({ links }) => {
  return (
    <Container>
      {links.map((link, index) => {
        return (
          <Link color={color[index]} href={link.href}>
            {link.title}
          </Link>
        );
      })}
    </Container>
  );
};

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 5rem 12% 0.2rem 12%;
`;

const Link = styled.a`
  display: flex;
  justify-content: center;
  /* flex-grow: 1; */
  flex-shrink: 1;
  flex-basis: 19.5%;
  background-color: ${(props) => props.color};
  padding: 1rem 0.5rem;
`;
