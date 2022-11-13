import styled from "styled-components";

export const Container = styled.section `
  padding: 5rem 8.75rem 5rem 8.75rem;

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

export const Text = styled.p `
  font-size: 1.25rem;
`;