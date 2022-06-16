import Image from 'next/image'
import styles from './lightbox.module.css'
import { useCallback, useState } from 'react'

function Hidden({ children }) {
  return <div className={`${styles.container} ${styles.hidden }`}>{children}</div>
}

export function useLightbox() {
  const [ component, setComponent ] = useState(<Hidden/>)

  const preload = useCallback((images) => {
    images = images.map((image, index) => <Image key={index} src={image} priority={true} width={2000} height={884}/>)
    setComponent(<Hidden>{images}</Hidden>)
  }, [ component ])

  const update = useCallback((image) => {
    setComponent(
      <div className={`${styles.container} ${styles.visible }`} onClick={() => setComponent(<Hidden/>)}>
        <Image src={image} priority={true} width={2000} height={884}/>
      </div>
    )
  }, [ component ])

  return { component, preload, update }
}
