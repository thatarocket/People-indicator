import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function AddIndicator (props) {

    let objIndicator = {
        "idPessoa":props.id,
        "nome": props.indicador,
        "valor": props.valor
    }; 

    return(
        <>  
            {props.adicionavel && (
                <h3>{props.nome}</h3>
            )}
            <Grid container sx={{backgroundColor: 'white', padding:'5px', alignItems:'center',textAlign:'center'}}>
                <Grid item xs={6}>
                    {props.adicionavel && (
                        <TextField
                            id="demo-helper-text-misaligned"
                            label="Indicador"
                            value={props.indicador}
                            onChange={event => props.setIndicador(event.target.value)}
                        />
                    )}
                </Grid>
                <Grid item xs={3}>
                    {props.adicionavel && (
                        <TextField
                            id="demo-helper-text-misaligned"
                            label="Valor"
                            value={props.valor}
                            type="number"
                            onChange={event => props.setValor(event.target.value)}
                        />
                    )}
                </Grid>
                <Grid item xs={3} style={{textAlign:'center'}}>
                    {props.adicionavel && !props.editing && (
                        <Button 
                            variant="outlined"
                            size="large"
                            onClick={() => props.handleAdd(objIndicator)}
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

export default AddIndicator;