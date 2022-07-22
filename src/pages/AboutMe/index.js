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

          <Typography sx={{m: 4, pt: 6, color: "darkgray", fontSize: "1.2rem"}}>
            Seattle, WA
          </Typography>
          
          <Typography sx={{m: 4}}> 
            Full Stack Web Developer with growing skills in HTML, CSS, Javascript, the MERN stack, and responsive web design. I recently earned a certificate in Full Stack Web Development from the University of Washington.
          </Typography>

          <Typography sx={{m: 4, pb: 6}}>
            I enjoy connecting the analytical and problem-solving skills I developed as an environmental scientist with a curiosity for lifelong learning, to write code that creates beautiful, seamless solutions for web users.
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
