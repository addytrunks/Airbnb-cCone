import Image from "next/image"
import {SearchIcon,GlobeAltIcon,MenuIcon,UserCircleIcon,UserIcon} from '@heroicons/react/solid'

const Header = () => {
  return (
    <header className="mx-auto sticky top-0 z-50 grid grid-cols-3 bg-[#191919] p-5 shadow-md md:px-10">

        {/* Left */}
        <div className="relative flex items-center h-10 cursor-pointer my-auto">
            <Image src="https://links.papareact.com/qd3" layout="fill" objectFit="contain" objectPosition="left"/>
        </div>

        {/* Middle */}
        <div className="flex items-center md:border-2 md:border-gray-600 rounded-full py-2">
            <input type="text" placeholder="Start your search" className="flex-grow text-sm font-medium text-white md:shadow-sm  pl-5 bg-transparent outline-none"/>
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

    </header>
  )
}

export default Header