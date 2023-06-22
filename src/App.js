import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'

import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'

import { GithubProvider } from './context/github/GithubContext'
import { AlertProvider } from './context/alert/AlertContext'

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
      <Router>
        <div className='flex flex-col justify-between h-screen'>
          <Navbar></Navbar>

          <main className='container mx-auto px-3 pb-12'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/noutfound" element={<NotFound />} />
              <Route path="/*" element={<NotFound />} />


            </Routes>

          </main>
          <Footer></Footer>
        </div>
      </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
