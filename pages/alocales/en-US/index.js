import Nav from "@includes/nav";
import Image from "next/legacy/image";

export default function IndexPage() {
  return (
    <>
      {/* <div className="bg-gradient-to-bl from-blue-900 to-yellow-500 relative "> */}
      <Nav />

      <div className="md:grid grid-cols-12 gap-2 md:m-4  mb-36 md:mb-24 mt-8 grid-rows-6 md:p-12 md:min-h-3/4">
        {/* <div className="col-start-1 col-span-7 relative   row-start-1 row-span-2 ">
              {" "}
              <Image
                className="rounded-2xl"
                layout="fill"
                src="/Mantiqueira.jpg"
                alt="Picture of the author"
                // width={2500}
                // height={4500}
                objectFit={"cover"}
              ></Image>
            </div> */}

        <div className="flex flex-col items-center col-start-1 col-span-12 md:col-span-7 justify-center row-start-1 row-span-4 md:row-span-6">
          <div className="md:hidden">
            <Image src="/logo.png" width={"200"} height={"200"}></Image>
          </div>

          <h1 className="text-4xl px-2 md:text-7xl mt-4 text-center text-yellow-50 font-montserrat font-extrabold">
Science based Conservation          </h1>
          <h2 className="text-lg md:text-xl px-4 md: mt-4 text-center text-yellow-50 font-semibold">
          Generating data and engagement for the conservation of Atlantic Forest birds          </h2>
          <a href="https://www.paypal.com/donate?hosted_button_id=FXVCKDBL68Q4U&source=url" target="_blank">
          <button className="border-2 border-solid border-yellow-50 font-semibold rounded-3xl bg-yellow-50 text-yellow-600 shadow-xl p-2 px-4 mt-8">
            Support
          </button>
          </a>
        </div>

        <div className="hidden md:block col-start-1 col-span-12 row-start-5 row-span-2 md:col-start-8 md:col-span-2 relative   md:row-start-1 md:row-span-6 ">
          {" "}
          <Image
            className="rounded-2xl"
            layout="fill"
            src="/IMG_6943.jpg"
            alt="Picture of the author"
            // width={2500}
            // height={4500}
            objectFit={"cover"}
          ></Image>
        </div>

        <div className="hidden md:block relative col-start-10 col-span-3 row-start-3 row-span-4">
          {" "}
          <Image
            className="rounded-2xl"
            layout="fill"
            src="/sobre_pic.jpg"
            alt="Picture of the author"
            // width={1500}
            // height={2500}
            objectFit={"cover"}
          ></Image>
        </div>
        <div className="hidden md:block relative col-start-10 col-span-3 row-start-1 row-span-2">
          {" "}
          <Image
            className="rounded-2xl"
            layout="fill"
            src="/DSC_0241.JPG"
            alt="Picture of the author"
            // width={1500}
            // height={1500}
            objectFit={"cover"}
          ></Image>
        </div>
      </div>
      <div>
        <div
          className="px-6 md:px-48 
          text-yellow-100  z-0 mb-24"
        >
          <div className="float-right m-8 mt-0 hidden md:block">
            <Image
              className="rounded-2xl float-right"
              // layout="fixed"
              src="/_FR_7083.jpg"
              alt="Picture of the author"
              width={300}
              height={400}
              objectFit={"cover"}
            ></Image>
          </div>

          <div className=" m-8 mt-0 md:hidden flex justify-center">
            <Image
              className="rounded-2xl "
              // layout="fixed"
              src="/_FR_7083.jpg"
              alt="Picture of the author"
              width={350}
              height={210}
              objectFit={"cover"}
            ></Image>
          </div>
          <p
            className="text-lg 
          md:text-xl pt-8 font-extrabold mb-6 indent-2  "
          >

OAMa – The Mantiqueira Bird Observatory is an independent nonprofit organization for the study and conservation of Atlantic Forest birds, especially in the Mantiqueira mountain range, Brazil.

          </p>
          <p className="text-md md:text-lg mb-6 indent-2">
 Our main goals are to help to fill the gaps on brazilian ornithology and to promote the connection between science, people and conservation. We believe that the best way to plan and do biodiversity conservation is under the light of knowledge. Scientific research is the tool we use to seek and promote this knowledge. 
            </p>
          <p className="text-md md:text-lg mb-3 indent-2">
You can be part and support our team as an affiliated, volunteering, helping to share our work or even making an any time any value donation.         

          </p>
        </div>

        <div className="text-center mb-24 mt-36">
          <p className="text-2xl font-montserrat  text-yellow-50">
Our new website is under construction.
          </p>

          <p className="text-lg font-montserrat  text-yellow-50">
            Contact and more information
          </p>

          <div className="flex justify-center mt-4"> 
          <a target="_blank" href="http://facebook.com/oamantiqueira" >          <Image
              className=""
              // layout="fixed"
              src="/facebook.svg"
              alt="Picture of the author"
              width={30}
              height={30}
              objectFit={"cover"}
            ></Image>
            </a>

            <a target="_blank" href="http://instagram.com/oamantiqueira" className="ml-6">
             <Image
              className=""
              // layout="fixed"
              src="/instagram.svg"
              alt="Picture of the author"
              width={30}
              height={30}
              objectFit={"cover"}
            ></Image>
            </a>

            <a className="ml-6"
            href="mailto:someone@example.com"
                        >
             <Image
              className=""
              
              // layout="fixed"
              src="/email.svg"
              alt="Picture of the author"
              width={30}
              height={30}
              objectFit={"cover"}
            ></Image>
            </a>

          </div>
        </div>
      </div>
      {/* </div> */}
      {/* </div> */}
    </>
  );
}
