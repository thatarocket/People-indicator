import Header from "../../components/Header/Header";
import { DataGrid } from '@mui/x-data-grid';
import * as React from 'react';
import Box from '@mui/material/Box';

function Structures(props) {

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

    return(
        <>
            <Header 
                text={'Estruturas'}
            />
            <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    style={{backgroundColor:'white'}}
                    rows={props.structures}
                    columns={columns}
                />
            </Box>
        </> 
    );
}

export default Structures;