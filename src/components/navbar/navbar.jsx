import { useEffect, useRef } from 'react';
import styles from './navbar.module.css';
export const NavBar = ({activeUnit,handleClick,sections,setActiveUnit,isMobile}) => {
  const navRef = useRef(null);
  useEffect(()=>{

    const handleScroll = () =>{
      if(window.scrollY >= navRef.current.offsetTop - 177.6){
        setActiveUnit('All')
      }
      if(activeUnit === 'Tortilla Wrap'){
        console.log('bruh')
      }
    }
    window.addEventListener("scroll",handleScroll);
    return () => window.removeEventListener("scroll",handleScroll);
  },[])

  useEffect(() => {
    const centerActiveUnit = () => {
      const container = navRef.current;
      const activeElement = container.querySelector(`.${styles.navBarUnitActive}`);
      if (activeElement) {
        const scrollOffset = activeElement.offsetLeft - container.offsetWidth / 2 + activeElement.offsetWidth / 2;
        container.scrollLeft = scrollOffset;
      }
    };
    centerActiveUnit();
  }, [activeUnit]);


  return (
    <div
      style={{top:isMobile?'167px':'90px'}} 
      className={styles.navBar} 
      id='navbar' 
      ref={navRef}
    >
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
