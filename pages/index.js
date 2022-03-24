import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import SmallCard from '../components/SmallCard'

export default function Home({exploreData}) {
  return (
    <div>
      <Head>
        <title>Airbnb: Incredible Places to Stay and Things to Do</title>
      </Head>

      <Header/>
      <Banner/>

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl text-white font-semibold pb-5'>Explore Nearby</h2>

          <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {exploreData?.map(item => (
              <SmallCard key={item.img} image={item.img} location={item.location} distance={item.distance}/>
            ))}
          </div>

        </section>
      </main>
    </div>
  )
}

export async function getStaticProps(){
  const exploreData = await fetch('https://links.papareact.com/pyp').then(res => res.json())
  return {
    props:{exploreData}
  }
}