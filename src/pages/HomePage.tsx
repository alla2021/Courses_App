import React from "react";
import {NavLink} from "react-router-dom";
import {Container, Box, Typography, Button} from '@mui/material/';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const HomePage : React.FC = () => {

   return (
      <>
         <Container maxWidth="xl">
            <Box sx={{display:'flex', gap:'20px', flexDirection:'column', textAlign: 'center', alignItems:'center' }} >
            <Typography variant="h3">Front-End School 2.0 / Courses App</Typography>
            <ArrowDownwardIcon sx={{fontSize:'40px'}}></ArrowDownwardIcon>
               <NavLink to="/core/preview-courses">
                  <Button variant="contained">Courses Page</Button>
               </NavLink>
            </Box>
         </Container>

      </>
   );
}

export default HomePage;