import React from 'react';
import Header from '../Navbar/Navbar';
import Painel from '../Painel/Painel';
import Footer from '../Footer/Footer'
import Sobre from '../Sobre/Sobre'
import './home.css';

function Home(props) {
    console.log(props)
    let pagina = null;
    if(props.location.pathname==="/") {
        pagina = <Painel />
    } else {
        pagina = <Sobre />
    }
    return(
        <div>
            <Header />
            <div className="page_container">
            {pagina}
            </div>
            <div className="footer_container">
            <Footer />
            </div>
        </div>
    )
}

export default Home;