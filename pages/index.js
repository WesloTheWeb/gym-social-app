import Head from 'next/head'
// import Home from './Home';
import Image from 'next/image';
import HomePageButton from '../src/components/HomePageButton/HomePageButton';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <h1>At the Barbell</h1>
      </Head>
      <main>
        <div className='homepage-cta-container'>
          <HomePageButton title="Create an Account" />
          <HomePageButton
            title="Log in"
            loginButton
          />
        </div>

      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </>
  )
}
