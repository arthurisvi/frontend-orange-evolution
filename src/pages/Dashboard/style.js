import styled from "styled-components";

export const Title = styled.h1 `
  font-size: 2.25rem;
  font-weight: 400;
  color: #292727;
  margin-bottom: 1.875rem;
  @media screen and (max-width: 958px) {
    text-align: center;
  }
`;

export const MobileDiv = styled.div `
  @media screen and (max-width: 958px) {
    background-color: red;
    display: flex;
    flex-direction: column;
    padding: 0px;
  }
`;

export const ContainerCards = styled.div `
  display: flex;
  gap: 1.875rem;
  margin-bottom: 3.75rem;
  @media screen and (max-width: 958px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.875rem;
  }
`;

export const Container = styled.div `
  padding: 5rem 8.75rem 5rem 8.75rem;
  @media screen and (max-width: 958px) {
    padding: 10px;
  }
`;