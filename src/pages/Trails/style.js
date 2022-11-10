import styled from "styled-components";

export const ContainerCards = styled.div `
  display: flex;
  gap: 30px;
  justify-content: center;
  margin-top: 1.875rem;
  @media screen and (max-width: 958px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Title = styled.h1 `
  text-align: center;
`;

export const Container = styled.body `
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 958px) {
    margin: 1.875rem 0 1.875rem 0;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;