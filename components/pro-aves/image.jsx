import Image from "next/image"

export default function Fig(props ) {
    const { number, legend, section,size, objectFit } = props
    console.log(`public/proaves/${section}/fig${number}.jpg`)
    const image = require(`public/proaves/${section}/fig${number}.jpg`)
    // const image = {default:{height:1,width:1}}
 
    return     <div className="mb-6">
    {/* <div  className={` relative w-full ${size==="large"?"h-large":"h-96 sm:h-medium"}`}> */}
            <Image      objectFit={objectFit||size==="large"?"contain":"cover"}  layout="responsive" height={image.default.height} width={image.default.width}    src={image} />
        {/* </div> */}

        <legend className="text-gray-500 text-sm mt-4">{legend}</legend>

    </div>
}