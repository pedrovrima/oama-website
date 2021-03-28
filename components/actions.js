import Image from "next/image";


export default function Actions(){
    return(
        <section class=" py-8">
        <div class="container max-w-4xl mx-auto ">
          <h1 class="w-full text-5xl font-bold leading-tight text-center text-gray-800">
            Ações{" "}
          </h1>
          <div class="w-full mb-4">
            <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>

          <div class="flex md:flex-row-reverse  justify-center items-center   flex-wrap">
            <div class="w-3/5  sm:w-1/3 p-2 sm:p-6">
              <div>
                <Image
                  className="rounded-full border-gray-200 border-8"
                  src="/IMG_6943.jpg"
                  layout="responsive"
                  width={200}
                  objectFit="cover"
                  height={200}
                ></Image>
              </div>
            </div>

            <div class="w-full sm:w-2/3 p-6">
              <h3 class="text-3xl text-justify-center text-gray-800 font-bold leading-none mb-3">
                Ciência
              </h3>
              <p class="text-gray-600 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                <br />
                <br />
                Images from:
                <a
                  class="text-pink-500 underline"
                  href="https://undraw.co/"
                >
                  undraw.co
                </a>
              </p>
            </div>
          </div>
          <div class="flex flex-wrap md:items-center">
            <div class="w-full sm:w-1/3 p-6 mt-6">
              {" "}
              <div>
                <Image
                  className="rounded-full"
                  layout="responsive"
                  src="/Mantiqueira.jpg"
                  width={200}
                  objectFit="cover"
                  height={200}
                ></Image>
              </div>
            </div>
            <div class="w-full sm:w-2/3 p-6 mt-6">
              <div class="align-top text-top">
                <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
                  Conservação{" "}
                </h3>
                <p class="text-gray-600 mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at ipsum eu nunc commodo posuere et sit amet
                  ligula.
                  <br />
                  <br />
                  Images from:
                  <a
                    class="text-pink-500 underline"
                    href="https://undraw.co/"
                  >
                    undraw.co
                  </a>
                </p>
              </div>
            </div>
            <div class="flex md:flex-row-reverse  md:items-center   flex-wrap">
              <div class="w-full sm:w-1/3 p-6 mt-6">
                {" "}
                <div>
                  <Image
                    className="rounded-full"
                    layout="responsive"
                    src="/DSC_0241.JPG"
                    width={200}
                    objectFit="cover"
                    height={200}
                  ></Image>
                </div>
              </div>

              <div class="w-5/6 sm:w-2/3 mt-6 p-6">
                <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
                  Educação e Divulgação Científica
                </h3>
                <p class="text-gray-600 mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at ipsum eu nunc commodo posuere et sit amet
                  ligula.
                  <br />
                  <br />
                  Images from:
                  <a
                    class="text-pink-500 underline"
                    href="https://undraw.co/"
                  >
                    undraw.co
                  </a>
                </p>
              </div>
              <div class="w-full sm:w-1/2 p-6"></div>
            </div>
          </div>
        </div>
      </section>

    )
}