import Fig from "./image"
import Image from "next/image"
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, } from "@reach/accordion";
import "@reach/accordion/styles.css";

import { H3, P } from "./components"



export default function Luminosa() {

    return (
        < AccordionItem >
            <AccordionButton className="border-b-2 border-black w-full  p-6">
                <h2 className="font-bold text-gray-800 text-3xl ">6. O tráfico em números

                </h2>

            </AccordionButton>
            <AccordionPanel>
                <div className="px-6 pt-4 text-gray-600">

                    <Fig section="trafico" number={1} legend={
                        <p>Sagui, primata arborícola do gênero <i>Callithrix</i>, restrito a um recinto gradeado. Autoria: Superintendência do IBAMA no Estado de Goiás.

                        </p>
                    }></Fig>





                    <P>Como a terceira maior atividade ilegal do mundo, atrás apenas do tráfico de armas e de drogas, o tráfico ilegal de animais silvestres envolve uma ampla cadeia de caça, captura e comércio ilegal da vida selvagem. Os animais silvestres são traficados vivos ou mortos, inteiros ou em partes que atendem a diversos propósitos. As demandas do mercado ilegal de animais silvestres variam desde o abastecimento irregular de coleções particulares de zoológicos, aquários e pets de cidadãos comuns; às indústrias da moda e medicina/farmacêutica; a reprodução em criadouros ilegais e legais infratores; o mercado de decoração doméstica; ou o consumo alimentar e rituais religiosos/culturais. Parte da problemática envolvendo essa prática vem da sua valorização, com estimativas que variam entre US$10 bilhões e US$20 bi por ano, o que equivale a, aproximadamente, 5% do tamanho do comércio internacional de drogas<sup>1</sup>. No Brasil, estima-se que esse valor seja de R$2,5 bi por ano <sup>2</sup>. Enquanto isso, o investimento no combate a esse tipo de crime é quase o mínimo.</P>


                    <Fig section="trafico" number={2} legend={
                        <p>Cardeal-do-nordeste <i>(Paroaria dominicana)</i> apreendido dentro de gaiola. Autoria: Superintendência do IBAMA no Estado de Goiás.

                        </p>
                    }></Fig>


                    <P><strong>Os impactos são refletidos em números</strong>, e embora ainda não exista um sistema unificado de cadastro nacional de animais silvestres apreendidos por posse ou tráfico ilegal, decidimos apresentar alguns resultados já publicados. Somente nos anos de 2017-2019, o CPAmb (Comando de Policiamento Ambiental do Estado de São Paulo) apreendeu 82.040 animais advindos do tráfico<sup> 3</sup>. Além disso, os CETAS (Centros de Triagem de Animais Silvestres), administrados pelo IBAMA (Instituto Brasileiro do Meio Ambiente e dos Recursos Naturais) de todo o país, apreenderam mais de 72.000 animais somente no ano de 2018<sup> 3</sup>. Entre 2002 e 2009, foram destinadas aos CETAS de todo o país 250.206 aves, o que representou mais de 80% dos animais recebidos nesse período<sup>4</sup>. Esse impacto recorrente tem como alvo cerca de 295 espécies de aves, a maioria da família Thraupidae <sup>5</sup> entre as quais se destacam as espécies de papa-capim do gênero Sporophila, como o baiano <i>(S. nigricollis)</i> e o bigodinho <i>(S. lineola)</i>, e espécies em perigo de extinção como a arara-azul-de-lear <i>(Anodorhynchus leari)</i>. Embora estejam extintas localmente ou com populações extremamente reduzidas em várias localidades, as aves mais traficadas como o canário-da-terra <i>(Sicalis flaveola),</i> o trinca-ferro <i>(Saltator similis)</i> e o coleirinho <i>(Sporophila caerulescens)</i> <sup>4</sup> não são consideradas ameaçadas de extinção no Brasil. </P>

                    {/* INFOGRÁFICO: série histórica de animais apreendidos e gráfico de nº animais apreendidos por grupo taxonômico */}

                    <H3>Da natureza para o mercado ilegal: captura, rotas e atores do tráfico de aves</H3>

                    <P>No que diz respeito à avifauna, o Brasil possui a segunda maior diversidade de espécies do mundo <sup>6</sup>. Por conta da beleza, cores vibrantes, cantos melodiosos, e, em alguns casos, pela raridade, determinadas aves são bastante visadas na cadeia do tráfico de animais silvestres <sup>5</sup>. O destino final da maioria das aves é o aprisionamento, com o intuito, principalmente, de serem mantidos em gaiolas como animais de estimação. No país, o tráfico de aves se inicia nas zonas rurais, em locais com muitos remanescentes de vegetação nativa e unidades de conservação de onde os animais são capturados ilegalmente com armadilhas alçapão, arapucas e visgo (um tipo de cola) <sup>7,8</sup>. Depois de capturadas, a maioria das aves é repassada a comerciantes, que as vendem em feiras livres locais, ou a intermediários que transportam esses animais para compradores em outras regiões. Em feiras na cidade de Recife, uma das principais rotas do mercado de animais silvestres no país, pesquisadores observaram a venda de 55 espécies da avifauna e estimam que mais de 40.000 aves sejam vendidas anualmente, a preços que variam entre US$ 1.10 a 167.00 por individuo, em um comércio anual que pode chegar a mais de 630 mil dólares por ano!9 Transportados dias a fio em condições precárias, amontoados, sem alimentação, água e submetidas ao estresse. A estimativa é que nove a cada dez animais traficados morram antes mesmo de chegar ao destino final <sup>2</sup>. </P>

                    <P>As rotas do tráfico de animais, normalmente, são as mesmas do contrabando de diversos outros produtos (armas, drogas, álcool, pedras preciosas etc) e são extremamente flexíveis e adaptáveis <sup>2</sup>. Embora seja difícil para as autoridades se certificar da origem geográfica exata dos animais que porventura são apreendidos, estima-se que muitos são provenientes das regiões Norte, Nordeste e Centro-Oeste. No tráfico ilegal doméstico, os animais são enviados para as regiões Sul, Sudeste e partes do Nordeste via transporte rodoviário<sup>4</sup>. O comércio internacional ocorre via estradas, rios e aeroportos, sendo mais frequente regiões de fronteira do Norte, Centro-Oeste e Sul do Brasil4. Entre as localidades mais usadas para o comércio ilegal de animais estão a tríplice fronteira entre Brasil, Colônia e Peru, a fronteira entre Amapá e Guiana Francesa, a região entre Suriname e Brasil, também entre Venezuela e Brasil (principalmente o contrabando de aves canoras), além dos aeroportos de capitais da região amazônica com destino ao mercado europeu <sup>3</sup>. No Sul, a tríplice fronteira Brasil-Argentina-Paraguai é motivo de preocupação, com pressões sobre a fauna nativa na região do extremo oeste paranaense<sup>4</sup>.</P>


                    <Fig section="trafico" number={4} legend={
                        <p>
                            Mapa de áreas-fonte para capturas, rotas terrestres e fluviais e pontos comerciais do tráfico ilegal de animas silvestres no Brasil. Autoria: Superintendência do IBAMA no Estado de Goiás (2021).

                        </p>
                    }></Fig>


                    <P>O tráfico de animais silvestres é adaptável e não segue apenas as “rotas” tradicionais. Recentemente, a operação Delivery do IBAMA indicou que criadores legalizados, registrados no Sispass, poderiam estar colaborando com o tráfico ilegal ao solicitar anilhas para forjar a regularização de aves silvestres traficadas. Outro exemplo de adaptação do tráfico de animais silvestres que ficou evidente durante o período de isolamento social da pandemia de coronavírus foi o comércio pela internet em redes sociais Os pesquisadores estimam que, anualmente, 4 milhões de mensagens contendo uma média de 3,3 anúncios cada, sejam enviadas em grupos online de compradores, isso nos dá uma média de 13.200.000 anúncios de animais silvestres ilegais apenas nos grupos rastreados<sup>10</sup>. Extrapolando aos grupos não rastreados, este número pode ser ainda maior.</P>

                    <H3>Os impactos ambientais do tráfico de animais silvestres</H3>



                    <Fig section="trafico" number={5} legend={
                        <p>
                            Curió <i>(Sporophila angolensis)</i> em vida livre. Autoria: Birds Atlantic.

                        </p>
                    }></Fig>
                    <Fig section="trafico" number={6} legend={
                        <p>
                            Trinca-ferro <i>(Saltator similis)</i> em vida livre. Autoria: Birds Atlantic.

                        </p>
                    }></Fig>
                    <Fig section="trafico" number={7} legend={
                        <p>
                            Azulão <i>(Cyanoloxia brissonii)</i> em vida livre, no Vale do Ribeira, São Paulo. Autoria: Dario Sanches (Creative commons 2.0)

                        </p>
                    }></Fig>






                    <P>Para além do sofrimento contido na captura e aprisionamento ilegal de um animal, o tráfico pode desencadear consequências diversas ao meio ambiente. O efeito direto mais evidente é o declínio populacional e a extinção de aves silvestres nos locais de onde esses animais são capturados. Antes comuns, aves como o curió <i>(Sporophila angolensis)</i>, trinca-ferro <i>(Saltator similis)</i>, azulão <i>(Cyanoloxia brissonii)</i>, papagaio-verdadeiro <i>(Amazona aestiva)</i>, araras e periquitos estão desaparecendo de muitas regiões no Brasil <sup>11</sup>. O papel desempenhado por essas aves nos ecossistemas naturais agora está defasado, significando menos flores polinizadas, sementes dispersadas, e, consequentemente, riscos para a sobrevivência futura de plantas e desbalanceamento no controle populacional de pragas e vetores <sup>12</sup>.</P>
                    <P>Em sentido contrário à remoção, o tráfico ilegal de animais é um dos principais meios de introdução de organismos invasores. O escape acidental ou a soltura irresponsável de pets silvestres exóticos (que não são nativos daquele local) em um país ou região diferente de sua origem natural pode promover alterações biogeográficas de várias espécies13. No território brasileiro esse problema já causa grandes impactos nas populações de espécies nativas e nos ecossistemas, uma vez que altera a estrutura do ambiente, a composição de espécies, compromete o ciclo nutricional e as relações ecológicas entre os seres <sup>2</sup>. Algumas espécies como o galo-de-campina <i>(Paroaria dominicana)</i>; o tico-tico <i>(Zonotrichia capensis)</i>; o canário-verdadeiro-da-terra<i> (Sicalis flaveola)</i>; e o papa-capim-cappucchino <i>(Sporophila nigricollis)</i>, apresentam alto poder de invasão em áreas suscetíveis da América do Sul <sup>13</sup>, e já são observadas em regiões fora de sua área de ocorrência natural.</P>

                    <P>Além disso, uma vez que muitos criadouros não possuem controle sanitário, é muito comum a transmissão de doenças, que afetam tanto aos animais, que morrem antes de chegar ao consumidor, quanto aos humanos, incluindo casos de febre amarela, hepatite, salmonela, etc<sup>2</sup>. Um levantamento do Ministério da Saúde com os dados do RENCTAS (2010),  mostrou uma forte correlação entre os lugares com maior incidência de febre amarela e as rotas de tráfico de animais silvestres. A transmissão de doenças também pode afetar a produção de animais para exportação, que sustenta grande parte da economia brasileira, causando prejuízo de bilhões de reais <sup>2</sup>.</P>

                    <Fig section="trafico" number={2} legend={
                        <p>
                    Sabiá-laranjeira <i>(Turdus rufiventris)</i> apreendido dentro de gaiola e com ferimentos no rosto. Autoria: Superintendência do IBAMA no Estado de Goiás.

                        </p>
                    }></Fig>


                    <P>Outro problema é a destinação dos animais apreendidos. Em geral, o destino dos espécimes é o retorno à natureza por meio da soltura, quando os animais estão aptos para tal. As áreas de soltura de animais reabilitados foram instituídas em 2008 pelo IBAMA, e são os locais definidos como ideais, segundo normas técnicas, sanitárias e de infraestrutura <sup>2</sup>.</P>
                    <P>Entretanto, para serem soltos os animais precisam ter uma saúde perfeita e não possuírem o comportamento de “amansamento” pelo homem <sup>14</sup>. Assim, uma ínfima parcela de animais apreendidos são passíveis de serem devolvidos à natureza. Idealmente, os animais devem ser soltos nas áreas onde foram capturados, mas há uma enorme dificuldade em rastrear seus  locais de origem, fazendo com que sejam soltos em áreas estratégicas que contemplem algum ponto da distribuição histórica da espécie. Essa seria a solução ideal, mas não há conhecimento suficiente sobre a viabilidade a longo prazo dessas áreas em decorrência das alterações ambientais e mudanças climáticas globais<sup>15</sup>. Sem contar que a identificação, a nível de espécie, dos animais precisa ser acurada, a fim de excluir riscos de uma soltura fora de sua área de ocorrência. Além disso, várias espécies apreendidas são oriundas de outros países, nestes casos, não há uma destinação adequada para eles.</P>

                    <H3>Ações para reduzir o tráfico de animais silvestres</H3>

                    Canário-da-terra (Sicalis flaveola) em vida livre. Autoria: Birds Atlantic.
                    O que fazer para diminuir os impactos do tráfico? Como proceder e como destinar os animais apreendidos desta atividade? A regra é clara: enquanto houver mercado para consumir, haverá alguém para vender. Portanto, a primeira e principal medida parte do desincentivo à captura e comercialização destes animais.
                    “Mas eu posso criar animais silvestres em casa?” O site do Ibram dá todas as instruções necessárias a quem deseja criar um animal silvestre de forma correta e legal:
                    Pesquise sobre o animal!
                    Conheça a biologia do animal, seu nome científico, seus comportamentos típicos, alimentação, habitat etc. Essas informações ajudarão tanto na hora da compra, quanto nos cuidados diários do animal.

                    Certifique-se se o animal desejado precisa de autorização!
                    Dependendo da espécie, não há necessidade de autorização para a criação.
                    Consulte o site do Ibram.

                    Seu animal precisa de autorização? Certifique-se de que ele seja legalizado!
                    A única forma de possuir um animal silvestre legalizado é adquiri-lo de um criadouro ou estabelecimento comercial autorizado pelo IBAMA ou pelo órgão estadual/distrital. Consulte-os no site do IBAMA. Após a aquizição, você deve receber uma Nota Fiscal, contendo a espécie e a marcação do animal, e um Certificado de Origem com a mesma espécie e marcação da nota fiscal. Para checar a autenticidade do certificado de origem, consulte o Sistema de Gestão de Fauna (SISFAUNA).

                    Para os tutores que desejam realizar a soltura de animais adquiridos ilegalmente: NÃO O FAÇA SEM PLANEJAMENTO! A soltura deve ser realizada por profissionais instruídos com todo o apoio técnico. Já listamos aqui diversos problemas advindos de uma soltura errônea de um animal fora do ambiente de origem, portanto, uma soltura impensada é uma atitude completamente irresponsável. Leve o animal ao CETAS mais próximo de você! A entrega voluntária de animais traficados não é passível de penalizações ou multas.

                    Nada é mais bonito que a leveza de um voar!
                    Você não precisa aprisionar e engaiolar um animal para apreciá-lo, pelo contrário, onde há amarras, não há amor. Aprecie as aves livres em sua região. Procure por parques urbanos, zonas rurais e trilhas na mata para contemplar a beleza dos animais de vida livre, expressando seus cantos e comportamento da forma mais natural e saudável possível.


                    Papagaios-verdadeiros (Amazona aestiva) em voo. Autoria: Luiz C. Ramassotti.

                    Fique esperto
                    De acordo com o artigo 29 da lei 9.605 de 1998 que trata sobre os Crimes Ambientais, é crime contra a fauna “matar, perseguir, caçar, apanhar, utilizar espécimes da fauna silvestre, nativos ou em rota migratória, sem a devida permissão, licença ou autorização da autoridade competente, ou em desacordo com a obtida”. O Parágrafo 1º destaca ainda que, incorre nas mesmas penas,
                    III- “quem vende, expõe à venda, exporta ou adquire, guarda, tem em cativeiro ou depósito, utiliza ou transporta ovos, larvas ou espécimes da fauna silvestre, nativa ou em rota migratória, bem como produtos e objetos dela oriundos, provenientes de criadouros não autorizados ou sem a devida permissão, licença ou autorização da autoridade competente.”

                    Denuncie!
                    Se você observou ou suspeita de atividades de caça, captura ou comércio ilegal de animais silvestres em algum local próximo, denuncie! Contate diferentes esferas do poder público para garantir alguma ação.


                    IBAMA – denúncias pela Linha Verde (0800 618080), na sede em Brasília ou na superintendência do Estado. Email: linhaverde.sede@ibama.gov.br.
                    Órgão estadual do meio ambiente – procure a regional mais próxima.
                    Polícia Civil – faça a denúncia pelo telefone 147.
                    Polícia Militar – as denúncias podem ser feitas pelo telefone 190.
                    RENCTAS - Rede Nacional Contra o Tráfico de Animais Silvestres - 61 3550-7227.
                    Envie um email para: renctas@renctas.org.br.



                    <Accordion collapsible>
                        <AccordionItem>
                            <AccordionButton>
                                <h3 className="font-bold text-gray-700 text-xl mb-4 mt-12">Referências &#9660;</h3>
                            </AccordionButton>
                            <AccordionPanel>

                                <P>1 CAPALDI, C. A.; DOPKO, R. L.; ZELENSKI, J. M. The relationship between nature connectedness and happiness: a meta-analysis. <strong>Frontiers in psychology</strong>. v. 5, n. 976, 2014. Dispon�vel em: https://doi.org/10.3389/fpsyg.2014.00976.</P>
                                <P>2 BEIL, K.; HANES, D. The influence of urban natural and built environments on  physiological and psychological measures of stress - A pilot study. <strong>International Journal of Environmental Research and Public Health</strong>, v. 10, 2013. Dispon�vel em: https://doi:10.3390/ijerph10041250.</P>
                                <P>3 MARTYN, P.; BRYMER, D. The relationship between nature relatedness and anxiety. <strong>Journal of Health Psychology</strong>, 2014.</P>
                                <P>4 ORAMS, M. B. Feeding wildlife as a tourism attraction: A review of issues and impacts. <strong>Tourism management</strong>, v. 23, n. 3, p. 281-293, 2002.</P>
                                <P>5 CARVALHO, G.; HINGST-ZAHER, E. Observação de aves: torres, abrigos e mobiliário de apoio. Tijd Edições, 2019. 108 p.</P>
                                <P>6 STEVEN, R.; RAKOTOPARE, N.; NEWSOME, D. Avitourism tribes: as diverse as the birds they watch. In: PFORR, C.; DOWLING, R.; VOLGGER, M. (Eds.). <strong>Consumer tribes in tourism</strong>. Singapore: Springer, 2021. p. 101-118.</P>
                                <P>7 COX, D. T. C.; GASTON, K. J. Urban bird feeding: Connecting people with nature. <strong>Plos One</strong>, v. 11, n. 7, 2016. Disponível em: https://doi:10.1371/journal.pone.0158717</P>
                                <P>8 AERTS, R.; HONNAY, O.; VAN NIEUWENHUYSE, A. Biodiversity and human health: mechanisms and evidence of the positive health effects of diversity in nature and green spaces. <strong>British Medical Bulletin</strong>, v. 127, n. 1, p. 5-22, 2018.</P>
                                <P>9 REYNOLDS, S. J. Garden bird feeding: Insights and prospects from a north-south comparison of this global urban phenomenon. <strong>Frontiers in Ecology and Evolution</strong>, v. 5, n. 24, 2017. Disponível em: https://doi: 10.3389/fevo.2017.00024</P>
                                <P>10 DAVIES, Z. G. et al. Households factors influencing participation in bird feeding activity: a national scale analysis. <strong>PloS ONE</strong>, v. 7, n. 6, 2012. Disponível em: https://doi:10.1371/journal.pone.0039692</P>
                                <P>11 LAWSON, B. et al. Health hazards to wild birds and risk factors associated with anthropogenic food provisioning. <strong>Phil. Trans. R. Soc. B.</strong>, v. 373, 2017. Dispon�vel em: http://dx.doi.org/10.1098/rstb.2017.0091</P>
                                <P>12 BARBOSA, K. V. C. et al. The contribution of citizen science to research on migratory and urban birds in Brazil. <strong>Ornithology Research</strong>, v. 29, 2021. Dispon�vel em: https://doi.org/10.1007/s43388-020-00031-0</P>
                                <P>13 ALCANTARA, M. C.; ALEXANDRINO, E. R. Percepções sobre comedouros para aves de vida livre: implicações para o turismo de observação de aves no Brasil. <strong>Revista Brasileira de Ecoturismo</strong>, São Paulo, v. 15, n. 3, 2022. Disponível em: https://doi.org/10.34024/rbecotur.2022.v15.13611</P>
                                <P>14 ALEXANDRINO, E. R. et al. Which birds are Brazilians seeing on urban and non\u2011urban feeders? An analysis based on a collective online birding. <strong>Ornithology Research</strong>, v. 30, 2022. Dispon�vel em: https://doi.org/10.1007/s43388-022-00094-1</P>
                                <P>15 PLUMMER, K. E. et al. Winter food provisioning reduces future breeding performance in a wild bird. <strong>Scientific Reports</strong>, v. 3, n. 2002, 2013. Dispon�vel em: https://doi.org/10.1038/srep02002.</P>
                                <P>16 KUMMER, J. A.; BAYNE, E. M. Bird feeders and their effects on bird-window collisions at residential houses. <strong>Avian Conservation and Ecology</strong>, v. 10, n. 6, 2015. Disponível em: http://dx.doi.org/10.5751/ACE-00787-100206.</P>
                                <P>17 WILCOXEN, T. E. et al. Effects of bird-feeding activities on the health of wild birds. <strong>Conservation Physiology</strong>, v. 3, 2015. Dispon�vel em: https://doi.org/10.1093/conphys/cov058.</P>
                                <P>18 SHUTT, J. D.; LEES, A. C. Killing with kindness: Does widespread generalized provisioning of wildlife help or hinder biodiversity conservation efforts?. <strong>Biological Conservation</strong>, v. 261, n. 109295, 2021. Disponível em: https://doi.org/10.1016/j.biocon.2021.109295.</P>

                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </div >
            </AccordionPanel >
        </AccordionItem >
    )


}

