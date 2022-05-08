import * as React from 'react';

// MUI Imports
import { 
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
      <Grid>

        <Typography variant='h1'>About Christina</Typography>

        <Paper elevation={16} square>
          <Typography sx={{m: 5, p: 6}}>
          Full Stack Web Developer with growing skills in HTML, CSS, Javascript, the MERN stack, and responsive web design. I am currently working towards a certificate in Full Stack Web Development from the University of Washington, to be completed in April 2022.
          <br/>
          I enjoy connecting the analytical and problem-solving skills I developed as an environmental scientist with a love for design, to write code that creates beautiful, seamless solutions for web users.
          </Typography>
        </Paper>

        {/* Profile Image */}
        <img
          src={photo}
          alt="Portrait of Christina Bohn"
          height={200}
        />

      </Grid>
    </Container>

  );
}
