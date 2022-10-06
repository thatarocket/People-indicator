import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

import { Link } from "react-router-dom";

function HomeCards() {
    return(
        <>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Link to="/People" style={{ textDecoration: 'none', display: 'block',color:'black' }}>
                        <Button size="large">Pessoas</Button>
                    </Link>
                    <Link to="/Structures" style={{ textDecoration: 'none', display: 'block',color:'black' }}>
                        <Button size="large">Estruturas</Button>
                    </Link>
                    <Link to="/Indicators" style={{ textDecoration: 'none', display: 'block',color:'black' }}>
                        <Button size="large">Indicadores</Button>
                    </Link>
                </CardContent>
            </Card>
        </>
    );
}

export default HomeCards;