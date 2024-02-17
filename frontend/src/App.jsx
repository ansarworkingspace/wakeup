import React from 'react'
import './App.css'
import Header from './components/header/Header'
import AfterHead from './components/afterHead/AfterHead'
import VideoOnBody from './components/videoOnBody/VideoOnBody'
import OurPlans from './components/OurPlans/OurPlans'
import Payments from './components/payments/Payments'
import About from './components/about/About'
import Footer from './components/footer/Footer'
import FakeDiv from './components/FakeDiv'


const App = () => {
  return (
    <div className='appCss'>
      <Header/>
      <AfterHead/>
      <VideoOnBody/>
      <OurPlans/>
      <Payments/>
      <About/>
      <Footer/>
     
    </div>
  )
}

export default App
