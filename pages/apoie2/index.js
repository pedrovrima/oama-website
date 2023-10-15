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
      <div className='relative min-h-1/2'>
        <div className='h-full items-center justify-items-center pt-32 md:pb-16 lg:pb-16'>
          <div className='absolute top-0 flex h-full w-full items-end bg-yellow-900 p-12'>
            <h1 className='w-full text-center text-6xl font-bold text-yellow-200'>
              Doe
            </h1>
          </div>
        </div>
      </div>

      <div className='mx-auto max-w-screen-lg '>
        <div className='flex justify-between gap-8'>
          <div className='py-4'>
            <P>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              malesuada ornare justo sit amet dictum. Fusce sagittis commodo
              lorem vel tempus. Aliquam nisl mi, facilisis sed diam sit amet,
              laoreet viverra ante. Ut porttitor eu justo vel tristique. Vivamus
              sapien nulla, fringilla auctor neque in, porttitor ultrices mi.
              Fusce fermentum malesuada magna in pulvinar. Duis odio est,
              maximus sed mauris sed, viverra pellentesque nisl. Integer quis
              eros erat. In fermentum, risus non lacinia faucibus, enim dolor
              ullamcorper risus, eget bibendum nisl lacus sed magna. Quisque
              lectus purus, volutpat vitae posuere vitae, aliquet a nibh. Nullam
              tempor erat urna, vitae sagittis lorem egestas aliquam. Proin a
              dolor id justo bibendum ullamcorper vitae vitae diam. Suspendisse
              potenti. Nullam sit amet mollis erat.
            </P>
            <P>
              Phasellus mollis volutpat enim. Morbi tempus elit sit amet lacus
              iaculis tincidunt. In venenatis odio sed ante sollicitudin auctor.
              Cras euismod nibh fringilla lorem molestie sagittis. Praesent in
              pulvinar sem. Nunc aliquet non ex sit amet tristique. Quisque in
              efficitur purus, quis mattis urna. Nam vitae hendrerit risus.
              Proin elementum viverra consequat. Mauris eget ex a metus dictum
              convallis. Integer eu sodales neque.
            </P>
            <P>
              Cras felis leo, aliquam vel rutrum vel, dignissim vel felis.
              Suspendisse sollicitudin mauris quis risus hendrerit malesuada.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Etiam quam quam, gravida sed
              sagittis non, pharetra non nibh. Maecenas ut placerat enim.
              Praesent tempor nibh ac nunc iaculis ultricies. In faucibus vel
              ligula laoreet interdum. Ut convallis vestibulum nulla sit amet
              iaculis. Nullam orci nunc, lacinia eget dapibus sit amet,
              consequat sit amet lectus. Etiam gravida lorem ante, et volutpat
              odio pretium ac. Sed nec diam feugiat, vestibulum eros vitae,
              luctus est. Proin interdum, dui et lacinia finibus, mi justo
              bibendum dolor, vitae vehicula sem tellus vitae diam. Mauris vel
              massa eget metus malesuada aliquam. Duis laoreet hendrerit nulla,
              id ornare augue elementum ut. Aliquam bibendum euismod mi, et
              venenatis mi egestas non. Maecenas eget nibh gravida, euismod
              mauris quis, imperdiet nisi.
            </P>
            <P>
              Vivamus fermentum lectus a mollis aliquam. Nullam id ornare purus,
              vitae faucibus dolor. Vivamus id ipsum nec libero auctor gravida
              eget sed nibh. Pellentesque placerat mollis metus vel accumsan.
              Suspendisse tempor maximus vehicula. Suspendisse facilisis sem
              nisi, vitae lobortis nunc iaculis at. Integer elementum diam non
              purus feugiat euismod. Duis tincidunt justo at mi aliquet, quis
              tempus mi rhoncus. Nullam eget tempor elit. Phasellus eu magna
              turpis. Maecenas sollicitudin, ex nec condimentum convallis, ipsum
              massa tempus dolor, sit amet malesuada ante augue a mi. Mauris
              posuere nulla at eros consectetur efficitur. Nam pellentesque,
              augue in pellentesque varius, eros sem bibendum justo, a tincidunt
              enim ex non mi. Maecenas rutrum finibus suscipit. Nam vel arcu
              elit.
            </P>
            <P>
              Phasellus consectetur nec mauris vitae tempus. Morbi gravida
              suscipit orci id placerat. Cras ac tortor laoreet, suscipit nisl
              at, malesuada nibh. Suspendisse nec scelerisque orci. Nunc pretium
              imperdiet erat ac tincidunt. Integer non massa eget ante laoreet
              cursus. Nulla imperdiet aliquet imperdiet. Sed at nulla porta,
              auctor sapien id, semper massa. Aenean dui lacus, suscipit
              volutpat tempor sed, porttitor ut sapien. Vestibulum nisl tellus,
              fringilla quis ante non, consectetur convallis massa. Vestibulum
              quis sem at dui porta convallis. Praesent feugiat neque eget
              ligula porttitor, sit amet aliquam tortor vestibulum. Pellentesque
              euismod felis eu libero mollis porta.
            </P>
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
    <div className='relative h-fit min-w-fit bg-yellow-100 px-8 py-12'>
      {loadingStripe && (
        <div className='absolute left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black opacity-80'>
          <div className='h-20 w-20 animate-spin rounded-full border-8 border-t-8 border-gray-300 border-t-slate-300' />
        </div>
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

  if (!product.price[0].recurring) {
    return <></>;
  }

  return (
    <div className='flex h-52 w-40 flex-col items-center justify-center'>
      <div
        onClick={async () => {
          setLoading(true);
          const payLink = await getPayLink();

          window.location.href = `${payLink.url}?locale=pt`;
        }}
        style={{ backgroundImage: `url(${product.images[0]})` }}
        className='group relative h-40 w-40 cursor-pointer rounded-full border-2 border-solid bg-cover bg-center shadow-yellow-500 transition-all duration-200 ease-in-out hover:border-yellow-200 hover:shadow-2xl'
      >
        <a className='absolute -bottom-6 w-40 rounded-full bg-yellow-400 px-4 py-2 text-yellow-900 shadow-xl transition-all duration-200 ease-in-out group-hover:bg-yellow-300 group-hover:text-yellow-900 group-hover:shadow-2xl'>
          <p className='text-md text-center font-bold '>{product.name}</p>
          <p className='text-md text-center'>
            {currencyMaker.format(product.price[0].unit_amount / 100)} / mês
          </p>
        </a>
      </div>
    </div>
  );
};

const P = ({ children }) => {
  return <p className='mb-2 px-8 text-gray-600 md:px-0'>{children}</p>;
};
