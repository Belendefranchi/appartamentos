import {
  AppBar,
  Box,
  Button,
  Container,
  Link as LinkMaterial,
  Toolbar,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { usePropertyStore } from "../../../store/useProperty";
import { fetchSearchGeo } from "../../../service/search-geo";
import { Link as LinkReactRouter } from "react-router-dom";
import { useAuth } from "../../../store/useAuth";

const Header = (props) => {
  const auth = useAuth((state) => state.auth.authenticated);
  const { sections, title } = props;

  const { addProperty } = usePropertyStore();

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchSearchGeo();
      addProperty(result);
    };

    fetchData();
  }, []);
  return (
    <AppBar
      position="static"
      elevation={0}
      color="inherit"
      sx={{
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        paddingY: ".8rem",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Typography variant="h4" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <nav>
            {sections.map((section) => (
              <LinkMaterial
                color="inherit"
                noWrap
                key={section.title}
                variant="body2"
                href={section.url}
                sx={{ p: 1, flexShrink: 0, textDecoration: "none" }}
                fontSize="1rem"
                fontWeight="bold"
                underline="hover"
              >
                {section.title}
              </LinkMaterial>
            ))}
          </nav>

          <Box sx={{ display: "flex" }} gap={1}>
            {auth === "not-authenticated" && (
              <>
                <Button
                  component={LinkReactRouter}
                  to="/auth/login"
                  variant="contained"
                  color="secondary"
                >
                  Login
                </Button>
                <Button
                  component={LinkReactRouter}
                  to="/auth/registro"
                  variant="contained"
                  color="primary"
                >
                  Registrarse
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
