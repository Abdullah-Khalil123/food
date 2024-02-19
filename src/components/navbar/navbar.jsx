import { useEffect, useRef } from 'react';
import styles from './navbar.module.css';
export const NavBar = ({activeUnit,handleClick,sections,setActiveUnit}) => {
  const navRef = useRef(null);
  useEffect(()=>{
    const handleScroll = () =>{
      if(window.scrollY >= navRef.current.offsetTop - 177.6){
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
    <div className={styles.navBar} id='navbar' ref={navRef}>
      <div 
        className={`${styles.navBarUnit} ${activeUnit.current === 'All' ? styles.navBarUnitActive : ''}`} 
        onClick={() => handleClick('All')}
      >
        All
      </div>
      {sections.map((section,index)=>{
        return(
          <div 
            key={index} 
            className={`${styles.navBarUnit} ${activeUnit.current === section.title ? styles.navBarUnitActive : ''}`} 
            onClick={() => handleClick(section.title)}
          >
            {section.title}
          </div>
        )
      })}
    </div>
  );
};
