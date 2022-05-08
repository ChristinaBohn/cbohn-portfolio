import React from 'react';

// MUI Imports
import {
    Container,
    Grid,
    Typography,
    Paper
} from '@mui/material';

// Image Imports
import dailyPlanner from './images/daily-planner-.png';

// Project Porfolio
export default function Portfolio() {
    return (
            <Container maxWidth="lg">
                <Grid container spacing={3}>

                    <Typography variant='h1'>My Projects</Typography>

                    <Grid item xs>
                        <Paper style={{height: "300px"}} elevation={16}>
                            <img src={dailyPlanner} alt="Daily Planner preview" height="300px"></img>
                        </Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper style={{height: "300px"}} elevation={16}>
                            <img src={dailyPlanner} alt="Daily Planner preview" height="300px"></img>
                        </Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper style={{height: "300px"}} elevation={16}>
                            <img src={dailyPlanner} alt="Daily Planner preview" height="300px"></img>
                        </Paper>
                    </Grid>

                </Grid>
            </Container>
    )
}

