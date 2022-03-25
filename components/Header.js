import Image from "next/image"
import {SearchIcon,GlobeAltIcon,MenuIcon,UserCircleIcon,UsersIcon} from '@heroicons/react/solid'
import { useState } from "react"
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';


const Header = () => {

  const [searchInput,setSearchInput] = useState('')
  const [startDate,setStartDate] = useState(new Date())
  const [endDate,setEndDate] = useState(addDays(new Date(), 7))
  const [noOfGuests,setNoOfGuests] = useState(1)

  // Parameters for the date picker (MUST)
  const selectionRange = {
    startDate:startDate,
    endDate:endDate,
    key:'selection'
  }

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }

  return (
    <header className="mx-auto sticky top-0 z-50 grid grid-cols-3 bg-[#191919] p-5 shadow-md md:px-10">

        {/* Left */}
        <div className="relative flex items-center h-10 cursor-pointer my-auto">
            <Image src="https://links.papareact.com/qd3" layout="fill" objectFit="contain" objectPosition="left"/>
        </div>

        {/* Middle */}
        <div className="flex items-center md:border-2 md:border-gray-600 rounded-full py-2">
            <input value={searchInput} onChange={(e) => setSearchInput(e.target.value)} type="text" placeholder="Start your search" className="flex-grow text-sm font-medium text-white md:shadow-sm  pl-5 bg-transparent outline-none"/>
            <SearchIcon className="hidden md:inline-flex h-8 bg-[#C8494D] text-white rounded-full p-2 cursor-pointer md:mx-3"/>
        </div>

        {/* Right */}
        <div className="flex space-x-4 items-center justify-end text-gray-500 cursor-pointer">
          <p className="hidden md:inline-flex hover:text-white">Become a host</p>
          <GlobeAltIcon className="h-6 hover:text-white"/>

          <div className="flex items-center space-x-1 border-2 p-2 border-gray-600 hover:border-white hover:text-white rounded-full">
            <MenuIcon className="h-6"/>
            <UserCircleIcon className="h-6"/>
          </div>
        </div>

        {searchInput && (
          <div className="flex bg-[#191919] flex-col col-span-3 mx-auto mt-5 pb-2">
            <DateRangePicker
             ranges={[selectionRange]} 
             r
             minDate={new Date} // Choose the dates in future and NOT past
             rangeColors={['#C8494D']}
             onChange={handleSelect}
             direction="horizontal"
             months={2}
            />

            <div className="flex items-center border-b border-[#191919] mb-4">
              <h2 className="text-2xl flex-grow pl-2 text-white font-semibold mb-2">Number of Guests</h2>
              <UsersIcon className="h-5 text-white"/>
              <input value={noOfGuests} onChange={(e) => setNoOfGuests(e.target.value)} min={1} type="number" max={50} maxLength={2} className="w-12 pl-2 text-lg outline-none text-[#C8494D] bg-transparent" />
            </div>

            <div className="flex">
              <button onClick={() =>setSearchInput('')} className="flex-grow text-white font-medium">Cancel</button>
              <button className="flex-grow text-[#C8494D] font-medium">Search</button>
            </div>

          </div>
          
          
        )}
    </header>
  )
}

export default Header