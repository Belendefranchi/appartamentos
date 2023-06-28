import GoogleIcon from '@mui/icons-material/Google';
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
import { login } from "../../helper/authFunction";
import { useAuth } from '../../store/useAuth';

const Login = () => {
  const setLogin = useAuth(state => state.setLogin)
  const auth = useAuth(state => state.auth)

  console.log(auth)

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");
    try {
      const user = await login(email, password);
      console.log(user);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleClick = () => {
    setLogin()
  }

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
        Loguearse
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
        <Button
          type="button"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2, display: 'flex', gap: 1, alignItems: 'center' }}
          onClick={handleClick}
        >
          <GoogleIcon fontSize='small' />
          Google
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="/auth/forget" variant="body2">
              Olvidaste la contraseña?
            </Link>
          </Grid>
          <Grid item>
            <Link to="/auth/registro" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Login;
