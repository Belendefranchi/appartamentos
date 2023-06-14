import {
  AppBar,
  Button,
  Container,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { usePropertyStore } from "../../../store/useProperty";
import { fetchSearchGeo } from "../../../service/search-geo";

const Header = (props) => {
  const { sections, title } = props;

  const { addProperty } = usePropertyStore()

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
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}`, paddingY: '.8rem' }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Typography variant="h4" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <nav>
            {sections.map((section) => (
              <Link
                color="inherit"
                noWrap
                key={section.title}
                variant="body2"
                href={section.url}
                sx={{ p: 1, flexShrink: 0, textDecoration: 'none' }}
                fontSize='1rem'
                fontWeight="bold"
                underline="hover"
              >
                {section.title}
              </Link>
            ))}
          </nav>
          <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Login
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
