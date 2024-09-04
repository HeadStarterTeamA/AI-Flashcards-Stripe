import {NextResponse} from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
const formatAmountForStripe = (amount, currenct) =>{
    return Math.round(amount * 100)
}

export async function GET(req)
{
  const searchParams = req.nextUrl.searchParams
  const session_id = searchParams.get('session_id')

  try{
    const checkoutSession = await stripe.checkout.sessions.retrieve(session_id)
    return NextResponse.json(checkoutSession)
  }
  catch(error){
    console.error("Error retrieving checkout:", error)
    return NextResponse.json({error: {message: error.message}}, {status: 500})
  }
}
export async function POST(req) {
  const { subscriptionType } = await req.json(); // Get the subscription type

    let priceData = {     // Deafult values
        currency: 'usd',
        product_data: {
            name: '',
        },
        unit_amount: 0,
        recurring: {
            interval: 'month',
            interval_count: 1,
        }
    };
    
    // based on pro or basic
    if (subscriptionType === 'pro') {
        priceData.product_data.name = 'Pro Subscription';
        priceData.unit_amount = formatAmountForStripe(10);
    } else if (subscriptionType === 'basic') {
        priceData.product_data.name = 'Basic Subscription';
        priceData.unit_amount = formatAmountForStripe(5);
    }

    const params = {
        mode: 'subscription',
        payment_method_types: ['card'],
        line_items: [
            {
                price_data: priceData,
                quantity: 1,
            },
        ],
        
        success_url: `${req.headers.get("origin")}/result?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.get("origin")}/result?session_id={CHECKOUT_SESSION_ID}`,
      };
      const checkoutSession = await stripe.checkout.sessions.create(params);

      return NextResponse.json(checkoutSession, {
        status: 200,
      })

}