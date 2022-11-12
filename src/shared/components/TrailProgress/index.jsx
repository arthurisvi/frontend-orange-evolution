import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";
import { userService } from "../../services/user.service";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const Card = styled.div`
  width: 71.875rem;
  padding: 1.875rem;
  background-color: #8c9ba9;
  border-radius: 6px;
  display: flex;
  gap: 15px;
  @media screen and (max-width: 1165px) {
    width: 100%;
    padding: 1.25rem;
    flex-direction: column;
  }
`;

const ContainerImg = styled.div`
  width: 15.625rem;
  height: 9.688rem;
  background-color: white;
  @media screen and (max-width: 1165px) {
    display: none;
  }
`;

const BoxProgress = styled.div`
  width: 300px;
  color: #96d86e;
  @media screen and (max-width: 1165px) {
    width: 30%;
  }
`;

const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 10px;
  @media screen and (max-width: 1165px) {
    justify-content: center;
    gap: 30px;
  }
`;

const Text = styled.p`
  font-size: ${(props) => props.size};
`;

export default function TrailProgress(props) {
  const [searchParams] = useSearchParams();

  const handleSubmit = () => {
    const id = searchParams.get("id");
    userService.signTrail(id).then((res) => {
      alert(res.data);
      location.reload();
    });
  };

  return (
    <Card>
      <ContainerImg></ContainerImg>
      <ContainerContent>
        <Text size="20px">
          Se você chegou até aqui, é porque quer aprender mais sobre tecnologia,
          especialmente sobre {props.trailName}!
        </Text>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <BoxProgress>
            {props.registered ? (
              <LinearProgress
                color="inherit"
                variant="determinate"
                value={50}
              />
            ) : (
              <Button variant="contained" onClick={handleSubmit}>
                Começar trilha
              </Button>
            )}
          </BoxProgress>
          <Text size="16px">Tempo estimado: {props.estimatedTime} horas</Text>
        </Box>
      </ContainerContent>
    </Card>
  );
}
