
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from './pages/Inicio';
import SobreMim from './pages/SobreMim';
import Menu from './components/Menu';

function App() {


  const pages = [
    {
      "name": "Início",
      "location": "/"
    },
    {
      "name": "Sobre Mim",
      "location": "/SobreMim"
    }
  ]

  return (

    <BrowserRouter>
      <Menu pages={pages}/>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/SobreMim' element={<SobreMim />} />
        <Route path='*' element={<div>404! Página não encontrada!</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
