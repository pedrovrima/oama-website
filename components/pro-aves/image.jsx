import Image from "next/image"

export default function Fig(props ) {
    const { number, legend, section,size, objectFit } = props
    const image = require(`public/proaves/${section}/fig${number}.jpg`)

    return     <div className="mb-6">
    <div  className={` relative w-full ${size==="large"?"h-large":"h-96 sm:h-medium"}`}>
            <Image      objectFit={objectFit||size==="large"?"contain":"cover"}  layout="fill"    src={image} />
        </div>

        <legend className="text-gray-500 text-sm mt-4">{legend}</legend>

    </div>
}