import React from 'react';
import {Container, Grid} from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import dailyPlanner from './images/daily-planner-.png';


const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
  height: '300px'
}));

export default function Portfolio() {
    return (
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                <Grid item xs>
                    <Paper style={{height: "300px"}} elevation={16}>
                        <img src={dailyPlanner} height="300px"></img>
                    </Paper>
                </Grid>
                <Grid item xs>
                    <Paper style={{height: "300px"}} elevation={16}>
                        <img src={dailyPlanner} height="300px"></img>
                    </Paper>
                </Grid>
                <Grid item xs>
                    <Paper style={{height: "300px"}} elevation={16}>
                        <img src={dailyPlanner} height="300px"></img>
                    </Paper>
                </Grid>
                </Grid>
            </Container>
    )
}

