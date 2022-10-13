// MUI Imports
import { Container, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';


// Styles
const footerStyle = {
    position: "fixed",
    bottom: 0,
    textAlign: 'center',
    paddingBottom: 10,
    color: "darkgray"
}


// Footer | Icon Links
export default function Footer() {
    return (

        <Container sx={footerStyle}>

            <Link href="https://www.linkedin.com/in/christina-bohn-7a1294124/" color='inherit' target="_blank" >
                <LinkedInIcon sx={{px: 3}} fontSize='large'/>
            </Link>

            <Link href="https://github.com/ChristinaBohn" color='inherit' target="_blank" >
                <GitHubIcon sx={{px: 3}} fontSize='large'/>
            </Link>

            <Link href="https://www.instagram.com/xtinabohn/" color='inherit' target="_blank" >
                <InstagramIcon sx={{px: 3}} fontSize='large'/>
            </Link>          
            
        </Container>
    );
}

