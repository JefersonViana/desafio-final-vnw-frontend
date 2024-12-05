import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../src/GlobalStyles/globalStyle.scss';
import Inicio from './pages/inicio/Inicio';
import QueroDoar from './pages/queroDoar/QueroDoar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Inicio /> } />
        <Route path='/queroDoar' element={ <QueroDoar /> } />
        {/* <Route path='/' element={ <Inicio /> } /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
