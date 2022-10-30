import * as React from "react";

// MUI Imports
import { Box, Container, Grid, Link, Paper, Typography } from "@mui/material";

// Image Imports
// import dailyPlanner from "./images/daily-planner.png";
import dogeared from "./images/dogeared.png";
import selfExploration from "./images/self-exploration.png";
import myTeamStats from "./images/myTeamStats.png";

// Project Porfolio
export default function Portfolio() {
  return (
    <Container maxWidth="lg">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item md={12} sx={{ m: 6 }}>
          {/* Title */}
          <Box
            alignItems="center"
            justify="center"
            sx={{ display: "flex", gap: "10px", m: 2, pt: 2 }}
          >
            <Typography variant="h2">collaborations</Typography>
            <Typography variant="h1" sx={{ color: "#e6af2e", mb: 2 }}>
              ...
            </Typography>
          </Box>
        </Grid>

        {/* TODO: Change image on hover - homepage to login page */}
        {/* TODO: Add descriptions/titles */}
        {/* TODO: Add border radius */}
        {/* TODO: Make project cards DRY - put links and descriptions into arrays and map */}

        <Grid item container direction="column" justifyContent="center" alignItems="center" md={12} sx={{mb: 15}}>
          
          {/* MyTeam Stats */}
          <Grid sx={{ display: "flex", gap: "25px", m: "auto" }}>
          
            <Container>
              <Typography variant="h5">
                MyTeam Stats Tracker
              </Typography>

              <Typography variant="h7" sx={{m: 1}}>
              A sports stats tracker app and league management space for players, parents, coaches, and league administrators.
              </Typography>

              <Typography variant="h7" sx={{m: 1}}>
              Roles: Wrote and tested mutations and queries, map functions to dynamically render data - connecting back end to front end, design implementation on front end
              </Typography>

              <Typography variant="h7" sx={{m: 1}}>
              Tools: HTML, CSS, Javascript, Material UI, React, Express, Nodemon, GraphQL/Apollo, JWT, Bcrypt, Mongo DB
              </Typography>
            </Container>
            
            <Link
              underline="none"
              href="https://myteam-stats.herokuapp.com/"
              target="_blank"
            >
              <Grid item xs={12}>
                <Paper elevation={16} sx={{ m: 4, height: "300px" }}>
                  <img
                    src={myTeamStats}
                    alt="My Team Stats preview"
                    height="300px"
                  ></img>
                </Paper>
              </Grid>
            </Link>

          </Grid>




          <Link
            underline="none"
            href="https://dogeared-2022.herokuapp.com/login"
            target="_blank"
          >
            <Grid item xs={12}>
              <Paper elevation={16} sx={{ m: 4, height: "300px" }}>
                <img src={dogeared} alt="Dogeared preview" height="300px"></img>
              </Paper>
            </Grid>
          </Link>

          <Link
            underline="none"
            href="https://mikiwolfe.github.io/30-day-Challenge/"
            target="_blank"
          >
            <Grid item xs={12}>
              <Paper elevation={16} sx={{ m: 4, height: "300px" }}>
                <img
                  src={selfExploration}
                  alt="40 Day Challenge preview"
                  height="300px"
                ></img>
              </Paper>
            </Grid>
          </Link>
        </Grid>
      </Grid>

      {/* <br></br>

                TODO: Add personal projects */}
    </Container>
  );
}
