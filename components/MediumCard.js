import Image from "next/image"

const MediumCard = ({image,title}) => {
  return (
    <div className="cursor-pointer text-white hover:scale-105 transition duration-200 ease-out">
        <div className="relative h-80 w-80">
            <Image src={image} layout="fill" className="rounded-xl"/>
        </div>
        <h3 className="mt-3 text-3xl font-medium">{title}</h3>
    </div>
  )
}

export default MediumCard