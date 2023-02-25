import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Curiousers!</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <div className={styles.description}>
          <p>
            Curiousers!
          </p>
        </div>
        
        <div id="page-content-wrapper">
          <div class="row">
            <div class="col-lg-8">
              <div className={styles.center}>
              <Image
                className={styles.logo}
                src="/favicon.ico"
                alt="Curiousers!"
                width={192}
                height={192}
                priority
                />
              </div>
            </div>
          </div>
      </div>

        
          <div className={styles.grid}>
          <a
            href="https://curiousers.org/about"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              About <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn more about us.
            </p>
          </a>

          <a
            href="https://drive.curiousers.org"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Storage <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Public files we share.
            </p>
          </a>

          <a
            href="https://potato.curiousers.org"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Potato <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and play our Minecraft server.
            </p>
          </a>

          <a
            href="https://s.csub.ml"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              csurl <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Short URL generator
            </p>
          </a>

        </div>

      </main>
    </>
  )
}
