import { useState } from 'react'
import './App.css'
import { Header } from './components/header/header'
import { Footer } from './components/footer/footer';
import { Main } from './components/main/main';
import { Swiperr } from './components/swiper/swiper';
function App() {
  const [isSearchOpen, setSearchStatus]=useState(false);
  return (
    <>
     <Header isSearchOpen={isSearchOpen} setSearchStatus={setSearchStatus}/>
     <Swiperr />
     <Main />
     <Footer />  
    </>
  )
}

export default App
