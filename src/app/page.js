"use client"
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";
import { Main } from "@/components/main/main";
import { Swiperr } from "@/components/swiper/swiper";
import { NavBar } from "@/components/navbar/navbar";
import { sections } from "@/components/hardCodeMenuItems";
import { useEffect, useState } from "react";
export default function Home() {

  const [isSearchOpen,setSearchStatus]=useState(false)
  const [activeUnit, setActiveUnit] = useState('All');
  const [isMobile,setMobileStatus]=useState(false);


  const handleClick = (unit) => {
    setActiveUnit(unit);
  };

  useEffect(()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth",
    })
    const handleResize=()=>{
      setMobileStatus(window.innerWidth<600)
    }
    handleResize()
    window.addEventListener("resize",handleResize)
    return ()=>window.removeEventListener("resize",handleResize)
  },[])
  return (
    <>
    <Header 
      isSearchOpen={isSearchOpen} 
      setSearchStatus={setSearchStatus}
    />
    <Swiperr isMobile={isMobile}/>
    <NavBar 
      activeUnit={activeUnit} 
      handleClick={handleClick} 
      sections={sections} 
      setActiveUnit={setActiveUnit}
    />
    <Main 
      sections={sections} 
      setActiveUnit={setActiveUnit}
      isMobile={isMobile}
    />
    <Footer/>
    </>
  );
}
