
import React from 'react'
import { horror, action, originals, comedy, romantic } from './urls'
import './App.css'
import Banner from './Components/Banner/banner';
import RowPost from './Components/RowPost/rowPost';
import Nav from './Components/Nav/Nav';






function App() {
  return (
    <div className="App">
      <Nav />
      <Banner index='1' />
      <RowPost title='Netfilx Originals' url={originals} />
      <RowPost title='Action' isSmall url={action} />
      <RowPost title='Comedy' isSmall url={comedy} />
      <RowPost title='Horor' isSmall url={horror} />
      <RowPost title='Romantic' isSmall url={romantic} />
      <Banner index='6' />

    </div>
  );
}

export default App;

