import Image from "next/image"

// To use absolute positioning, make the parent relative

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] md:h-[300px] lg:h-[400px] xl:h-[500px] 2xl:h-[600px]">
        <Image src="https://wallpapercave.com/wp/c6BYCFJ.jpg" layout="fill" objectFit="cover"/>

        <div className="absolute top-1/2 w-full text-center">
            <p className="text-white font-semibold text-2xl md:text-2xl sm:text-lg">Not sure where to go? Perfect.</p>
            <button className="bg-white text-[#C8494D] px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">I am Flexible</button>
        </div>
    </div>
    
  )
}

export default Banner