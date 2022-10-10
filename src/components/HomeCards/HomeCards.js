import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';

import { Link } from "react-router-dom";

function HomeCards() {
    return(
        <>
            <Card sx={{width:'80%',margin:' 20px auto',border:'40', }}>
                <Link to="/People" style={{ textDecoration: 'none', display: 'block',color:'black',width:'100%' }}>
                    Pessoas
                </Link>
            </Card>

            <Card sx={{width:'80%',margin:' 20px auto',border:'0'}}>
                <Link to="/Structures" style={{ textDecoration: 'none', display: 'block',color:'black' ,width:'100%', borderBottom:'40px' }}>
                    Estruturas
                </Link>
            </Card>

            <Card sx={{width:'80%',margin:' 20px auto',border:'0'}}>
                <Link to="/Indicators" style={{ textDecoration: 'none', display: 'block',color:'black',width:'100%', borderBottom:'40px' }}>
                    Indicadores
                </Link>
            </Card>
        </>
    );
}

export default HomeCards;