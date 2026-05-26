import Stripe from 'stripe';

export async function POST(req: Request) {
    try {
        const body = await req.json().catch(() => ({}));

        const origin = req.headers.get('origin') || req.headers.get('referer') || 'http://localhost:3000';

        if (!process.env.STRIPE_SECRET_KEY) {
            return new Response(JSON.stringify({ error: 'Missing STRIPE_SECRET_KEY in environment' }), { status: 500 });
        }

        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: '2026-04-22.dahlia' });

        const method = typeof body.method === 'string' ? body.method : 'stripe';

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: { name: body.name || 'Demo Product' },
                        unit_amount: typeof body.unit_amount === 'number' ? body.unit_amount : 2900,
                    },
                    quantity: body.quantity || 1,
                },
            ],
            metadata: {
                payment_method: method,
            },
            success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${origin}/checkout/cancel`,
        });

        return new Response(JSON.stringify({ url: session.url }), { status: 200 });
    } catch (err: any) {
        console.error('Stripe checkout error', err);
        return new Response(JSON.stringify({ error: err.message || 'Server error' }), { status: 500 });
    }
}
