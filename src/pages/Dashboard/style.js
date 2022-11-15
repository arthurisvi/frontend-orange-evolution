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
  color: #686c72;
  font-weight: 400;
  @media screen and (max-width: 958px) {
    font-size: 1rem;
  }
`;

export const Title = styled.p `
  font-size: 2.25rem;
  color: #686c72;
  font-weight: 500;
  margin-bottom: 15px;
  @media screen and (max-width: 958px) {
    font-size: 1.5rem;
  }
`;