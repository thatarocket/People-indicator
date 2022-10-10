import Header from "../../components/Header/Header";
import { DataGrid } from '@mui/x-data-grid';
import * as React from 'react';
import Box from '@mui/material/Box';

function Structures() {

    const columns = [
        { 
            "field": "id", 
            "headerName": "ID", 
            "width": 90 
        },
        {   "field": "level", 
            "headerName": "Level", 
            "type": "number",
            "width": 110
        },
        {   "field": "code", 
            "headerName": "Código", 
            "type": "number",
            "width": 110
        },
        {
            "field": "name",
            "headerName": "Nome",
            "width": 150
        },
        {   "field": "currentCicle", 
            "headerName": "Ciclo atual", 
            "type": "number",
            "width": 130
        }
    ]
    const rows = [
        {id:0 , level: 1, code: '1', name: 'Jon', currentCicle: 35 },
        {id:1 , level: 2, code: '2', name: 'Cersei', currentCicle: 42 },
        {id:2 , level: 3, code: '3', name: 'Jaime', currentCicle: 45 },
        {id:3 , level: 4, code: '4', name: 'Arya', currentCicle: 16 }
    ]

    return(
        <>
            <Header 
                text={'Estruturas'}
            />
            <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    style={{backgroundColor:'white'}}
                    rows={rows}
                    columns={columns}
                />
            </Box>
        </> 
    );
}

export default Structures;