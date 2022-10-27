import Header from '../../components/Header/Header'
import HomeCards from '../../components/HomeCards/HomeCards'

function Home() {
    return(
        <>  
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
            </style>
            <Header 
                text={' GCP - Indicadores de pessoas'}
            />
            <HomeCards/>
        </>
    );
}

export default Home;