import React from 'react'
import Header from '../../shared/components/Header'
import { Box, padding } from '@mui/system'
import CardContent from '../../shared/components/CardContent';
import { Typography } from '@material-ui/core';

const Favorites = () =>{
    return(
        <body>   
            <Header />
            <Box sx={{
                padding: '30px',
                paddingLeft: '200px',
                paddingRight: '350px',
                marginTop: '120px'
            }}>
            <Box sx={{display:'flex', marginBottom:'60px'}}>
            <Typography variant='h4'>Conteúdos salvos</Typography>
            </Box>
            <CardContent />
            </Box>
        </body>
    );
};

export default Favorites;