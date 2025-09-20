import { Routes, Route, Navigate } from 'react-router-dom'
import Header from '../components/header'
import Latest from '../components/latest'
import Editorial from '../components/Editorial'
import Commercial from '../components/commercial'
import Portfolio from '../components/porfolio'
import Beauty from '../components/beauty'
import Corporate from '../components/corporate'
import SecondaryHeader from '../components/secondaryHeader'
import Footer from '../components/footer'

export default function Home() {
    return (
        <>
            <Header/>
            <SecondaryHeader/>
            <div>
                <Routes>
                    <Route path="/" element={<Navigate to="/latest" replace />} />
                    <Route path="/latest" element={<Latest/>} />
                    <Route path="/editorial" element={<Editorial/>} />
                    <Route path="/commercial" element={<Commercial/>} />
                    <Route path="/portfolio" element={<Portfolio/>} />
                    <Route path="/beauty" element={<Beauty/>} />
                    <Route path="/corporate-profiles" element={<Corporate/>} />
                </Routes>
            </div>
            <Footer/>
        </>
    )
}