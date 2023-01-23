import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Bread from './breadcrumb'
import GridMain from './principal'
import FooterGrid from './footer'
import Dark from './darkdiv'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.google.com/specimen/Inter" rel="stylesheet"/>
      </Head>
      <main className={styles.main}>
        < Bread className={styles.bread} />
        < GridMain />
        < FooterGrid />
        < Dark />
      </main>
    </>
  )
}