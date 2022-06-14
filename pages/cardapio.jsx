import Head from 'next/head'
import module from './cardapio.module.css'

export default function DeliveryMenu() {
  return <>
    <Head>
      <title>Cardápio - Família Delivery</title>
      <meta name="description" content="O seu almoço do fim de semana entregue na sua casa"/>
      <link rel="canonical" href="https://familia.delivery/cardapio"/>
    </Head>
    <div className={module.container}>
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

      <main className={module.items}>
        <div className={module.item}>
          <div className={module.recipe}>
            <h2>Feijão Tropeiro</h2>
            <div className={module.picture}>
              <img src="/thumbnails/tropeiro.png" alt="Receita de feijão tropeiro do Família Delivery" width={192}/>
            </div>
            <p>Feijão, Farinha, Bacon, Linguiça, Ovos, Couve e Torresmo.</p>
          </div>

          <div className={module.portions}>
            <div className={module.portion}>
              <h3>Marmitex 500ml</h3>
              <p>Serve até 2 pessoas</p>
              <p className={module.price}>R$20,00</p>
            </div>

            <div className={module.portion}>
              <h3>Marmitex 750ml</h3>
              <p>Serve até 4 pessoas</p>
              <p className={module.price}>R$25,00</p>
            </div>
          </div>
        </div>

        <div className={module.item}>
          <div className={module.recipe}>
            <h2>Salpicão</h2>
            <div className={module.picture}>
              <img src="/thumbnails/salpicao.png" alt="Receita de salpicão do Família Delivery" width={192}/>
            </div>
            <p>Frango desfiado, Maionese, Cenoura, Milho, Uva passa, Azeitona e Batata palha.</p>
          </div>

          <div className={module.portions}>
            <div className={module.portion}>
              <h3>Marmitex 500ml</h3>
              <p>Serve até 2 pessoas</p>
              <p className={module.price}>R$20,00</p>
            </div>

            <div className={module.portion}>
              <h3>Marmitex 750ml</h3>
              <p>Serve até 4 pessoas</p>
              <p className={module.price}>R$25,00</p>
            </div>
          </div>
        </div>

        <div className={module.item}>
          <div className={module.recipe}>
            <h2>Arroz Branco</h2>
            <div className={module.picture}>
              <img src="/thumbnails/arroz.png" alt="Receita de arroz branco do Família Delivery" width={192}/>
            </div>
            <p>Arroz agulinha Tipo1 cozido ao ponto e soltinho.</p>
          </div>

          <div className={module.portions}>
            <div className={module.portion}>
              <h3>Marmitex 500ml</h3>
              <p>Serve até 2 pessoas</p>
              <p className={module.price}>R$15,00</p>
            </div>

            <div className={module.portion}>
              <h3>Marmitex 750ml</h3>
              <p>Serve até 4 pessoas</p>
              <p className={module.price}>R$20,00</p>
            </div>
          </div>
        </div>
      </main>

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
    </div>
  </>
}
