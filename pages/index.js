import { React, useState } from 'react';
import Head from 'next/head'
// import Home from './Home';
import Image from 'next/image';
import HomePageButton from '../src/components/HomePageButton/HomePageButton';
import Modal from '../src/components/Modal/Modal';
import Overlay from '../src/components/Overlay/Overlay';
// import styles from '../styles/Home.module.scss';

export default function Home() {

  const [createAccountModal, showCreateAccountModal] = useState(false);

  const handleCreateAccountModal = (evnt) => {
    evnt.preventDefault();
    showCreateAccountModal(!createAccountModal);
  };

  return (
    <>
      {createAccountModal ? <Overlay click={handleCreateAccountModal} /> : null}
      {createAccountModal ? <Modal /> : null}
      <h1>At the Barbell</h1>
      <main>
        <div className='homepage-cta-container'>
          <HomePageButton
            click={handleCreateAccountModal}
            title="Create an Account" />
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
