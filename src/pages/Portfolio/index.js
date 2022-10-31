import * as React from "react";

// MUI Imports
import { 
  Box,
  Container,
  Grid,
  Link,
  Paper,
  Typography
} from "@mui/material";

// Image Imports
// import dailyPlanner from "./images/daily-planner.png";
import dogeared from "./images/dogeared.png";
import selfExploration from "./images/self-exploration.png";
import myTeamStats from "./images/myTeamStats.png";

// MAP TEST - Reference Bootcamp week 20 React, Day 1, Act 9 and Dogeared
// export default function Portfolio() {
//   return (
//     <Container>
//         {collaborations.map((collaboration) => {
//           return (
//             <Typography>
//               {collaboration.title}
//             </Typography>
//           )
//         }
//     </Container>
//   );
// }

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
        {/* TODO: Mobile responsive */}
        {/* TODO: Add border radius */}
        {/* TODO: Make project cards DRY - put links and descriptions into object and map */}


        <Grid item container direction="column" justifyContent="center" alignItems="center" md={12} sx={{mb: 15}}>
          
          {/* MyTeam Stats */}
          <Grid sx={{ display: "flex", m: "auto" }}>
            
            {/* Project Image Link */}
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

            {/* Description */}
            <Container sx={{my: "auto"}}>
              <Typography variant="h4" sx={{mb: 1}}>
                MyTeam Stats Tracker
              </Typography>

              <Box sx={{maxWidth: "85%"}}>
                <Typography variant="h7">
                  A sports stats tracker app and league management space for players, parents, coaches, and league administrators.
                  <br></br>
                </Typography>

                <Typography variant="h7">
                  Roles: Wrote and tested mutations and queries, map functions to dynamically render data - connecting back end to front end, design implementation on front end
                  <br></br>
                  Tools: HTML, CSS, Javascript, Material UI, React, Express, Nodemon, GraphQL/Apollo, JWT, Bcrypt, Mongo DB
                  <br></br>
                </Typography>

                <Link 
                  underline="none"
                  href="https://github.com/thenickedwards/My-Team-Stats-Tracker"
                  target="_blank"
                  color="black">
                  <Typography variant="h8" sx={{ fontWeight: 'bold' }}>
                    https://github.com/thenickedwards/My-Team-Stats-Tracker
                  </Typography>
                </Link>
              </Box>
            </Container>
          </Grid>

          {/* Dogeared */}
          <Grid sx={{ display: "flex", gap: "8px", m: "auto" }}>

            {/* Project Image Link */}
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

            {/* Description */}
            <Container sx={{my: "auto"}}>
              <Typography variant="h4" sx={{mb: 1}}>
                Dogeared
              </Typography>

              <Box sx={{maxWidth: "85%"}}>
                <Typography variant="h7">
                  A personal, digital library. The user can save books into Have Read and To Be Read lists, add and save notes and favorite quotes.
                  <br></br>
                </Typography>

                <Typography variant="h7">
                  Roles: Design implementation, sorting function in library, add and delete functions on books
                  <br></br>
                  Tools: HTML, CSS, Javascript, Node.js, Express.js, Busboy, Multer, Heroku
                  <br></br>
                </Typography>

                <Link 
                  underline="none"
                  href="https://github.com/thenickedwards/My-Team-Stats-Tracker"
                  target="_blank"
                  color="black">
                  <Typography variant="h8" sx={{ fontWeight: 'bold' }}>
                    https://github.com/jsamborski310/dogeared                  
                  </Typography>
                </Link>
              </Box>
            </Container>
          </Grid> 

          {/* 30-Day Challenge */}
          <Grid sx={{ display: "flex", gap: "8px", m: "auto" }}>

            {/* Project Image Link */}
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

            {/* Description */}
            <Container sx={{my: "auto"}}>
              <Typography variant="h4" sx={{mb: 1}}>
                30-Day Self Exploration Challenge
              </Typography>

              <Box sx={{maxWidth: "85%"}}>
                <Typography variant="h7">
                  A personal development application with daily challenge suggestions, link to a personality assessment, and a journaling tool.
                  <br></br>
                </Typography>

                <Typography variant="h7">
                  Roles: Planning, design and functionality of Journal page
                  <br></br>
                  Tools: Bored API, Quotes Free API, Bulma 9.3, HTML, CSS, JavaScript, jQuery, AJAX
                  <br></br>
                </Typography>

                <Link 
                  underline="none"
                  href="https://github.com/thenickedwards/My-Team-Stats-Tracker"
                  target="_blank"
                  color="black">
                  <Typography variant="h8" sx={{ fontWeight: 'bold' }}>
                    https://github.com/kelseybrianne/self-exploration-challenge
                  </Typography>
                </Link>
            </Box>

            </Container>
          </Grid>
        </Grid>
      </Grid>

      {/* TODO: Add personal projects */}
    </Container>
  );
}
