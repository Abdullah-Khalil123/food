import styles from './section.module.css'
import { Card } from '../card/card'
import { useEffect, useRef } from 'react'
export const Section = ({section,setActiveUnit}) => {
  const secRef = useRef(null)
  useEffect(()=>{
    const handleScroll = () =>{
      if(window.scrollY >= secRef.current.offsetTop - 180){
        setActiveUnit(prevState => ({
          previous: prevState.current,
          current: section.title,
        }))
      }
      if(window.scrollY==0){
        setActiveUnit(prevState => ({
          previous: prevState.current,
          current: 'All',
        }))
      }
    }
    window.addEventListener("scroll",handleScroll);
    return () => window.removeEventListener("scroll",handleScroll);
  },[])
  return (
    <>
    <section ref={secRef} className={styles.section} id={`${section.title}`}>
      <div className={styles.sectionHeading}>
        {section.title}
      </div>
      <div className={styles.cardContainer}>
        {section.items.map((item,index)=>{
          return <Card key={index} item={item} />
        })}
      </div>
    </section>
    </>
  )
}
