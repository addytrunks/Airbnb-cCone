import Image from "next/image"
import {StarIcon} from '@heroicons/react/solid'
import {HeartIcon} from '@heroicons/react/outline'


const InfoCard = ({location,img,title,description,star,price,total}) => {
  return (
    <div className="flex py-7 px-5 border-b-2 border-[#191919] cursor-pointer hover:opacity-90 hover:shadow-lg bg-[#191919] mb-5 rounded-lg hover:scale-95 transform duration-200 ease-out">
        <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
            <Image src={img} layout="fill" objectFit="cover" className="rounded-sm"/> 
        </div>

        <div className="flex flex-col flex-grow pl-5">
            <div className="flex justify-between">
                <p className="text-white">{location}</p>
                <HeartIcon className="h-7 cursor-pointer text-white"/>
            </div>
            <h4 className="text-xl text-white font-medium">{title}</h4>
            <p className="pt-2 text-sm text-gray-400 flex-grow">{description}</p>

            <div className="flex justify-between items-end">
                <p className="flex items-center space-x-1">
                    <StarIcon className="h-5 text-[#C8494D]"/>
                    <span className="text-white font-medium">{star}</span>
                </p>

                <div>
                    <p className="text-white text-lg font-semibold pb-2 lg:text-2xl">{price}</p>
                    <p className="text-white text-right font-extralight">{total}</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default InfoCard