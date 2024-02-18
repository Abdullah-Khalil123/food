import React, { useRef } from 'react'
import styles from './main.module.css'
import { sections } from '../section/hardCodeMenuItems'
import { NavBar } from '../navbar/navbar'
import { Section } from '../section/section'
export const Main = () => {
  return (
    <>
    <main className={styles.main}>
      <NavBar />
      {sections.map((section,index)=>{
        return <Section key={index} section={section}/>
      })}
    </main>
    </>
  )
}
