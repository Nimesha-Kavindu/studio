import './App.css'
import Header from './components/Header'
import Latest from './components/latest'
import SecondaryHeader from './components/secondaryHeader'
import Footer from './components/footer'

function App() {
  

  return (
    <div className="min-h-screen bg-gray-50 pt-8 pr-6">
        <Header/>
        <SecondaryHeader/>
        <Latest/>
        <Footer/>
    </div>
  )
}

export default App
