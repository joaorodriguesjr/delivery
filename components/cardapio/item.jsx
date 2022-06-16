import Image from 'next/image'
import module from './item.module.css'

export default function Item({ item }) {
  return (
    <div className={module.item}>
      <div className={module.recipe}>
        <h2>{item.recipe.name}</h2>
        <div className={module.picture} onClick={() => {}}>
          <Image priority={true} src={item.recipe.image} alt={item.recipe.alt} width={192} height={85}/>
        </div>
        <p>{item.recipe.ingredients}</p>
      </div>

      <div className={module.portions}>
        { item.servings.map((serving, index) => (
          <div key={index} className={module.portion}>
            <h3>{serving.type}</h3>
            <p>{serving.serve}</p>
            <p className={module.price}>{serving.price}</p>
          </div>
        )) }
      </div>
    </div>
  )
}
