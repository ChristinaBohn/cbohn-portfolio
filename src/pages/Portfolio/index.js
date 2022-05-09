import * as React from 'react';

// MUI Imports
import {
    Container,
    Grid,
    Link,
    Paper,
    Typography
} from '@mui/material';

// Image Imports
import dailyPlanner from './images/daily-planner.png';
import dogeared from './images/dogeared.png';
import selfExploration from './images/self-exploration.png';
import myTeamStats from './images/myTeamStats.png'

// Project Porfolio
export default function Portfolio() {
    return (
            <Container maxWidth="lg">

                <Grid container spacing={3}>

                    <Typography variant='h1'>Collaborations</Typography>

                    <Link underline="none" href='https://myteam-stats.herokuapp.com/'>    
                        <Grid item xs>
                            <Paper style={{height: "300px"}} elevation={16}>
                                <img src={myTeamStats} alt="My Team Stats preview" height="300px"></img>
                            </Paper>
                        </Grid>
                    </Link>

                    <Link underline="none" href='https://dogeared-2022.herokuapp.com/login'> 
                        <Grid item xs>
                            <Paper style={{height: "300px"}} elevation={16}>
                                <img src={dogeared} alt="Dogeared preview" height="300px"></img>
                            </Paper>
                        </Grid>
                    </Link>

                    <Link underline="none" href='https://mikiwolfe.github.io/30-day-Challenge/'> 
                        <Grid item xs>
                            <Paper style={{height: "300px"}} elevation={16}>
                                <img src={selfExploration} alt="40 Day Challenge preview" height="300px"></img>
                            </Paper>
                        </Grid>
                    </Link>

                </Grid>

                <br></br>

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

