import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';

import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";

function Menu() {
    return(
        <>             
            <Paper style={{height:'300px',backgroundColor:'beige'}}>
                <MenuList
                    id="composition-menu"
                    aria-labelledby="composition-button"
                >   
                    <Link to="/" style={{ textDecoration: 'none', display: 'block',color:'black' }}>
                        <MenuItem>Home</MenuItem>
                    </Link>
                    <Link to="/People" style={{ textDecoration: 'none', display: 'block',color:'black' }}>
                        <MenuItem>People</MenuItem>
                    </Link>
                    <Link to="/Structures" style={{ textDecoration: 'none', display: 'block',color:'black' }}>
                        <MenuItem>Estruturas</MenuItem>
                    </Link>
                    <Link to="/Indicators" style={{ textDecoration: 'none', display: 'block',color:'black' }}>
                        <MenuItem>Indicadores</MenuItem>
                    </Link>
                </MenuList>
            </Paper>
            
        </>
    );
}

export default Menu;