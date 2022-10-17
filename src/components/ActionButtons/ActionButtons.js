import React from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function ActionButtons (props) {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4
    };

    return (
        <>
            <Button 
                variant="outlined" 
                startIcon={<DeleteIcon />}
                onClick={() => props.handleOpen()}
            >
                Delete
            </Button>
            
            <Button 
                variant="outlined" 
                startIcon={<EditIcon/>}
                onClick={()=>props.handleEdit(props.row)}
            >
                Editar
            </Button>

            <Modal
                open={props.open}
                onClose={() =>props.handleClose()}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Você realmente deseja apagar?
                    </Typography>

                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Button 
                                    size="large" 
                                    variant="outlined" 
                                    onClick={()=>props.handleDelete(props.row.id)}>
                                    Sim
                                </Button>   
                            </Grid>
                            <Grid item xs={6}>
                                <Button 
                                    size="large" 
                                    variant="outlined" 
                                    onClick={()=>props.handleClose()}>
                                    Não
                                </Button> 
                            </Grid>
                    </Grid>
                                       
                </Box>
            </Modal> 

        </>
    )
}

export default ActionButtons;