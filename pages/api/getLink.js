import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_KEY);
export default async function handler(req, res) {
  const { id } = req.body;
  console.log(id);
  const link = await stripe.paymentLinks.create({
    line_items: [
      {
        price: id,
        quantity: 1,
      },
    ],
  });
  console.log(link);
  res.status(200).json(link);
}
