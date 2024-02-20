import styles from './section.module.css'
import { Card } from '../card/card'
import { useEffect, useRef } from 'react'
export const Section = ({section,setActiveUnit}) => {
  const secRef = useRef(null)
  useEffect(()=>{
    const handleScroll = () =>{
      const offset = window.innerWidth<600 ? 260 : 180;
      if(window.scrollY >= secRef.current.offsetTop - offset){
        setActiveUnit(section.title)
      }
      if(window.scrollY==0){
        setActiveUnit('All')
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
