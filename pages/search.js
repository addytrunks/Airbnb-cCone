import { useRouter } from 'next/router'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import moment from 'moment'

const Search = () => {

    const router = useRouter()
    const {endDate,location,startDate,noOfGuests} = router.query


    // Formatting the date as it is in the form of ISOS 
    const formattedStartDate = moment(startDate).format('Do MMMM yy')
    const formattedEndDate = moment(endDate).format('Do MMMM yy')
    const range = `${formattedStartDate} - ${formattedEndDate}`

  return (
    <div>
        <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`}/>

        <main className='flex'>
            <section className='flex-grow pt-14 px-6'>
                <p className='text-sm text-white'>300+Stays for {noOfGuests} number of Guests</p>
                <h1 className='text-3xl font-semibold mt-2 mb-6 text-white'>Stays in {location}</h1>

                <div className='hidden lg:inline-flex mb-5 whitespace-nowrap space-x-4'>
                    <p className='filter__button'>Cancellation Flexibility</p>
                    <p className='filter__button'>Types of Place</p>
                    <p className='filter__button'>Price</p>
                    <p className='filter__button'>Rooms and Beds</p>
                    <p className='filter__button'>More Filters</p>
                </div>
            </section>
            
        </main>

        <Footer/>
    </div>
  )
}

export default Search