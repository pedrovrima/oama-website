import Nav from '@includes/nav';
import Stripe from 'stripe';
import Image from 'next/image';
import { useState } from 'react';

export const getServerSideProps = async (context) => {
  const stripe = new Stripe(
    'sk_test_51O1HMxHtuWeEBCtmsMlHY7OmbNW5lQK7W6MUmNxGaeQfP6qqP05I4XDnuxktaNx0IacnBkqcpZMFYLRmA8c78Z7i00EyklzL6z'
  );

  //load all products from stripe
  const products = await stripe.products.list();

  //load all prices from stripe
  const prices = await stripe.prices.list();

  //join them
  const fullProduct = products.data.map((product) => {
    return {
      ...product,
      price: prices.data.filter((price) => price.product === product.id),
    };
  });

  return {
    props: {
      products: fullProduct.sort(
        (a, b) => a.price[0].unit_amount - b.price[0].unit_amount
      ),
    },
  };
};

export default function Apoie2(props) {
  const stripe = new Stripe(
    'sk_test_51O1HMxHtuWeEBCtmsMlHY7OmbNW5lQK7W6MUmNxGaeQfP6qqP05I4XDnuxktaNx0IacnBkqcpZMFYLRmA8c78Z7i00EyklzL6z'
  );

  return (
    <>
      <Nav />
      <div className='hero-small md:hero relative min-h-1/2'>
        <div className='h-full items-center justify-items-center pt-32 md:pb-16 lg:pb-16'>
          <div className='absolute top-0 z-50 h-full w-full bg-yellow-900'>
            <Image
              // className="h-32"
              src='/heros/apoie.jpg'
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

      <div className='mx-auto max-w-screen-lg '>
        <div className='flex justify-between'>
          <div>
            <p>Oi</p>
          </div>
          <Billing products={props.products} stripe={stripe} />
        </div>
      </div>
    </>
  );
}

const Billing = ({ products, stripe }) => {
  const [loadingStripe, setLoadingStripe] = useState(false);
  return (
    <div className='relative max-w-2xl bg-yellow-100 px-8 py-12'>
      {loadingStripe && (
        <div className='absolute left-0 top-0 z-50 h-full w-full bg-black opacity-10' />
      )}
      <p className='text-center text-2xl font-bold text-yellow-900'>
        Torne-se um filiado OAMa
      </p>
      <div className='grid grid-cols-2 gap-8'>
        {
          //map all products
          products.map((product) => {
            return (
              <BillingComponent
                setLoading={setLoadingStripe}
                stripe={stripe}
                product={product}
              />
            );
          })
        }
      </div>
      <p className='mt-12 text-center text-2xl font-bold text-yellow-900'>
        Ou faça uma doação pontual
      </p>
    </div>
  );
};

const BillingComponent = ({ product, stripe, setLoading }) => {
  console.log(product);
  let currencyMaker = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: product.price[0].currency,
  });

  const getPayLink = async () =>
    await stripe.paymentLinks.create({
      line_items: [
        {
          price: product.price[0].id,
          quantity: 1,
        },
      ],
    });

  // if (!product.price[0].recurring) {
  //   return <></>;
  // }

  return (
    <div className='flex h-52 w-40 flex-col items-center justify-center'>
      <div
        style={{ backgroundImage: `url(${product.images[0]})` }}
        className='group relative h-40 w-40 cursor-pointer rounded-full border-2 border-solid bg-cover bg-center shadow-yellow-500 transition-all duration-200 ease-in-out hover:border-yellow-200 hover:shadow-2xl'
      >
        <a
          onClick={async () => {
            setLoading(true);
            const payLink = await getPayLink();

            window.location.href = `${payLink.url}?locale=pt`;
          }}
          className='absolute -bottom-6 w-40 translate-x-1/2 rounded-full bg-yellow-400 px-4 py-2 text-yellow-900 shadow-xl transition-all duration-200 ease-in-out group-hover:bg-yellow-300 group-hover:text-yellow-900 group-hover:shadow-2xl'
        >
          <p className='text-md text-center font-bold '>{product.name}</p>
          <p className='text-md text-center'>
            {currencyMaker.format(product.price[0].unit_amount / 100)} / mês
          </p>
        </a>
      </div>
    </div>
  );
};
