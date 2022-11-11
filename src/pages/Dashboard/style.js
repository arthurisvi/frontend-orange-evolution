import styled from "styled-components";

export const Title = styled.h1 `
  font-size: 2.25rem;
  font-weight: 400;
  color: #292727;
  margin-bottom: 1.875rem;
`;

export const MobileDiv = styled.div `
  @media screen and (max-width: 958px) {
    background-color: red;
    display: flex;
    flex-direction: column;
    padding: 0px;
  }
`;