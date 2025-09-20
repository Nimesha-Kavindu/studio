import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import MyPortfolio from './pages/myPortfolio'
import Contact from './pages/contact'
import NotFound from './pages/404'


function App() {


  return (

    <HashRouter>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path='/*' element={<Home/>}/>
          <Route path='/my-portfolio' element={<MyPortfolio/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App