import Head from 'next/head'
import Link from 'next/link'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My blog</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="keywords" content="nextjs, myblog, hunting coder" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <script src='example.js'></script> */}

      <main className={styles.main}>

        <div className={styles.myImgWrap}>
        {/* <Image className={styles.myImg} src="/homeimg.jpg" width={200} height={200}></Image> */}
        <img className={styles.myImg} src="/homeimg.jpg" width={200} height={200} />
        </div>
        <h1 className={styles.title}>
          <span className='mySpan'>&lt;Hunting Coder / &gt;</span>
        </h1>

        <p className={styles.description}>
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:
        </p>

        <div className="blogs">
          <h2>Latest blogs:</h2>
          <div className="blogitem">
            <h3>HOw to learn javascript in 2020</h3>
            <p>javascript is a very popular lanuage. It is simple to use.</p>
            <h3>HOw to learn javascript in 2020</h3>
            <p>javascript is a very popular lanuage. It is simple to use.</p>
            <h3>HOw to learn javascript in 2020</h3>
            <p>javascript is a very popular lanuage. It is simple to use.</p>
          </div>

        </div>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}

        </a>
      </footer>
    </div>
  )
}
