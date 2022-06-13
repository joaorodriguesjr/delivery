import Head from 'next/head'
import module from './cardapio.module.css'

export default function DeliveryMenu() {
  return <>
    <Head>
      <title>Cardápio - Família Delivery</title>
    </Head>
    <main className={module.container}>
      <header className={module.header}>
        <img src="/logo.svg" alt="logo Família Delivery" />
        <div className={module.separator}></div>
        <div className={module.header_content}>
          <h1>Cardápio</h1>
          <a href="https://wa.me/5531991047243" target='_blank' rel="noreferrer">
            <img src="/whatsapp.svg"/>
            <span>Agendar Pedido</span>
          </a>
        </div>
      </header>
    </main>
  </>
}
