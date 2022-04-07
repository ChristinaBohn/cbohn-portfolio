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
function Portfolio() {
    return (
        <div>
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                <Grid item xs>
                    <div style={{height: "300px"}}>
                        <img src={dailyPlanner} height="300px"></img>
                    </div>
                    <Item>xs</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>xs=6</Item>
                </Grid>
                <Grid item xs>
                    <Item>xs</Item>
                </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Portfolio;

