import Image from "next/legacy/image";
import { useEffect, useState } from 'react';

const { default: Footer } = require('@includes/footer');
const { default: Nav } = require('@includes/nav');

function Pix() {
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    }
  }, [copied]);

  return (
    <div className='flex min-h-[100vh] flex-col justify-between '>
      <Nav allBlack />
      <div className='mx-auto my-[100px] h-full'>
        <h1 className='mb-4 text-3xl font-bold'>Doe OAMa</h1>
        <div className='h-[300px] w-[300px]'>
          <Image
            src='/apoie/qrcode-donation-oama.png'
            layout='responsive'
            width={400}
            height={400}
          />
        </div>

        <div className='mt-4 flex w-full justify-center'>
          <button
            onClick={() => {
              setCopied(true);
              navigator.clipboard.writeText(
                '00020126360014BR.GOV.BCB.PIX0114357135120001805204000053039865802BR5923OAMa - Aves Mantiqueira6011Resende- RJ62140510DOACAOOAMA63046E50'
              );
            }}
            className={`mt-4 w-[200px] rounded-md ${
              copied ? 'bg-green-600' : 'bg-black'
            } px-4 py-2 text-white `}
          >
            {copied ? 'Copiado' : 'Pix Copia e Cola'}
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Pix;
