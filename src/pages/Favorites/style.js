import styled from "styled-components";

export const Container = styled.section `
  padding: 5rem 8.75rem 5rem 8.75rem;
  margin-bottom: 200px;
  @media screen and (max-width: 958px) {
    width: 100%;
    padding: 0.938rem;
  }
`;

export const ContainerCards = styled.section `
  width: 70%;
  @media screen and (max-width: 958px) {
    width: 100%;
  }
`;

export const Content = styled.div `
  margin-top: 3.75rem;
  width: "100%";
  color: #707070;
  text-align: center;
  @media screen and (max-width: 958px) {
    margin-top: 1.875rem;
  }
`;

export const Subtitle = styled.div `
  font-size: 2rem;
`;

export const Text = styled.div `
  font-size: 1.125rem;
`;

export const Title = styled.h1 `
  font-size: 2.25rem;
  font-weight: 500;
  @media screen and (max-width: 958px) {
    font-size: 1.5rem;
  }
`;