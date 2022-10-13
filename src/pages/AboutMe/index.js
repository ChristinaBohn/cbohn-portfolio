import * as React from 'react';

// MUI Imports
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography
} from '@mui/material';

// Image Imports
import photo from '../AboutMe/images/cbohn-profile-image.jpeg'


// Bio and Profile Image
export default function AboutMe() {
  return (

    <Container>
      <Grid container
        direction="row"
        justifyContent="center"
        alignItems="center">

        {/* Title */}
        <Box
          alignItems="center"
          justify="center"
          sx={{ display: "flex", gap: "25px", m: "auto", pt: 18, pb: 8 }}
        >
          <Typography variant='h2'>christina bohn</Typography>
          <Typography variant='h1' sx={{color: '#e6af2e'}}> | </Typography>
          <Typography variant='h2'>web developer</Typography>
        </Box>

        {/* Profile Image */}

        <Grid item xs={12} md={4}>
          <Box
            component="img"
            sx={{
              height: 260,
              borderRadius: 3,
              boxShadow: 8
            }}
            src={photo}
            alt="Portrait of Christina Bohn"
            elevation={8}
            />
        </Grid>
        
        {/* Bio */}
        <Grid item xs={12} md={8}>
          <Paper elevation={8} square sx={{borderRadius: 3}}>
            <Typography sx={{m: 4, pt: 6, color: "#393E41", fontSize: "1.2rem"}}>
              Seattle, WA
            </Typography>
            
            <Typography sx={{m: 4}}> 
              Curious and creative software developer, with a B.S. in Biology from the University of North Dakota and a certificate in Full Stack Web Development from the University of Washington. Positive and energetic team player, big picture thinker. Comfortable working in the MERN stack.
            </Typography>

            <Typography sx={{m: 4, pb: 6}}>
              My background is in Environmental Science, and my passion is in finding smart solutions for modern problems. I enjoy connecting the analytical and problem-solving skills developed as an environmental scientist with a curiosity for lifelong learning, to write code that creates beautiful, seamless solutions for web users.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
