import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { Link } from "react-router-dom";

function Menu() {
    return(
        <>             
            <div style={{height:400,backgroundColor:'beige'}}>
                <MenuList style={{height:'100%',textAlign:'center'}}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                >   
                    <Link to="/" style={{ textDecoration: 'none', display: 'block',color:'black' }}>
                        <MenuItem>Home</MenuItem>
                    </Link>
                    <Link to="/People" style={{ textDecoration: 'none', display: 'block',color:'black' }}>
                        <MenuItem>Pessoas</MenuItem>
                    </Link>
                    <Link to="/Structures" style={{ textDecoration: 'none', display: 'block',color:'black' }}>
                        <MenuItem>Estruturas</MenuItem>
                    </Link>
                    <Link to="/Indicators" style={{ textDecoration: 'none', display: 'block',color:'black' }}>
                        <MenuItem>Indicadores</MenuItem>
                    </Link>
                </MenuList>
            </div>
            
        </>
    );
}

export default Menu;