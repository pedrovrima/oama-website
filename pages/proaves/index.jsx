import Nav from '@includes/nav';
import Image from 'next/image';

export default function ProAves() {
  return (
    <div>
      <Nav />
      <div className='relative h-[99vh] overflow-hidden'>
        <div className=' absolute left-[120px] top-[100px] z-50'>
          <Image height={250} width={250} src={'/proaves2/logo-pro-aves.png'} />
        </div>
        <Image
          layout='fill'
          objectFit='cover'
          className=' scale-x-[-1]'
          src={'/proaves2/cover_pro_aves.jpeg'}
        />
        <div className=' absolute -bottom-[100px] -left-[160px] opacity-40'>
          <Image height={500} width={500} src={'/proaves2/blob.png'} />
        </div>
      </div>
      <div className='relative h-[900px] overflow-x-clip '>
        <div
          className="
        absolute -top-[105px]
        left-[90px] z-50 h-[1100px] w-[500px] rounded-[50px]  bg-[url('/proaves2/pattern3.png')] bg-[length:97px] px-[59px] pt-[35px] drop-shadow-[10px_10px_rgba(148,114,35,0.5)]"
        >
          <h1 className='font-oswald mb-[56px] text-center text-[30px] font-[300] text-white'>
            TORNE SUA VIDA PRÓ-AVES
          </h1>
          <p className='text-[ #1E1702] mb-8 font-montserrat text-[16px] font-[400]'>
            Ano após ano, populações de aves sofrem impactos diretos e indiretos
            de ações humanas. Esse efeito negativo de nossas ações sobre a
            biodiversidade pode ser associado ao crescimento populacional
            humano, consumo excessivo de recursos e materiais, a expansão das
            cidades e aos avanços tecnológicos que inserem novos hábitos,
            costumes e alterações na paisagem. Embora grande parte destas ações
            sejam de caráter coletivo,{' '}
            <span className='font-montserratsemi text-white'>
              algumas mudanças nos hábitos individuais de cada pessoa podem
              impedir a morte de centenas de aves.
            </span>
          </p>
          <p className='text-[ #1E1702] mb-8 font-montserrat text-[16px] font-[400]'>
            O Observatório de Aves da Mantiqueira, OAMa, acredita que todos
            podemos associar ao seu modo de vida algumas ações que favoreçam a
            conservação das aves e seus habitats e por isso realiza atividades
            para fomentar ações Pró-Aves na vida e no dia-a-dia de todo
            brasileiro.
          </p>
          <p className='text-[ #1E1702] mb-8 font-montserrat text-[16px] font-[400]'>
            Essa campanha tem como objetivo apresentar alguns dos principais
            problemas que afetam as aves e que podem ser mitigados com ações
            simples de cada pessoa. Aqui você vai conhecer sobre o problema da
            caça e tráfico de animais silvestres, sobre o inimigo invisível que
            gera a morte por colisão das aves, sobre a problemática das
            poluições luminosa e sonora e outros.
          </p>
          <p className='font-montserratsemi text-white'>
            A mudança precisa de todos nós para acontecer!
          </p>
        </div>
        <div className=' absolute -bottom-[100px] -right-[120px] z-50 opacity-40'>
          <Image
            className='scale-x-[-1]'
            height={400}
            width={400}
            src={'/proaves2/blob.png'}
          />
        </div>
        <div className=' absolute right-[200px] top-0 z-50'>
          <div className='h-[160px] w-[3px] bg-[#CF3C3C]' />
        </div>
        <div className=' absolute right-[155px] top-[100px] z-50'>
          <Image height={100} width={100} src={'/proaves2/t-red.png'} />
        </div>
        <Image
          layout='fill'
          objectFit='cover'
          className=''
          src={'/proaves2/bg2.jpeg'}
        />
      </div>
      <div className="relative z-[99] h-screen bg-[url('/proaves2/pattern3.png')] bg-[length:97px]"></div>
    </div>
  );
}
