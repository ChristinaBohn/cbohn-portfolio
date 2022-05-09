import * as React from 'react';

// MUI Imports
import { 
  Button,
  Container,
  Paper,
  Typography
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';


// Resume Download & Technology Icons
export default function Resumé() {
  return (

    <Container>

        <Typography variant='h1'>Christina's technologies</Typography>

        <Paper elevation={16} square>

            {/* TODO: Add icons for technologies and download resume button */}
            <Button variant="outlined" startIcon={<DownloadIcon />} href="https://docs.google.com/document/d/1-Ez6R4vPEDNbmoVxvZX2iN5IfzmdmrrESedbttqQDAw/edit" size="large">
              Resumé
            </Button>

        </Paper>

    </Container>

  );
}