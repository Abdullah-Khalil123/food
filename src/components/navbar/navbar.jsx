import { useEffect, useRef } from 'react';
import styles from './navbar.module.css';
export const NavBar = ({activeUnit,handleClick,sections,setActiveUnit}) => {
  const navBarRef = useRef(null)
  useEffect(()=>{
    const handleScroll=()=>{
      const sectionTop = navBarRef.current.offsetTop+177.6;
      const scrollPosition = window.scrollY + window.innerHeight;
      const sectionBottom = sectionTop + navBarRef.current.offsetHeight
      if(scrollPosition>= sectionTop && scrollPosition < sectionBottom){
        setActiveUnit('All')
      }
    }
    window.addEventListener("scroll",handleScroll)
    return () => window.removeEventListener("scroll",handleScroll)
  })
  return (
    <div className={styles.navBar} ref={navBarRef}>
      <div
        className={`${styles.navBarUnit} ${activeUnit === 'All' ? styles.navBarUnitActive : ''}`}
        onClick={() => handleClick('All')}
      >
        All
      </div>
      {sections.map((section,index)=>{
        return(
          <div
            key={index}
            className={`${styles.navBarUnit} ${activeUnit === section.title ? styles.navBarUnitActive : ''}`}
            onClick={() => handleClick(section.title)}
          >
            {section.title}
          </div>
        )
      })}
    </div>
  );
};
