import express from 'express';
import stripe from '../utils/stripeClient.mjs';

const router = express.Router();


router.post('/create-checkout-session', async (req, res) => {
  try {
    const { allProducts } = req.body;

    if (!allProducts?.name || !allProducts?.price) {
      return res.status(400).send({ message: 'Invalid product data' });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: allProducts.name,
              description: allProducts.description || '',
            },
            unit_amount: allProducts.price * 100, 
          },
          quantity: allProducts.quantity || 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.CLIENT_URL}/success`,
      cancel_url: `${process.env.CLIENT_URL}/cancel`,
    });

    res.send({ url: session.url });
  } catch (error) {
    res.status(500).send({
      message: 'Stripe checkout session creation failed',
      error: error.message,
    });
  }
});

export default router;