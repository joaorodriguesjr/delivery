import Image from 'next/image'
import styles from './item.module.css'

export default function Item({ lightbox, data }) {
  return (
    <div className={styles.container}>
      <div className={styles.recipe}>
        <h2>{data.recipe.name}</h2>
        <div className={styles.picture} onClick={() => lightbox.update(data.recipe.image)}>
          <Image priority={true} src={data.recipe.image} alt={data.recipe.alt} width={192} height={85}/>
        </div>
        <p>{data.recipe.ingredients}</p>
      </div>

      <div className={styles.servings}>
        { data.servings.map((serving, index) => (
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
