import Head from 'next/head'
import { Fira_Sans } from '@next/font/google'
import styles from '@/styles/Home.module.scss'

const firaSansBold = Fira_Sans({ subsets: ['latin'],weight: "700"})
const firaSansRegular = Fira_Sans({ subsets: ['latin'],weight: "400"})
const firaSansLight = Fira_Sans({ subsets: ['latin'],weight: "200"})

export default function Home() {
  return (
    <>
      <Head>
        <title>Julie Kristen</title>
        <meta name="description" content="Software engineering and DevOps"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.title}>
            <span className={firaSansLight.className}>
              Hi! I&apos;m&nbsp;
            </span>
            <span className={firaSansBold.className}>
            Julie Kristen.
            </span>
          </h1>
          <h2 className={`${firaSansLight.className} ${styles.subtitle}`}>
            I&apos;m a software developer and DevOps engineer who specializes in Natural Language Processing.
          </h2>
        </div>
        <div className={firaSansRegular.className}>
          Get in touch at <a href="mailto:juliekristen@protonmail.com"
                             className={firaSansBold.className}>
            juliekristen@protonmail.com
          </a>
        </div>
      </main>
    </>
  )
}
