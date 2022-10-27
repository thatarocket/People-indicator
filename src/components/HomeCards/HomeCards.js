import Card from '@mui/material/Card';
import { Link } from "react-router-dom";

function HomeCards() {

    const cardStyle = {
        width:'80%',
        margin:' 20px auto',
        border:'40',
        height: '20%',
        alignItems: 'center',
        
    };

    const linkStyle = {
        textDecoration:'none',
        color:'black',
        display:'block',
        width:'100%',
        fontFamily: 'Roboto',
        fontWeight: '700',
        textAlign: 'center',
        padding: '30px 10px',
        fontSize: '30px',
    };
    
    return(
        <>           
            <Card style={cardStyle}>
                <Link to="/Structures" style={linkStyle}>
                    Estruturas
                </Link>
            </Card>

            <Card style={cardStyle}>
                <Link to="/People" style={linkStyle}>
                    Pessoas
                </Link>
            </Card>

            <Card style={cardStyle}>
                <Link to="/Indicators" style={linkStyle}>
                    Indicadores
                </Link>
            </Card>
        </>
    );
}

export default HomeCards;