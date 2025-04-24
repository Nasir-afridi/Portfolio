import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home.jsx';
import About from './components/pages/About.jsx';
import Projects from './components/pages/Projects.jsx';
import Contact from './components/pages/Contact.jsx';
import Skills from './components/pages/Skills.jsx';
import Resume from './components/pages/Resume.jsx'


createRoot(document.getElementById('root')).render(
 <StrictMode> 
    <BrowserRouter> 
      <App />
      <Routes>
          <Route path='/' element={< Home />} />
          <Route path='/home' element={< Home />} />
          <Route path='/about' element={< About />} />
          <Route path='/projects' element={< Projects />} />
          <Route path='/skills' element={< Skills />} />
          <Route path='/resume' element={< Resume />} />
          <Route path='/contact' element={< Contact />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
