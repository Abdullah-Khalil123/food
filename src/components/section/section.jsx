import React from 'react'
import styles from './section.module.css'
import { Card } from '../card/card'
export const Section = ({section}) => {
  const items=section.items;
  return (
    <>
    <div className={styles.section}>
      <div className={styles.sectionHeading}>{section.title}</div>
      <div className={styles.cardContainer}>
        {items.map((item,index)=>{
          return <Card key={index} item={item} />
        })}
      </div>
    </div>
    </>
  )
}
