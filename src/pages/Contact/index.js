import * as React from 'react';

// MUI Imports

import { 
  Button,
  Container,
  Paper,
  TextField,
  Typography
} from '@mui/material';

// Contact Form
export default function Contact() {
  return (

    <Container>

        <Typography variant='h1'>Let's get in touch</Typography>

        <Paper elevation={16} square>

          {/* TODO: Add contact form with name, email, message, submit button */}
          <form>
            <TextField label="Full Name" fullWidth autocomplete="none"/>
            <TextField label="Email" fullWidth autocomplete="none"/>
            <TextField label="Message" fullWidth multiline rows={5} autocomplete="none"/>
            <Button type="submit">Submit</Button>
          </form>

        </Paper>

    </Container>

  );
}