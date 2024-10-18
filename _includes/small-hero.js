import Image from 'next/legacy/image';

export const SmallHero = (props) => {
  console.log(props);
  return (
    <div className='hero-small md:hero relative min-h-1/2'>
      <div className='h-full items-center justify-items-center pt-32  md:pb-16 lg:pb-16'>
        <div className='absolute top-0 h-full w-full'>
          <Image
            // className="h-32"
            src={`${props.img_src.includes('http') ? props.img_src : '/' + props.img_src}`}
            layout='fill'
            //   width={"2000"}
            //   height={"1000"}
            objectFit='cover'
            objectPosition='center'
            priority={true}
          ></Image>
        </div>
      </div>
    </div>
  );
};
