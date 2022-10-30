import * as React from "react";

// MUI Imports
import { 
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";


const ResponsiveAppBar = (props) => {
  const { pages = [], currentPage, setCurrentPage } = props;

  return (
    <AppBar position="fixed" sx={{ bgcolor: "#e6af2e" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 2,
              color: "#393E41",
              display: { xs: "none", md: "flex" },
            }}
          >
            christina bohn
          </Typography>

          {/* Navigation Links */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                className={`${currentPage === page && "nav-active"}`}
                key={page}
                onClick={() => setCurrentPage(page)}
                href={`/${page}`}
                sx={{ my: 2, color: "#393e41", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* Resume Download */}
          <Box>
            <Button
            variant="outlined"
            startIcon={<DownloadIcon />}
            href="https://docs.google.com/document/d/1-Ez6R4vPEDNbmoVxvZX2iN5IfzmdmrrESedbttqQDAw/edit"
            target="_blank"
            color="inherit"
            size="large"
            sx={{ color: "#393e41", mt: 2, mb: 2, ml: 10 }}
            >
              Resume
            </Button>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;
