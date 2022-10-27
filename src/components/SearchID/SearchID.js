import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function SearchID (props) {
    return(
        
        <div className="searchID">
            <Grid container sx={{backgroundColor: 'white',width:'80%',margin:'20px auto', padding:'5px', alignItems:'center'}}>
                <Grid item xs={6}>
                    <TextField
                        id="demo-helper-text-misaligned"
                        label="ID"
                        type="number"
                        onChange={event => props.setId(event.target.value)}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Button 
                        variant="outlined"
                        size="large"
                        onClick={() => props.handleSearch(props.id)}
                    >
                        Buscar
                    </Button>
                </Grid>
            </Grid>              
        </div>
    );
}

export default SearchID;