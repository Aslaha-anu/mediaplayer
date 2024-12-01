
import { Route, Routes } from 'react-router'
import './App.css'
import History from './pages/History'
import Home from './pages/Home'
import Landing from './pages/Landing'
import Header from './Components/Header'
import Footer from './Components/Footer'
import VideoCard from './Components/VideoCard'
import View from './Components/View'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';



function App() {


  return (
    <>
    <ToastContainer position="top-right" autoClose={3000}theme="colored"/>
    

     <Header/>

      <Routes>

        <Route element={<Landing />} path='/' />
        <Route element={<Home />} path='/Home' />
        <Route element={<History />} path='/History' />
        <Route element={<VideoCard/>}path='/VideoCard'/>
        <Route element={<View/>}path='/View'/>

      </Routes>
      <Footer/>

    </>
    
  )
}

export default App
