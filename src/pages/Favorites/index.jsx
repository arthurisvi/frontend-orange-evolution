import React, { useCallback, useEffect, useState } from "react";
import Header from "../../shared/components/Header";
import { Container, ContainerCards } from "./style";
import { Box } from "@mui/system";
import CardContent from "../../shared/components/CardContent";
import { Typography } from "@material-ui/core";
import { userService } from "../../shared/services/user.service";
import Footer from "../../shared/components/Footer";

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
        <Box sx={{ marginBottom: "30px" }}>
          <Typography variant="h4">Conteúdos salvos</Typography>
        </Box>
        <ContainerCards>
          {favorites?.map((content) => {
              return (
                <CardContent
                  id={content.id}
                  title={content.title}
                  duration={content.duration}
                  type={content.type}
                  author={content.author}
                  link={content.link}
                  registered={true}
                />
              );
          })}
        </ContainerCards>
      </Container>
      <Footer />
    </body>
  );
};

export default Favorites;
