"use client"
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";
import { Main } from "@/components/main/main";
import { Swiperr } from "@/components/swiper/swiper";
import { NavBar } from "@/components/navbar/navbar";
import { sections } from "@/components/hardCodeMenuItems";
import { useEffect, useState } from "react";
export default function Home() {
  
  const [activeUnit, setActiveUnit] = useState('All');
  const [isSearchOpen,setSearchStatus]=useState(false)
  const [isMobile,setMobileStatus]=useState(false);
  useEffect(()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth",
    })
    const handleResize=()=>{
      setMobileStatus(window.innerWidth<600)
    }
    handleResize();
    window.addEventListener("resize",handleResize)
    return ()=>window.removeEventListener("resize",handleResize)
  },[])
  const handleClick = (unit) => {

    const offset = isMobile? 251 : 177.6;
    if(unit=='All'){
      const container = document.getElementById('Burger');
      if(container){
        window.scrollTo({
          top:container.offsetTop - offset*2,
          behavior:'smooth',
        })
      }
    }
    else{
      const container = document.getElementById(unit);
      
      if (container) {
        window.scrollTo({
          top:container.offsetTop - offset,
          behavior:'smooth'
        })
      }
    } 
  };
  return (
    <>
    <Header 
      isSearchOpen={isSearchOpen} 
      setSearchStatus={setSearchStatus}
      isMobile={isMobile}
    />
    <Swiperr isMobile={isMobile}/>
    <NavBar 
      activeUnit={activeUnit}
      handleClick={handleClick} 
      sections={sections}
      setActiveUnit={setActiveUnit} 
      isMobile={isMobile}
    />
    <Main
      sections={sections}
      setActiveUnit={setActiveUnit} 
    />
    <Footer/>
    </>
  );
}
