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
      <Grid container
        direction="row"
        justifyContent="center"
        alignItems="center">
        <Typography variant='h2' sx={{m: 10}} >christina bohn | web developer</Typography>

        {/* Profile Image */}
        <Grid item xs={12} md={4}>
          <img
            src={photo}
            alt="Portrait of Christina Bohn"
            height={260}
            // elevation={16}
          />
        </Grid>
        
        {/* Bio */}
        <Grid item xs={12} md={8}>
          <Paper elevation={16} square>
            <Typography sx={{m: 4, pt: 6, color: "#393E41", fontSize: "1.2rem"}}>
              Seattle, WA
            </Typography>
            
            <Typography sx={{m: 4}}> 
              Curious and creative Full Stack Web Developer, with a certificate in Full Stack Web Development from the University of Washington. Positive and energetic team player, big picture thinker. Comfortable working in the MERN stack.
            </Typography>

            <Typography sx={{m: 4, pb: 6}}>
              I enjoy connecting the analytical and problem-solving skills I developed as an environmental scientist with a curiosity for lifelong learning, to write code that creates beautiful, seamless solutions for web users.
            </Typography>
          </Paper>
        </Grid>

      </Grid>
    </Container>

  );
}
