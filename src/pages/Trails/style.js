import styled from "styled-components";

export const ContainerCards = styled.div `
  display: flex;
  gap: 30px;
  @media screen and (max-width: 958px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Title = styled.h1 `
  text-align: ${(props) => (props.center ? "center" : "left")};
  font-size: 2.25rem;
  font-weight: 500;
  color: ${(props) => (props.color ? props.color : "#808080")};
  margin-bottom: ${(props) => (props.marginBottom)};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "0")};
  @media screen and (max-width: 958px) {
    margin-bottom: 1.875rem;
    font-size: 1.5rem
  }
`;

export const Container = styled.section `
  display: flex;
  flex-direction: column;
  padding: 0.938rem 8.75rem 5rem 8.75rem;
  /* margin-bottom: 200px; */
  @media screen and (max-width: 958px) {
    margin: 0 0 1.875rem 0;
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 0px;
    align-items: center;
    justify-content: center;
  }
`;

export const Text = styled.p `
  color: #675F5F;
  font-size: 1.125rem;
  margin-bottom: 30px;
  line-height: 30px;
`;

export const FirstContainer = styled.section `
  padding: 4.5rem 8.75rem 0.938rem 8.75rem;
  background-color: #f7f8f9;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  @media screen and (max-width: 958px) {
    padding: 1.875rem;
  }
`;

export const ContainerImg = styled.div `
  @media screen and (max-width: 958px) {
    display: none
  }
`;