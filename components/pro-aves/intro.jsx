import Fig from "./image"
import Image from "next/image"

const imageGrid = [{name:"Colisão de aves com vidros",fig:7,src:"colisao.pdf"
},{name:"Poluição sonora e seus impactos na avifauna",fig:8,src:"sonora.pdf"},
{name:"Poluição luminosa e seus impactos na avifauna",fig:9,src:"luminosa.pdf"},
{name:"Predação de aves por animais domésticos",fig:10,src:"predacao.pdf"},
{name:"Comedouros e bebedouros",fig:11,src:"comedouro.pdf"},
{name:"Engaiolamento e tráfico",fig:12,src:"engaiolamento.pdf"}]

export default function Intro() {

    return (
        <>
            <div className="px-6 mb-24 text-gray-600">
                <p className="mb-4">Ano após ano, populações de aves sofrem impactos diretos e indiretos de ações humanas. Esse efeito negativo de nossas ações sobre a biodiversidade pode ser associado ao crescimento populacional humano, consumo excessivo de recursos e materiais, a expansão das cidades e aos avanços tecnológicos que inserem novos hábitos, costumes e alterações na paisagem. Embora grande parte destas ações sejam de caráter coletivo, <span className="font-bold">algumas mudanças nos hábitos individuais de cada pessoa podem impedir a morte de centenas de aves</span>.</p>
                <p className="mb-4">O Observatório de Aves da Mantiqueira, OAMa, acredita que todos podemos associar ao seu modo de vida algumas ações que favoreçam a conservação das aves e seus habitats e por isso realiza atividades para fomentar ações Pró-Aves na vida e no dia-a-dia de todo brasileiro.</p>
                <p className="mb-4">Essa campanha tem como objetivo apresentar alguns dos principais problemas que afetam as aves e que podem ser mitigados com ações simples de cada pessoa. Aqui você vai conhecer sobre o problema da caça e tráfico de animais silvestres, sobre o inimigo invisível que gera a morte por colisão das aves, sobre a problemática das poluições luminosa e sonora e outros.</p>
                <p className="mb-4">A mudança precisa de todos nós para acontecer!</p>
            </div>
            <div className="px-6 text-gray-600">
                <h2 className="font-bold text-gray-800 text-3xl mb-6">Por que ser pró-aves?</h2>
                <Fig section="intro" number={2} legend={
                    <p>Tiê-de-topete <span className="italic">(Trichothraupis melanops)</span>, ave de distribuição neotropical. Ocorre apenas na encosta leste dos Andes, do norte do Peru ao extremo noroeste da Argentina, bem como na Mata Atlântica, onde está inteiramente confinada ao sudeste do Brasil. Autoria: Birds Atlantic.
                    </p>
                }></Fig>
                <p className="mb-4">A região neotropical é destaque quando se trata da diversidade de aves, uma vez que abriga quase metade de todas as espécies da avifauna do planeta.</p>

                <Fig section="intro" number={3} size={"large"} legend={
                    <p>Número total de espécies de aves, espécies endêmicas, ameaçadas e extintas por país de acordo com o ranking mundial de espécies<sup>1, 2</sup>.

                    </p>
                }></Fig>
                <p className="mb-4">Atualmente, <span className="font-bold">13% das espécies de aves estão sofrendo com algum grau de ameaça<sup>4</sup></span> e, se nada for feito, esse número tende a aumentar ainda mais. Dados da América do Norte demonstram que os Estados Unidos e o Canadá perderam quase três bilhões de aves desde a década de 19705, número equivalente a 15 vezes a população de brasileiros. <span className="font-bold">Há uma urgente e já antiga necessidade de aprimoramento na tomada de ações de conservação e educação</span>, a fim de englobar gestores, pesquisadores e, sobretudo, a população em geral<sup>3</sup>.  </p>
                <h3 className="font-bold text-gray-800 text-xl mb-4 mt-12">Para algumas espécies, as estratégias de conservação nunca chegam</h3>
                <p className="mb-4">Infelizmente, para algumas espécies, os esforços de conservação chegam tarde demais ou, pelo menos, em um ritmo mais vagaroso do que os avanços das ações antrópicas deletérias. O gritador-do-nordeste (<span className="italic">Cichlocolaptes mazarbarnetti</span>), espécie endêmica da Mata Atlântica do Nordeste, é apenas um dos vários exemplos de espécies que perdemos para sempre.</p>
                <Fig section="intro" number={4} legend={
                    <p>Exemplar de um jovem gritador-do-nordeste <span className="italic">(Cichlocolaptes mazarbarnetti)</span> localizado no Museu de Zoologia da USP – MZUSP<sup>6</sup>.
                    </p>
                }></Fig>
                <p className="mb-4">E não se trata de um caso isolado! Considerando apenas o domínio de Mata Atlântica, 104 espécies estão listadas como ameaçadas de extinção<sub>7</sub> e mesmo  aves não classificadas como ameaçadas podem estar vivenciando um declínio populacional, como o pica-pau-de-cabeça-amarela (<span className="italic">Celeus flavescens</span>), para citar apenas um exemplo<sup>8</sup>. Hoje, indivíduos de algumas espécies sobrevivem apenas em populações cativas em centros de manejo e conservação, onde são utilizadas estratégias de manejo, reabilitação e reprodução a fim de garantir a sobrevivência e a reintrodução futura na natureza.</p>

                <Fig section="intro" number={5} size="large" legend={
                    <p>Algumas espécies extintas na natureza (EW) ou completamente (EX) no Brasil e as principais causas de declínio de suas populações<sup>4</sup>.
                    </p>
                }></Fig>

                <h3 className="font-bold text-gray-800 text-xl mb-4 mt-12">Nosso papel e responsabilidade na conservação</h3>
                <p className="mb-4">A perda desses animais já é considerada um infortúnio pelo mero valor intrínseco de cada ser vivo. No entanto, a diminuição das populações de aves em qualquer local será seguida pelo declínio nos serviços ecossistêmicos que elas realizam<sup>9</sup>. Isso significa que, embora seja difícil estimar exatamente as consequências que a ausência de algumas aves terão nos ecossistemas, é possível inferir que processos ecológicos importantes para a manutenção da biodiversidade, como a dispersão de sementes, a polinização e o controle de insetos, serão afetados.</p>
                <p className="mb-4">Nós temos uma responsabilidade maior do que podemos imaginar no processo de perda dessa biodiversidade, uma vez que nosso modo de vida interfere diretamente na existência e resistência de tudo o que tem vida ao nosso redor. Querendo ou não, fazemos parte de um <span className="italic">(eco)sistema</span> onde todos os seres ali presentes interagem entre si para que “a natureza siga o seu fluxo”. Qualquer interferência nesse sistema, como a introdução de animais domésticos, o uso indiscriminado de luzes artificiais ou mesmo vidros em construções, gera consequências. Nesse sentido, ações individuais e culturalmente vigentes podem alterar gradativamente o comportamento e a dinâmica biológica das aves silvestres em escala local. De modo indireto, tais efeitos se prolongam sobre a manutenção da biodiversidade, uma vez que as aves interagem com outros organismos, como as plantas, por exemplo.<sup>10</sup></p>
                <p className="mb-4">Mas não precisamos ser vilões nessa história: é neste cenário que surge a necessidade de tornar o mundo um lugar mais amigável para as aves, e foi pensando nisso que a coalizão Bird Friendly surgiu <a className="text-yellow-500 underline " target={"_blank"} href="/publicacoes/files/BF Coalition Brochure Traduzido.pdf">(baixar PDF)</a>.                </p>

                <Fig section="intro" number={6} ></Fig>

                <h3 className="font-bold text-gray-800 text-xl mb-4 mt-12">Coalizão Bird Friendly</h3>

                <p className="mb-4">A coalizão Bird Friendly é uma rede diversificada de organizações, instituições e indivíduos comprometidos em apoiar e inovar as abordagens de conservação de aves em diversos setores. A coalizão enxerga no horizonte um futuro no qual todos que compõem a sociedade – indústrias, governos e pessoas em geral – possam ser “Amigos das Aves”. Essa coalizão atua para integrar, orientar e ampliar iniciativas que prezam pela conservação de aves nativas, com foco no hemisfério ocidental.</p>
                <p className="mb-4">O Observatório de Aves da Mantiqueira faz parte desta coalizão desde 2021, com a missão de incentivar organizações e pessoas como você a empregar, no dia a dia, ações criativas e eficazes que promovam a conservação das espécies de aves e seus habitats. Vamos lhe mostrar que você pode gerar impactos positivos na biodiversidade que visita, em sua casa, vizinhança ou trabalho. Listamos abaixo alguns temas urgentes que precisam do apoio e envolvimento do cidadão e da sociedade no Brasil para a promoção da conservação das aves.</p>


                <div
                    className="grid sm:grid-cols-3"
                >
                    {imageGrid.map(imgs=>{
                        return <ImageGrid {...imgs} />
                    })}


                </div>


            </div>

        </>
    )


}


const ImageGrid = (props)=>{


    const { fig, legend, src, name } = props
    const image = require(`public/proaves/intro/fig${fig}.jpg`)

    return     <a target="_blank" href={`/publicacoes/files/${src}`} className="mb-6">
    <div  className={` relative h-48 w-48"}`}>
            <Image      objectFit="contain"  layout="fill"    src={image} />
        </div>

        <legend className="text-gray-900 font-bold text-md text-center mt-4">{name}</legend>

    </a>

}