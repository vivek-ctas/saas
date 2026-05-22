/**
 * Google Pay Checkout Route (Demo)
 *
 * Google Pay on web is handled entirely client-side via the
 * Google Pay JavaScript API (no server-side SDK needed for the token request).
 * However, the payment token must be processed server-side through your
 * payment processor (Stripe, Razorpay, Braintree, etc.).
 *
 * Production integration steps:
 * 1. Add Google Pay button script to your page: https://pay.google.com/gp/p/js/pay.js
 * 2. Create a PaymentsClient and load the payment sheet client-side.
 * 3. On token receipt, POST the encrypted paymentMethodData to THIS endpoint.
 * 4. Process the token through your gateway (example with Stripe below):
 *
 *    import Stripe from "stripe";
 *    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: "2026-04-22.dahlia" });
 *    const paymentIntent = await stripe.paymentIntents.create({
 *      amount: body.unit_amount,
 *      currency: "inr",
 *      payment_method_data: {
 *        type: "card",
 *        card: { token: body.googlePayToken },
 *      },
 *      confirm: true,
 *    });
 *    return new Response(JSON.stringify({ clientSecret: paymentIntent.client_secret }), { status: 200 });
 *
 * Required env vars (gateway-dependent):
 *   STRIPE_SECRET_KEY  OR  RAZORPAY_KEY_SECRET  etc.
 */

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));

    // ── DEMO MODE ──────────────────────────────────────────────────────────
    await new Promise((r) => setTimeout(r, 1000)); // simulate processing

    return new Response(
      JSON.stringify({
        demo: true,
        message: "Google Pay demo payment successful",
        method: "googlepay",
        amount: body.unit_amount,
        txnId: `GPAY-DEMO-${Date.now()}`,
      }),
      { status: 200 }
    );
    // ── END DEMO ───────────────────────────────────────────────────────────
  } catch (err: any) {
    console.error("Google Pay checkout error", err);
    return new Response(
      JSON.stringify({ error: err.message || "Google Pay checkout failed" }),
      { status: 500 }
    );
  }
}
