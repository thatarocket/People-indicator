import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import ActionButtons from '../ActionButtons/ActionButtons';

function TableIndicators(props) {

    const columns = [
        { 
            "field": "nome", 
            "headerName": "Indicador",
            "width": 180 
        },
        {   "field": "valor", 
            "headerName": "Valor", 
            "width": 100          
        },
        { field: 'operacao', headerName: 'Operação', width: 250,
            renderCell: ({row}) => {
                return (() => ActionButtons(
                    {   
                        row,
                        handleOpen: props.handleOpen,
                        handleClose: props.handleClose,
                        open: props.open,
                        listStructures: props.listStructures,
                        listPeople: props.listPeople,
                        deletePerson: props.deletePerson,
                        handleDelete: props.handleDelete,
                        handleEdit: props.handleEdit
                    }
                ))();
            }
        }
    ]

    return(
        <>  
            {props.adicionavel && (
                <Box sx={{ height: 400, width: '100%' }}>
                    <DataGrid
                        style={{backgroundColor:'white'}}
                        rows={props.indicadores}
                        columns={columns}
                    />
                </Box>
            )}
        </>
    );
}

export default TableIndicators;