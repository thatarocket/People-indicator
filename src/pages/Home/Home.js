import Header from '../../components/Header/Header'
import HomeCards from '../../components/HomeCards/HomeCards'

function Home() {
    return(
        <>
            <Header 
                text={' GCP - Indicadores de pessoas'}
            />
            <HomeCards/>
        </>
    );
}

export default Home;