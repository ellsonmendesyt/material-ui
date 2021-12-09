import { Button, Container, Typography } from '@mui/material'
import React from 'react'


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


            <Button color='secondary' variant='contained'   type='submit'>Criar</Button>
        </Container>
    )
}

export default Create
