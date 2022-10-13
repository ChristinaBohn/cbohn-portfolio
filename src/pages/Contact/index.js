import * as React from 'react';

// MUI Imports
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';



export default function Contact() {
  return (

    <Container>

        {/* Title */}
        <Box
          alignItems="center"
          justify="center"
          sx={{display: "flex", gap: "10px", m: 10}}
        >
          <Typography variant='h2'>let's get in touch</Typography>
          <Typography variant='h1' sx={{color: '#e6af2e', mb: 2}}>...</Typography>
        </Box>

        {/* Contact Form */}
        <Paper square
        elevation={16}
        sx={{width: '70%', borderRadius: 3, p: 5, m: 'auto'}}>
          <form>

            <TextField label="Full Name" fullWidth autocomplete="none" sx={{my: 1}}/>
            <TextField label="Email" fullWidth autocomplete="none" sx={{my: 1}}/>
            <TextField label="Message" fullWidth multiline rows={5} autocomplete="none" sx={{my: 1}}/>

            <Button type="submit" sx={{m: 4}}>Submit</Button>

          </form>
        </Paper>

        {/* Resume Download & Technology Icons */}
        <Container>
            <Button 
              variant="outlined"
              startIcon={<DownloadIcon />}
              href="https://docs.google.com/document/d/1-Ez6R4vPEDNbmoVxvZX2iN5IfzmdmrrESedbttqQDAw/edit"
              target="_blank"
              color="inherit"
              size="large"
              sx={{m: 10}}>
                  Resume
            </Button>
        </Container>

    </Container>
  );
}