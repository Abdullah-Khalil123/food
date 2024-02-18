import styles from './main.module.css'
import { sections } from '../section/hardCodeMenuItems'
import { Section } from '../section/section'
export const Main = () => {
  return (
    <>
    <main className={styles.main}>
      {sections.map((section,index)=>{
        return <Section key={index} section={section}/>
      })}
    </main>
    </>
  )
}
