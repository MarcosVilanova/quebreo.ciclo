//REACT
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
//PAGINA
import './index.css'
import Inicio from './Inicio/Inicio.jsx'
//BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Inicio />
        </BrowserRouter>
    </StrictMode>
)