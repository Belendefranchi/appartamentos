import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import * as React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../store/useAuth";

const Register = () => {
  const setUser = useAuth(state => state.setUser)

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");
    const displayName = data.get("displayName");

    setUser(displayName, email, password);
  };

  return (
    <Box
      sx={{
        my: 8,
        mx: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>U</Avatar>
      <Typography component="h1" variant="h5">
        Registrarse
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="displayName"
          label="Name"
          name="displayName"
          autoComplete="text"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
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
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Loguearse
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Olvidaste la contraseña?
            </Link>
          </Grid>
          <Grid item>
            <Link to='/auth/login' variant="body2">
              {"You have an account? Sign In"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Register;
