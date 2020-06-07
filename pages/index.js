import Head from 'next/head'
import { Header, Banner } from "../components"

import "../styles/styles.scss"

export default function Home() {
  return (
    <div className="site__wrapper">
      <Head>
        <title>Future Friends</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <Header />
      <main>

      </main>

    </div>
  )
}
