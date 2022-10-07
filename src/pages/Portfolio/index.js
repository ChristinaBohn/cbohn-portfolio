import * as React from 'react';

// MUI Imports
import {
    Box,
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

                <Grid container
                        direction="row"
                        justifyContent="center"
                        alignItems="center">

                    <Grid item md={12} sx={{m: 6}}>
                        {/* Title */}
                        <Box
                        alignItems="center"
                        justify="center"
                        sx={{ display: "flex", gap: "10px", m: 2 }}
                        >
                            <Typography variant='h2'>collaborations</Typography>
                            <Typography variant='h1' sx={{color: '#e6af2e', mb: 2}}>...</Typography>
                        </Box>
                    </Grid>

                    {/* TODO: Change image on hover - homepage to login page */}
                    {/* TODO: Add descriptions/titles */}

                    <Grid item container md={12}>   
                        <Link underline="none" href='https://myteam-stats.herokuapp.com/' target="_blank">    
                            <Grid item md={4} xs={12}>
                                <Paper style={{height: "300px"}} elevation={16} sx={{m: 4}}>
                                    <img src={myTeamStats} alt="My Team Stats preview" height="300px"></img>
                                </Paper>
                            </Grid>
                        </Link>

                        <Link underline="none" href='https://dogeared-2022.herokuapp.com/login' target="_blank"> 
                            <Grid item md={4}  xs={12}>
                                <Paper style={{height: "300px"}} elevation={16} sx={{m: 4}}>
                                    <img src={dogeared} alt="Dogeared preview" height="300px"></img>
                                </Paper>
                            </Grid>
                        </Link>

                        <Link underline="none" href='https://mikiwolfe.github.io/30-day-Challenge/' target="_blank"> 
                            <Grid item md={4}  xs={12}>
                                <Paper style={{height: "300px"}} elevation={16} sx={{m: 4}}>
                                    <img src={selfExploration} alt="40 Day Challenge preview" height="300px"></img>
                                </Paper>
                            </Grid>
                        </Link>
                    </Grid>
                </Grid>

                {/* <br></br>

                <Grid container
                        direction="row"
                        justifyContent="center"
                        alignItems="center">

                    <Grid item md={12} sx={{m: 6}}>
                        <Typography variant='h2'sx={{m: 8}}>my projects</Typography>
                    </Grid>

                    <Grid item container md={12}>   
                        <Link underline="none" href='https://myteam-stats.herokuapp.com/' target="_blank">    
                            <Grid item md={4} xs={12}>
                                <Paper style={{height: "300px"}} elevation={16} sx={{m: 4}}>
                                    <img src={myTeamStats} alt="My Team Stats preview" height="300px"></img>
                                </Paper>
                            </Grid>
                        </Link>

                        <Link underline="none" href='https://dogeared-2022.herokuapp.com/login' target="_blank"> 
                            <Grid item md={4}  xs={12}>
                                <Paper style={{height: "300px"}} elevation={16} sx={{m: 4}}>
                                    <img src={dogeared} alt="Dogeared preview" height="300px"></img>
                                </Paper>
                            </Grid>
                        </Link>

                        <Link underline="none" href='https://mikiwolfe.github.io/30-day-Challenge/' target="_blank"> 
                            <Grid item md={4}  xs={12}>
                                <Paper style={{height: "300px"}} elevation={16} sx={{m: 4}}>
                                    <img src={selfExploration} alt="40 Day Challenge preview" height="300px"></img>
                                </Paper>
                            </Grid>
                        </Link>
                    </Grid>
                </Grid> */}

            </Container>
    )
}

