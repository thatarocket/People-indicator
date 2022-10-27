import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import ActionButtons from '../ActionButtons/ActionButtons';

function TablePeople(props) {
    const columns = [
        { 
            "field": "id", 
            "headerName": "ID",
            "width": 90 
        },
        {   "field": "estruturaId", 
            "headerName": "Estrutura", 
            "width": 150,
            renderCell: ({row}) => {
                return (
                    row && 
                    row.estruturaId >= 0 && 
                    props.listStructures && 
                    props.listStructures[row.estruturaId]?
                    props.listStructures[row.estruturaId].name : '-'
                );
            }
           
        },
        {
            "field": "nome",
            "headerName": "Nome",
            "width": 150
        },
        { 
            "field": "idade", 
            "headerName": "Idade", 
            "width": 90 
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
    return (
        <>
            <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    style={{backgroundColor:'white',width:'80%',margin:'20px auto'}}
                    rows={props.listPeople}
                    columns={columns}
                />
            </Box>
        </>
    );
}

export default TablePeople;