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
  background-color: #f7f8f9;
  border-radius: 6px;
  display: flex;
  gap: 30px;
  @media screen and (max-width: 1165px) {
    width: 100%;
    padding: 1.25rem;
    flex-direction: column;
  }
`;

const ContainerImg = styled.div`
  width: 15.625rem;
  /* height: 9.688rem; */
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
  /* padding-top: 10px; */
  @media screen and (max-width: 1165px) {
    justify-content: center;
    gap: 30px;
  }
`;

const Text = styled.p`
  color: #808080;
  font-size: ${(props) => props.size};
`;

export default function TrailProgress(props) {
  const [searchParams] = useSearchParams();

  const handleSubmit = () => {
    const id = searchParams.get("id");
    userService.signTrail(id).then((res) => {
      setTimeout(() => location.reload(), 500)
    });
  };

  return (
    <Card>
      <ContainerImg>
        {props.trailName === "UX/UI Design" && (
          <img
            src="https://i.ibb.co/3phLFwN/ui-ux.png"
            alt="UX/UI Design"
            width="100%"
          />
        )}
        {props.trailName === "Desenvolvimento Full Stack" && (
          <img
            src="https://i.ibb.co/mBZ61JW/dev.png"
            alt="UX/UI Design"
            width="100%"
          />
        )}
        {props.trailName === "QA (Quality Assurance)" && (
          <img
            src="https://i.ibb.co/3cz00nN/qa.png"
            alt="UX/UI Design"
            width="100%"
          />
        )}
      </ContainerImg>
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
              <Button
                variant="contained"
                onClick={handleSubmit}
                sx={{ backgroundColor: "#00C09B" }}
              >
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
