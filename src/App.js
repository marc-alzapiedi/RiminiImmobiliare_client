import {Routes, Route } from 'react-router-dom'
import Main from "./pages/main/main.js"
import Compra from './pages/compra/compra.js';
import Affitta from './pages/affitta/affitta.js';
import Aste from './pages/aste/aste.js';

function App() {
  return (
    <>
      <Routes>

        <Route path="/" 
        element = {<Main />}/>

        <Route path='/affitta/:type/:province' element = {<Affitta />}/>


        <Route path="/:buy/:type/:province" element= {<Compra />}/>

        <Route path='/aste/:type/:province' element = {<Aste />} />

      </Routes>
    </>
  );
}

export default App;
