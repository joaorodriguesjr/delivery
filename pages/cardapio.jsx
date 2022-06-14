import Head from 'next/head'
import module from './cardapio.module.css'

export default function DeliveryMenu() {
  return <>
    <Head>
      <title>Cardápio - Família Delivery</title>
      <meta name="description" content="O seu almoço do fim de semana entregue na sua casa" />
    </Head>
    <main className={module.container}>
      <header className={module.header}>
        <img src="/logo.svg" alt="logo Família Delivery" width={125} height={84}/>
        <div className={module.separator}></div>
        <div className={module.header_content}>
          <h1>Cardápio</h1>
          <a className={module.action} href="https://wa.me/5531991047243" target='_blank' rel="noreferrer">
            <img src="/whatsapp.svg" width={16} height={16} alt="ícone do whatsapp"/>
            <span>Agendar Pedido</span>
          </a>
        </div>
      </header>
      <aside className={module.service}>
        <h2>Atendimento</h2>
        <p>
          Serviço aos sábados e domingos das 11:00hs às 14:00hs. Pedidos de segunda à sexta-feira.
        </p>
        <a className={module.action} href="https://wa.me/5531991047243" target='_blank' rel="noreferrer">
          <img src="/whatsapp.svg" width={16} height={16} alt="ícone do whatsapp"/>
          <span>Agendar Pedido</span>
        </a>
      </aside>
    </main>
  </>
}
