"use client"
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";
import { Main } from "@/components/main/main";
import { Swiperr } from "@/components/swiper/swiper";
import { useState } from "react";
export default function Home() {
  const [isSearchOpen,setSearchStatus]=useState(false)
  return (
    <>
    <Header isSearchOpen={isSearchOpen} setSearchStatus={setSearchStatus}/>
    <Swiperr/>
    <Main/>
    <Footer/>
    </>
  );
}
