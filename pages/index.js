import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import LargeCard from '../components/LargeCard'
import MediumCard from '../components/MediumCard'
import SmallCard from '../components/SmallCard'

export default function Home({exploreData,cardsData}) {
  return (
    <div>
      <Head>
        <title>Airbnb: Incredible Places to Stay and Things to Do</title>
      </Head>

      <Header/>
      <Banner/>

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>

        {/* Small Card */}
        <section className='pt-6'>
          <h2 className='text-4xl text-white font-semibold pb-5'>Explore Nearby</h2>

          <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {exploreData?.map(item => (
              <SmallCard key={item.img} image={item.img} location={item.location} distance={item.distance}/>
            ))}
          </div>

        </section>

        {/* Medium Card */}
        <section>
          <h2 className='text-4xl font-semibold py-8 text-white'>Live Anywhere</h2>

          <div className='flex space-x-5 overflow-scroll scrollbar-hide p-3 -ml-3'>
            {cardsData?.map(item => (
              <MediumCard key={item.img} title={item.title} image={item.img}/>
            ))}
          </div>

        </section>

        {/* Large Card */}
        <LargeCard 
          image="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishes curated by airbnb"
          buttonText="Get Inspired"
        />
      </main>
    </div>
  )
}

export async function getStaticProps(){
  const exploreData = await fetch('https://links.papareact.com/pyp').then(res => res.json())

  const cardsData = await fetch('https://links.papareact.com/zp1').then(res => res.json())
  return {
    props:{exploreData,cardsData}
  }
}