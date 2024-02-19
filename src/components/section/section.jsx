import styles from './section.module.css'
import { Card } from '../card/card'
import { useEffect, useRef } from 'react'
export const Section = ({section,setActiveUnit}) => {
  const sectionRef = useRef(null)

  useEffect(()=>{
    const handleScroll=()=>{
      const sectionTop = sectionRef.current.offsetTop+177.6;
      const scrollPosition = window.scrollY + window.innerHeight
      const sectionBottom = sectionTop + sectionRef.current.offsetHeight
      if(scrollPosition>= sectionTop && scrollPosition < sectionBottom){
        setActiveUnit(section.title)
      }

      // const sectionHeight = sectionRef.current.offsetHeight/2;
      // const half = sectionTop + sectionHeight
      // if(scrollPosition >= half){
      //   setActiveUnit(section.title)
      // }
    }
    window.addEventListener("scroll",handleScroll)
    return () => window.removeEventListener("scroll",handleScroll)

  },[])
  return (
    <>
    <section ref={sectionRef} className={styles.section} id={`${section.title}`}>
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
