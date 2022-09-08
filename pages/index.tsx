import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import MyHome from "../components/home"
// import '../styles/home.css'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Spelling App</title>
        <meta name="description" content="Spelling app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        
        <MyHome/>
        
      </main>

      <footer >
      
      </footer>
    </div>
  )
}

export default Home
