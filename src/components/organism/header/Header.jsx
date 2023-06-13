import {
  AppBar,
  Button,
  Container,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";

const Header = (props) => {
  const { sections, title } = props;

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Container maxWidth="lg">
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
