import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Bio
        </Typography>
        <Typography variant="h5" component="div">
          Header Tagline
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          lorem ipsum
        </Typography>
        <Typography variant="body2">
          Bio text
        </Typography>
      </CardContent>
    </Card>
  );
}
