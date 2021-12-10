import { Button, ButtonGroup, Container, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import {grey, red } from '@material-ui/core/colors';

const color = red[500];


const useStyles =makeStyles({
    btn:{
        background: 'magenta',
        '&:hover':{
            background:grey[400],
            color:'#fff'
        }
    }
})

const Home = () => {

    const classes= useStyles();
    return (
        <Container>
            <ButtonGroup>
            <Button size='small' variant='contained' >Padrão</Button>
            <Button  size='small' color='primary' variant='contained' >primaria</Button>
            <Button  size='small' color='secondary' variant='contained' >secundaria</Button>
            </ButtonGroup>

            <Typography 
            variant='h5' 
            component='h1' 
            color='primary'
            
            >
                Ola mundo cruela 
            </Typography>
        </Container>
    )
}

export default Home
