import React from'react';
import Banner from './components/Banner';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import Propaganda from './components/Propaganda';

function App() {
  return (
    <div>
        <NavBar />
        <ItemListContainer greeting={"Estas preparado para tanto estilo?"} />
        <Propaganda />
        <Banner />
        <Footer />
    </div>
  );
}

export default App;
