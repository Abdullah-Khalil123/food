"use client"
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";
import { Main } from "@/components/main/main";
import { Swiperr } from "@/components/swiper/swiper";
import { NavBar } from "@/components/navbar/navbar";
import { useRef, useState } from "react";
export default function Home() {

  const sectionsRef = useRef([])

  const [isSearchOpen,setSearchStatus]=useState(false)
  const [activeUnit, setActiveUnit] = useState('All');

  const handleClick = (unit) => {
    setActiveUnit(unit);
  };

  return (
    <>
    <Header isSearchOpen={isSearchOpen} setSearchStatus={setSearchStatus}/>
    <Swiperr/>
    <NavBar activeUnit={activeUnit} handleClick={handleClick}/>
    <Main/>
    <Footer/>
    </>
  );
}
