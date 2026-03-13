//REACT
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
//BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
//PAGINAS
import './index.css'
import Inicio from './Inicio/Inicio.jsx'
import NaoTenhaMedo from './NaoTenhaMedo/NaoTenhaMedo.jsx'
import Navbar from './Components/Nav/Nav.jsx'
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Navbar /> {/* Sempre aparece */}
            <Routes>
                <Route path="/" element={<Inicio />} />

                <Route path="/nao-tenha-medo" element={<NaoTenhaMedo />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>
)