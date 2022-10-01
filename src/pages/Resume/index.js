import * as React from 'react';

// MUI Imports
import { 
  Avatar,
  Button,
  Container,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';


import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';


// Resume Download & Technology Icons
export default function Resume() {
  return (

    <Container>

        <Typography variant='h2' sx={{m: 10}}>technologies</Typography>

        <Paper elevation={16} square>

            {/* TODO: Map over these, add rest of technologies, use MUI virtual list for scrolling? */}
            <List>

                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <HtmlIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Hypertext Markup Language"
                  />
                </ListItem>

                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <CssIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Cascading Style Sheets"
                  />
                </ListItem>

                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <JavascriptIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Javascript"
                  />
                </ListItem>
            
            </List>

        </Paper>

        <Button variant="outlined" startIcon={<DownloadIcon />} href="https://docs.google.com/document/d/1-Ez6R4vPEDNbmoVxvZX2iN5IfzmdmrrESedbttqQDAw/edit" target="_blank" color="inherit" size="large">
              Resume
        </Button>

    </Container>

  );
}