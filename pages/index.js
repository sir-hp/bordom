import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
            <title>Borredom | Home</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Borredom</h1>
        <p className={styles.text}>this site wil finde things for you to do when you get borred</p>
        <Image src="/borred.png" width={400} height={500} />
      </main>      
    </>
  )
}
