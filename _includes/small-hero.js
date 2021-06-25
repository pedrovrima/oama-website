import Image from "next/image"

export const SmallHero= (props)=>{
  console.log(props)
return(

<div className=" relative hero-small md:hero min-h-1/2">
<div className="pt-32 lg:pb-16 md:pb-16 h-full  justify-items-center items-center">
  <div className="absolute top-0 h-full w-full">
    <Image
      // className="h-32"
      src={`/${props.img_src}`}
      layout="fill"
      //   width={"2000"}
      //   height={"1000"}
      objectFit="cover"
      objectPosition="center"
      priority={true}
    ></Image>
  </div>
</div>
</div>)
}