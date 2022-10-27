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

    const containerStyle = {
        backgroundColor: 'white', 
        padding:'5px', 
        width:'80%',
        margin:'20px auto'
    }
    const gridItemStyle = {
        margin:'5px',
        paddingLeft:'0px',
        paddingRight:'0px'
    }

    const gridBtnStyle = {
        margin: '0',
        alignItems: 'center',
        padding: '10px'
    }
    
    const btnAddStyle = {
        padding: '10px 5px',
        margin: '0',
        alignItems: 'center',
        width: '100%',
        height: '50px'

    }

    return(
        <>  
            <Grid container style={containerStyle}>
                <Grid item xs={3} style={gridItemStyle}>
                    <TextField
                        id="outlined-basic"
                        className='initialInputs'
                        label="Nome"
                        type="text"
                        value={props.name}
                        onChange={event => props.setName(event.target.value)}
                    />
                </Grid>

                <Grid item xs={3} style={gridItemStyle}>
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
                    
                <Grid item xs={3} style={gridItemStyle}>
                    <TextField
                        id="outlined-basic"
                        className='initialInputs'
                        label="Idade"
                        type="number"
                        value={props.age}
                        onChange={event => props.setAge(event.target.value)}
                        
                    />
                </Grid>

                <Grid item xs={2} style={gridBtnStyle}>
                    {!props.editing && (
                        <Button 
                            size="large" 
                            className="btnAddPeople" 
                            variant="outlined" 
                            style={btnAddStyle}
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