import styled from "styled-components";

export const ContainerAccordions = styled.div `
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media screen and (max-width: 958px) {
    width: 100%;
    margin-bottom: 15px;
  }
`;

export const Title = styled.p `
  margin-bottom: 30px;
  font-size: 34px;
  font-weight: 400;
  @media screen and (max-width: 958px) {
    text-align: center;
  }
`;

export const Container = styled.section `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 60px;
  @media screen and (max-width: 958px) {
    padding: 15px;
    gap: 30px;
  }
`;