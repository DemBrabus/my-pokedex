import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pokedex!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          The Making of a <a href="https://nextjs.org" target="_blank" >Next..</a> Level Pokedex!
        </h1>

        <p className={styles.description}>
          Next.js, Styled Components, Pokedex API and Much More!
        </p>

        <div>
          <p>Preact has {props.stars} ⭐</p>

        </div>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://api.github.com/repos/developit/preact')
  const json = await res.json()

  return {
    props: {
      stars: json.stargazers_count,
    },
  }
}

export default Home;
