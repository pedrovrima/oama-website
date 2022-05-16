import Trans from 'next-translate/Trans'


export default function About(props) {
  const {t} = props
  return (
    <section class=" py-8">
      <div class="container max-w-4xl mx-auto ">
        <h1 class="w-full text-5xl font-bold leading-tight text-center text-gray-800">
          {t("aboutTitle")}{" "}
        </h1>
        <div class="w-full mb-4">
          <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>

        <p className="text-gray-600 text-lg mb-8 p-6">
<Trans
  i18nKey="home:aboutText"
  components={[<br/>,<strong></strong>]}
/>

       </p>
      </div>
    </section>
  );
}
