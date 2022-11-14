import React, { useState, useEffect, useCallback, useContext } from "react";
import {
  ContainerCards,
  Title,
  Container,
  Text,
  FirstContainer,
  ContainerImg,
} from "./style";
import CardTrail from "../../shared/components/CardTrail";
import CardProgress from "../../shared/components/CardProgress";
import PrimarySearchAppBar from "../../shared/components/Header";
import Box from "@mui/material/Box";
import { userService } from "../../shared/services/user.service";
import AuthContext from "../../shared/contexts/auth";
import Image from "../../assets/images/image-dashboard.png";

const Trails = () => {
  const [hasTrail, setHasTrail] = useState(false);
  const [userTrails, setUserTrails] = useState([]);
  const [otherTrails, setOtherTrails] = useState([]);
  const userContext = useContext(AuthContext);

  useEffect(() => {
    userService
      .getTrailsNotSubscribe()
      .then((res) => {
        setOtherTrails(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const fetchData = useCallback(() => {
    userService
      .getTrailsByUser()
      .then((res) => {
        if (res.data.length > 0) {
          setHasTrail(true);
          setUserTrails(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => fetchData(), [fetchData]);

  return (
    <body>
      <PrimarySearchAppBar />
      {!hasTrail && (
        <FirstContainer>
          <Box>
            <Title center={true} color="#556987" marginBottom="3.75rem">
              Se você chegou até aqui, é porque quer aprender mais sobre
              tecnologia!
            </Title>
            <Text>
              O Orange Evolution consiste em trilhas totalmente gratuitas para
              que você possa iniciar a sua carreira na tecnologia. Você terá
              acesso a vídeos, lives, artigos, apostilas e até cursos gratuitos,
              além desses conteúdos serem da Orange Juice, de parceiros e
              empresas que confiamos.
            </Text>
            <Text>
              Essas trilhas foram montadas pensando em quem está começando na
              área, ou passando por uma migração de carreira e ainda não sabe
              exatamente o que é esse mundo. Então, aperta o cinto e vem com a
              gente nessa jornada!
            </Text>
          </Box>
          <ContainerImg>
            <img src={Image} alt="Imagem de um computador" />
          </ContainerImg>
        </FirstContainer>
      )}
      <Container>
        <Box sx={{ marginBottom: "60px" }}>
          {hasTrail && (
            <div>
              <Title marginBottom="0.938rem" marginTop="3.75rem">
                Olá, {userContext.name}!
              </Title>
              <Title marginBottom="1.875rem">Acompanhe suas trilhas</Title>
              <ContainerCards>
                {userTrails.map((trail) => (
                  <CardProgress
                    trailId={trail.id}
                    trailClass={trail.class}
                    trailTitle={trail.name}
                  />
                ))}
              </ContainerCards>
            </div>
          )}
        </Box>
        {hasTrail && otherTrails.length > 0 && (
          <Title marginBottom="1.875rem">Outras trilhas</Title>
        )}
        {!hasTrail && (
          <Title marginBottom="1.875rem">Selecione sua trilha</Title>
        )}
        <ContainerCards>
          {otherTrails.map((trail) => (
            <CardTrail
              key={trail.id}
              title={trail.name}
              description="Trilha"
              id={trail.id}
            />
          ))}
        </ContainerCards>
      </Container>
    </body>
  );
};

export default Trails;
