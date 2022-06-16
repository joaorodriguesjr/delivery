import Image from 'next/image'
import styles from './lightbox.module.css'
import { useCallback, useState } from 'react'

export function useLightbox() {
  const hidden  = `${styles.container} ${styles.hidden }`
  const visible = `${styles.container} ${styles.visible}`

  const [ component, setComponent ] = useState(<div className={hidden}></div>)

  const preload = useCallback((images) => {
    const components = images.map((image, index) => <Image key={index} src={image} priority={true} width={2000} height={884}/>)
    setComponent(<div className={hidden}>{components}</div>)
  }, [ component ])

  const update = useCallback((image) => {
    setComponent(
      <div className={visible} onClick={() => setComponent(<div className={hidden}></div>)}>
        <Image src={image} priority={true} width={2000} height={884}/>
      </div>
    )
  }, [ component ])

  return {
    component, preload, update
  }
}
