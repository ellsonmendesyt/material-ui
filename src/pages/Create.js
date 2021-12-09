import { Button, Container, Typography } from '@mui/material'
import React from 'react'

import SendIcon from '@mui/icons-material/Send';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
const Create = () => {
    return (
        <Container>
            <Typography 
            variant='h6'
            color='textSecondary'
            aling='center'
            component='h2'
            gutterBottom
            >
                Criar uma nova nota
            </Typography>


            <Button color='secondary' variant='contained'  endIcon={<KeyboardArrowRightIcon />} type='submit'>
                Criar
            </Button>
        </Container>
    )
}

export default Create
