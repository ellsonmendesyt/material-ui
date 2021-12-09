import { Button, Typography } from '@mui/material'
import React from 'react'



const Demo = () => {
    return (
        <>
            <Typography
            align='center'
            color='primary'
            gutterBottom
            >======   Tipografia  ======</Typography>


            <Typography
            color='textSecondary'
            variant='h6'
            component='h1'
            align='right'
            gutterBottom
            > Titulo h1 com aparencia de h6</Typography>


<Typography
            align='center'
            color='primary'
            gutterBottom
            >======   BOTÕES  ======</Typography>

        <Button  variant='contained' >padrao</Button>

        <Button  variant='contained' color='primary'  >primario</Button>
        <Button  variant='contained' color='secondary'  >secundario</Button>
        <Button  variant='contained' disabled  >desabilitado</Button>

        <Button variant='contained' color='primary' href="htts://www.google.com">Google</Button>


        <Button variant='contained' color='secondary' disableElevation >Sem Elevação</Button>






        </>
    )
}

export default Demo
