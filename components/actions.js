import Image from "next/image";
import Trans from "next-translate/Trans";

export default function Actions(props) {
  const { t } = props;

  return (
    <section class=" py-8">
      <div class="container max-w-4xl mx-auto ">
        <h1 class="w-full text-5xl font-bold leading-tight text-center text-gray-800">
          {t("actionTitle")}{" "}
        </h1>
        <div class="w-full mb-4">
          <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>

        <div class="flex md:flex-row-reverse mb-8  justify-center items-center   flex-wrap">
          <div class="w-3/5  sm:w-1/3 p-2 sm:p-6">
            <div>
              <Image
                className="rounded-full border-gray-200 border-8"
                alt="Anilhamento em ação"
                src="/sobre/anilhamento.jpeg"
                layout="responsive"
                width={200}
                objectFit="cover"
                height={200}
              ></Image>
            </div>
          </div>

          <div class="w-full sm:w-2/3 p-6">
            <h3 class="text-3xl text-justify-center text-gray-800 font-bold leading-none mb-3">
              {t("scienceTitle")}{" "}
            </h3>
            <p class="text-gray-600 ">
              <Trans
                i18nKey="home:scienceText"
                components={[<br />, <strong></strong>]}
              />
            </p>
          </div>
        </div>
        <div class="flex md:flex-row mb-8 justify-center items-center   flex-wrap">
          <div class="w-3/5  sm:w-1/3 p-2 sm:p-6">
            <div>
              <Image
                alt="Serra da Mantiqueira"
                className="rounded-full"
                layout="responsive"
                src="/sobre/Mantiqueira.jpg"
                width={200}
                objectFit="cover"
                height={200}
              ></Image>
            </div>
          </div>

          <div class="w-full sm:w-2/3 p-6">
            <h3 class="text-3xl text-justify-center text-gray-800 font-bold leading-none mb-3">
              {" "}
              {t("conservationTitle")}{" "}
            </h3>
            <p class="text-gray-600 mb-8">
            <Trans
                i18nKey="home:conservationText"
                components={[<br />, <strong></strong>]}
              />

            </p>
          </div>
        </div>
        <div class="flex md:flex-row-reverse  justify-center items-center   flex-wrap">
          <div class="w-3/5  sm:w-1/3 p-2 sm:p-6">
            <div>
              <Image
                alt="Criança olhando por binóculos"
                className="rounded-full"
                layout="responsive"
                src="/sobre/crianca.jpg"
                width={200}
                objectFit="cover"
                height={200}
              ></Image>
            </div>
          </div>

          <div class="w-full sm:w-2/3 p-6">
            <h3 class="text-3xl text-justify-center text-gray-800 font-bold leading-none mb-3">
              {" "}
              {t("educationTitle")}{" "}
            </h3>
            <p class="text-gray-600 mb-8">
            <Trans
                i18nKey="home:educationText"
                components={[<br />, <strong></strong>]}
              />

            </p>
          </div>
          <div class="w-full sm:w-1/2 p-6"></div>
        </div>
      </div>
    </section>
  );
}
