import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../src/GlobalStyles/globalStyle.scss';
import Inicio from './pages/inicio/Inicio';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Inicio /> } />
        {/* <Route path='/' element={ <Inicio /> } /> */}
        {/* <Route path='/' element={ <Inicio /> } /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
