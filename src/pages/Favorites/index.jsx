import React, { useCallback, useEffect, useState } from "react";
import Header from "../../shared/components/Header";
import { Container, ContainerCards, Content, Subtitle, Text } from "./style";
import { Box } from "@mui/system";
import CardContent from "../../shared/components/CardContent";
import { Typography } from "@material-ui/core";
import { userService } from "../../shared/services/user.service";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  const fetchData = useCallback(() => {
    userService
      .getMyFavorites()
      .then((res) => {
        setFavorites(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [favorites]);

  useEffect(() => fetchData(), [fetchData]);

  return (
    <body>
      <Header />
      <Container>
        <Box sx={{ marginBottom: "30px", color: "#808080" }}>
          <Typography variant="h4">Conteúdos salvos</Typography>
        </Box>
        {favorites.length > 0 ? (
          <ContainerCards>
            {favorites?.map((content) => {
              return (
                <CardContent
                  content={content}
                  registered={true}
                />
              );
            })}
          </ContainerCards>
        ) : (
          <Content>
            <Subtitle>Nenhum conteúdo salvo!</Subtitle>
            <Box sx={{ marginTop: "20px" }}>
              <Text>
                Ainda não há nenhum conteúdo salvo para você ver. Se você deseja
                salvar um conteúdo acesse as trilhas e clique em “favoritar”.
              </Text>
            </Box>
          </Content>
        )}
      </Container>
    </body>
  );
};

export default Favorites;
