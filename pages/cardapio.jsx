import Head from 'next/head'
import styles from './cardapio.module.css'
import Item from '../components/cardapio/item'
import { useLightbox } from '../hooks/lightbox'
import { useEffect } from 'react'

export function getStaticProps() {
  return {
    props: {
      images:[ '/thumbnails/tropeiro.png', '/thumbnails/salpicao.png', '/thumbnails/arroz.png' ],
      items: [
        {
          recipe: {
            name: 'Feijão Tropeiro',
            ingredients: 'Feijão, Farinha, Bacon, Linguiça, Ovos, Couve e Torresmo.',
            image: '/thumbnails/tropeiro.png',
            alt: 'Receita de feijão tropeiro do Família Delivery',
          },
          servings: [
            { type: 'Marmitex 500ml', serve: 'Serve até 2 pessoas', price: 'R$20,00' },
            { type: 'Marmitex 750ml', serve: 'Serve até 4 pessoas', price: 'R$25,00' },
          ],
        },
        {
          recipe: {
            name: 'Salpicão',
            ingredients: 'Frango desfiado, Maionese, Cenoura, Milho, Uva passa, Azeitona e Batata palha.',
            image: '/thumbnails/salpicao.png',
            alt: 'Receita de salpicão do Família Delivery'
          },
          servings: [
            { type: 'Marmitex 500ml', serve: 'Serve até 2 pessoas', price: 'R$20,00' },
            { type: 'Marmitex 750ml', serve: 'Serve até 4 pessoas', price: 'R$25,00' },
          ],
        },
        {
          recipe: {
            name: 'Arroz Branco',
            ingredients: 'Arroz agulinha Tipo-1 cozido ao ponto e soltinho.',
            image: '/thumbnails/arroz.png',
            alt: 'Receita de arroz branco do Família Delivery'
          },
          servings: [
            { type: 'Marmitex 500ml', serve: 'Serve até 2 pessoas', price: 'R$15,00' },
            { type: 'Marmitex 750ml', serve: 'Serve até 4 pessoas', price: 'R$20,00' },
          ],
        },
      ],
    }
  }
}

export default function DeliveryMenu({ images, items }) {
  const lightbox = useLightbox()

  useEffect(() => lightbox.preload(images), [])

  return <>
    <Head>
      <title>Cardápio - Família Delivery</title>
      <meta name="description" content="Seu almoço do fim de semana entregue na sua casa!"/>
      <link rel="canonical" href="https://familia.delivery/cardapio"/>

      <meta property="og:type" content="website" />
      <meta property="og:title" content="Cardápio - Família Delivery"/>
      <meta property="og:description" content="Seu almoço do fim de semana entregue na sua casa!"/>
      <meta property="og:url" content="https://familia.delivery/cardapio"/>
      <meta property="og:image" itemProp="image" content="https://familia.delivery/cardapio-link.png"/>
    </Head>
    { lightbox.component }
    <div className={styles.container}>
      <header className={styles.header}>
        <img src="/logo.svg" alt="logo Família Delivery" width={125} height={84}/>
        <div className={styles.separator}></div>
        <div className={styles.header_content}>
          <h1>Cardápio</h1>
          <a className={styles.action} href="https://wa.me/5531991047243" target='_blank' rel="noreferrer">
            <img src="/whatsapp.svg" width={16} height={16} alt="ícone do whatsapp"/>
            <span>Agendar Pedido</span>
          </a>
        </div>
      </header>

      <main className={styles.items}>
        { items.map((item, index) => <Item key={index} lightbox={lightbox} data={item}/>) }
      </main>

      <aside className={styles.service}>
        <h2>Atendimento</h2>
        <p>
          Serviço aos sábados e domingos das 11:00hs às 14:00hs. Pedidos de segunda à sexta-feira.
        </p>
        <a className={styles.action} href="https://wa.me/5531991047243" target='_blank' rel="noreferrer">
          <img src="/whatsapp.svg" width={16} height={16} alt="ícone do whatsapp"/>
          <span>Agendar Pedido</span>
        </a>
      </aside>
    </div>
  </>
}
