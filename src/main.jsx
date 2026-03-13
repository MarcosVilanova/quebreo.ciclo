//REACT
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
//BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
//PAGINAS
import './index.css'
import Inicio from './Pages/Inicio/Inicio.jsx'

import Navbar from './Components/Nav/Nav.jsx'
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Inicio />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>
)