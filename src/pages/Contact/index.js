import * as React from 'react';

// MUI Imports

import { 
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
        <Typography variant='h2' sx={{m: 10}}>let's get in touch</Typography>

        {/* Contact Form */}
        <Paper elevation={16} square>
          <form>

            <TextField label="Full Name" fullWidth autocomplete="none"/>
            <TextField label="Email" fullWidth autocomplete="none"/>
            <TextField label="Message" fullWidth multiline rows={5} autocomplete="none"/>
            <Button type="submit">Submit</Button>
            
          </form>
        </Paper>

        {/* Resume Download & Technology Icons */}
        <Container>
            <Button variant="outlined" startIcon={<DownloadIcon />} href="https://docs.google.com/document/d/1-Ez6R4vPEDNbmoVxvZX2iN5IfzmdmrrESedbttqQDAw/edit" target="_blank" color="inherit" size="large">
                  Resume
            </Button>
        </Container>

    </Container>

  );
}