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
  font-weight: 400;
  color: #292727;
  margin-bottom: 1.875rem;
`;

export const Container = styled.section `
  display: flex;
  flex-direction: column;
  padding: 5rem 8.75rem 5rem 8.75rem;
  @media screen and (max-width: 958px) {
    margin: 1.875rem 0 1.875rem 0;
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 30px;
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