import Img from '../Images/Test.png';
import Box from '@mui/material/Box';
import React from 'react';



function Holidays() {
    const test = "hello";

    return (
        <>

            <Box
                sx={{
                    width: 800,
                    height: 400,
                    backgroundImage: `url(${Img})`,
                    opacity: [0.9],
                    border: 5 ,
                    borderColor: ['grey.500'],
                    '&:hover': {
                        backgroundColor: 'primary.main',
                        opacity: [0.1],
                    },
                }}
            />
 

        </>
    );
}

export default Holidays;