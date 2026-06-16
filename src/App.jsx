import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Inicio from './paginas/inicio/inicio'
import SobreMim from './paginas/SobreMim/SobreMim'
import Menu from './componentes/Menu/Menu'
import Banner from './componentes/Banner/Banner'
import Rodape from './componentes/Rodape/Rodape'

const pagina = window.location.pathname === '/' ? <Inicio/> :
<SobreMim/>

const App = () =>{
  return(
    <BrowserRouter>
    <Menu/>
    <Banner/>
      <Routes>
        <Route path='/' element={<Inicio/>} />
        <Route path='/sobremim' element={<SobreMim/>} />
        <Route path='*' element={<div>ERRO 404 - Página não encontrada!</div>}/>
      </Routes>
    <Rodape/>
    </BrowserRouter>
  )

}

export default App
