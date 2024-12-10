import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../src/GlobalStyles/globalStyle.scss';
import Inicio from './pages/inicio/Inicio';
import QueroDoar from './pages/queroDoar/QueroDoar';
import LivrosDoados from './pages/livrosDoados/LivrosDoados';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Inicio /> } />
        <Route path='/queroDoar' element={ <QueroDoar /> } />
        <Route path='/livrosDoados' element={ <LivrosDoados /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
