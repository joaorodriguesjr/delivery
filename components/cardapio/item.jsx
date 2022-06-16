import Image from 'next/image'
import styles from './item.module.css'

export default function Item({ item }) {
  return (
    <div className={styles.container}>
      <div className={styles.recipe}>
        <h2>{item.recipe.name}</h2>
        <div className={styles.picture} onClick={() => {}}>
          <Image priority={true} src={item.recipe.image} alt={item.recipe.alt} width={192} height={85}/>
        </div>
        <p>{item.recipe.ingredients}</p>
      </div>

      <div className={styles.servings}>
        { item.servings.map((serving, index) => (
          <div key={index} className={styles.serving}>
            <h3>{serving.type}</h3>
            <p>{serving.serve}</p>
            <p className={styles.price}>{serving.price}</p>
          </div>
        )) }
      </div>
    </div>
  )
}
