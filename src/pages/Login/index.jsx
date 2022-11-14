import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { userService } from "../../shared/services/user.service";
import { Navigate } from "react-router-dom";
import { FormHelperText } from "@mui/material";
import Loading from "../../shared/components/Loading";

const theme = createTheme();

export default function SignInSide() {
  const [message, setMessage] = useState("");
  const [validLogin, setValidLogin] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    userService
      .login({
        email: data.get("email"),
        password: data.get("password"),
      })
      .then((res) => {
        setLoading(true);
        if (res.data.token) {
          localStorage.clear();
          localStorage.setItem("token", res.data.token);
          setValidLogin(true);
        }
      })
      .catch((err) => {
        if (err.response.data) {
          setMessage(err.response.data.errors[0].message);
        }
      }).finally(setLoading(false));
  };

  return (
    <ThemeProvider theme={theme}>
      <Loading open={loading} />
      {validLogin && <Navigate to="/dashboard" />}
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={6}
          md={4}
          sx={{
            backgroundImage: "url(https://i.ibb.co/1Jc7hCN/Welcome-Board.png)",
            // backgroundColor: (t) =>
            //   t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundPosition: "center",
            height: "107%",
          }}
        />
        <Grid item xs={5} sm={4} md={8} component={Paper} elevation={0} square>
          <Box
            sx={{
              my: 35,
              mx: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Entre na Orange Evolution
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                error={message}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                error={message}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Lembrar senha"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                ENTRAR
              </Button>
              <Grid container></Grid>
              {message && (
                <FormHelperText error={true}>{message}</FormHelperText>
              )}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
