"use client"
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";
import { Main } from "@/components/main/main";
import { Swiperr } from "@/components/swiper/swiper";
import { NavBar } from "@/components/navbar/navbar";
import { sections } from "@/components/hardCodeMenuItems";
import { useEffect, useState } from "react";
export default function Home() {
  
  const [activeUnit, setActiveUnit] = useState({previous:'',current:'All'});
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
    handleResize()
    window.addEventListener("resize",handleResize)
    return ()=>window.removeEventListener("resize",handleResize)
  },[])
  const handleClick = (unit) => {
    setActiveUnit(prevState => ({
      previous: prevState.current,
      current: unit
    }));
    if(unit=='All'){
      const container = document.getElementById('Burger');
      if(container){
        window.scrollTo({
          top:container.offsetTop - 177.6*2,
          behavior:'smooth',
        })
      }
    }
    else{
      const container = document.getElementById(unit);
      if (container) {
        window.scrollTo({
          top:container.offsetTop - 177.6,
          behavior:'smooth'
        })
      }
    } 
  };

  useEffect(()=>{
    console.log("Active: "+activeUnit.current+" Previous: "+activeUnit.previous)
  },[activeUnit.current])

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
    />
    <Footer/>
    </>
  );
}
