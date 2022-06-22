import * as React from 'react';

// MUI Imports
import { 
  AppBar,
  Box,
  Button,
  Container,
  Toolbar
 } from '@mui/material';
import Typography from '@mui/material/Typography';

// Image Imports
// import photo from '../pages/Portfolio/images/profpic.jpeg';


const ResponsiveAppBar = (props) => {

  const {pages=[], currentPage, setCurrentPage} = props;

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            christina bohn
          </Typography>

          {/* Navigation Links */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                className={`${currentPage === page && 'nav-active'}`}
                key={page}
                onClick={() => setCurrentPage(page)}
                href={`/${page}`}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;