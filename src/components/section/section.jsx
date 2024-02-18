import styles from './section.module.css'
import { Card } from '../card/card'
export const Section = ({section}) => {
  const items=section.items;
  return (
    <>
    <section className={styles.section} id={`${section.title}`}>
      <div className={styles.sectionHeading}>
        {section.title}
      </div>
      <div className={styles.cardContainer}>
        {items.map((item,index)=>{
          return <Card key={index} item={item} />
        })}
      </div>
    </section>
    </>
  )
}
