import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Airbnb: Incredible Places to Stay and Things to Do</title>
      </Head>

      <Header/>
      <Banner/>
    </div>
  )
}
