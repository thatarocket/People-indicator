import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function AddPerson(props) {
    
    let objPerson = {
        estruturaId: props.structure,
        nome: props.name,
        idade: props.age
    };

    return(
        <>  
            <Grid container sx={{backgroundColor: 'white',margin: '10px 0px', padding:'5px'}}>

                <Grid item xs={3}>
                    <TextField
                        id="outlined-basic"
                        className='initialInputs'
                        label="Nome"
                        type="text"
                        value={props.name}
                        onChange={event => props.setName(event.target.value)}
                    />
                </Grid>

                <Grid item xs={3}>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Estruturas</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Estruturas"
                                    value={props.structure}
                                    onChange={event => props.setStructure(event.target.value)}
                                >   
                                    {props.listStructures.map((structure, index) => (
                                        <MenuItem key={index} value={structure.id}>
                                            {structure.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                        </FormControl>
                    </Box>
                </Grid>
                    
                <Grid item xs={3}>
                    <TextField
                        id="outlined-basic"
                        className='initialInputs'
                        label="Idade"
                        type="number"
                        value={props.age}
                        onChange={event => props.setAge(event.target.value)}
                        
                    />
                </Grid>

                <Grid item xs={3}>
                    {!props.editing && (
                        <Button 
                            size="large" 
                            className="btnAddPeople" 
                            variant="outlined" 
                            onClick={() => props.handleAdd(objPerson)}
                        >
                            Adicionar
                        </Button>   
                        
                    )}   
                    {props.editing && (
                        <>
                            <Button 
                                size="large" 
                                variant="outlined" 
                                onClick={props.handleCancel}
                            >
                                Cancelar
                            </Button>   
                            <Button 
                                size="large" 
                                variant="outlined" 
                                onClick={() => props.saveEdit()}
                            >
                                Salvar
                            </Button> 
                        </>
                        
                    )}             
                </Grid>
            </Grid>
        </>
    );
}
export default AddPerson;