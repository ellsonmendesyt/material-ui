import { Button, FormControl, FormControlLabel, FormLabel, makeStyles, Radio, RadioGroup, TextField, Typography } from '@material-ui/core'
import React,{useState} from 'react'


const useStyles = makeStyles({
 field:{
     marginTop:20,
     marginBottom:20,
     display: 'block'
 }
})


const Create = () => {
    const classes = useStyles();
    const [title,setTitle]=useState<string | undefined>('');
    const [details,setDetails]=useState<string | undefined>('');

    const [titleError,setTitleError]=useState(false);
    const [detailsError,setDetailsError]=useState(false);
    const [categoria,setCategoria]=useState<string>('todos');


    const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
     e.preventDefault();

    //  para não armazendar erro da ultima tentativa quando entrar limpa
      setTitleError(false);
      setDetailsError(false);
        // se nao tiver nada nos campos mostra erro
        if(!title)setTitleError(true);
        if(!details)setDetailsError(true);

     if(title && details){
      console.log(title,details,categoria)
      
    }
    
    //  ao final de tudo limpa os campos
      setTitle('');
      setDetails('');
      setCategoria('todos')
    
    }

    return (
        <div>
            <Typography align='center' variant='h5' component='h2' color='textSecondary' > Criar uma Nota</Typography>

          <form noValidate autoComplete='off'  onSubmit={handleSubmit}>

              <TextField 
              className={classes.field} 
              fullWidth 
              required
               variant='outlined' 
               label='Titulo' 
               color='secondary' 
               error={titleError}
               value={title}
               onChange={(e:React.ChangeEvent<HTMLTextAreaElement> )=>setTitle(e.target.value )}
               />


              <TextField 
              multiline 
              rows={4} 
              className={classes.field} 
              fullWidth 
              required 
              variant='outlined' 
              label='Detalhes'  
              color='secondary' 
              error={detailsError}
              value={details}
              onChange={(e:React.ChangeEvent<HTMLTextAreaElement> )=>setDetails(e.target.value )}
              />
            <Button type='submit' variant='contained' color='secondary' size='large'>Criar</Button>
            <FormControl className={classes.field}>
                <FormLabel>Categorias</FormLabel>
                <RadioGroup value={categoria} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setCategoria(e.target.value)}>
                <FormControlLabel value='todos' label='todos' control={<Radio />}/>
                <FormControlLabel value='money' label='money' control={<Radio />}/>
                <FormControlLabel value='reminders' label='reminders' control={<Radio />}/>
                <FormControlLabel value='work' label='work' control={<Radio />}/>
                </RadioGroup>
            </FormControl>
          </form>
          {title && <Typography color='secondary'>{title}</Typography>}
          {details && <p>{details}</p>}
          {categoria && <p>{categoria}</p>}
        </div>
    )
}

export default Create
