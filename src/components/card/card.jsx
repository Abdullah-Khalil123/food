import styles from './card.module.css'
import Image from 'next/image'
import nextConfig from '../../../next.config'
export const Card = ({item}) => {
  return (
    <>
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <Image
          src={item.src?`${nextConfig.basePath}/images/items/${item.src}`:`${nextConfig.basePath}/images/items/default.png`}
          width={300}
          height={300}
          alt='image'
        />
        <div className={styles.cardName}>{item.name}</div>
      </div>
      <div className={styles.cardSectionTwo}>
        <div className={styles.cardPrice}>PKR {item.price}</div>
        <div className={styles.addToCart}>Add to Cart</div>
      </div>
    </div>
    </>
  )
}
