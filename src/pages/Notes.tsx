import { Button, Container } from '@material-ui/core'
import React from 'react'
import FrontArrow from '@material-ui/icons/ArrowForwardIosOutlined';


const Notes = () => {
    return (
        <Container>
            <Button 
            variant='contained' 
            color='primary' 
            endIcon={<FrontArrow/>}
            >
                Entrar
            </Button>
        </Container>
    )
}

export default Notes
