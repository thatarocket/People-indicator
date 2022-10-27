import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { Link } from "react-router-dom";

function Menu() {

    const divStyle = {
        height: "100%",
        backgroundColor: '#b2e0b2',
    };

    const menuStyle = {
        height: '100%',
        textAlign: 'center',
    };

    const linkStyle = {
        textDecoration: 'none',
        display: 'block',
        color: 'black',
        margin: '20px auto',
        fontFamily: 'Roboto',
        fontWeight: '700',
    };

    return(
        <>  
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
            </style>           
            <div style={divStyle}>
                <MenuList 
                    style={menuStyle}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                >   
                    <Link to="/" style={linkStyle}>
                        <MenuItem>Home</MenuItem>
                    </Link>
                    <Link to="/people" style={linkStyle}>
                        <MenuItem>Pessoas</MenuItem>
                    </Link>
                    <Link to="/Structures" style={linkStyle}>
                        <MenuItem>Estruturas</MenuItem>
                    </Link>
                    <Link to="/Indicators" style={linkStyle}>
                        <MenuItem>Indicadores</MenuItem>
                    </Link>
                </MenuList>
            </div>
            
        </>
    );
}

export default Menu;