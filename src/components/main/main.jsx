import styles from './main.module.css'
import { Section } from '../section/section'
export const Main = ({sections,setActiveUnit}) => {
  return (
    <>
    <main className={styles.main}>
      {sections.map((section,index)=>{
        return <Section key={index} section={section} setActiveUnit={setActiveUnit}/>
      })}
    </main>
    </>
  )
}
