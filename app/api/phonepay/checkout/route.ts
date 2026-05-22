/**
 * PhonePe Checkout Route (Demo)
 *
 * Production integration steps:
 * 1. npm install phonepay-sdk  (or use PhonePe's REST API directly)
 * 2. Set env vars: PHONEPE_MERCHANT_ID, PHONEPE_SALT_KEY, PHONEPE_SALT_INDEX
 * 3. Replace the demo block below with real PhonePe Pay API call:
 *
 *    const payload = {
 *      merchantId: process.env.PHONEPE_MERCHANT_ID,
 *      merchantTransactionId: txnId,
 *      merchantUserId: "MUID" + Date.now(),
 *      amount: body.unit_amount,      // in paise
 *      redirectUrl: `${origin}/checkout/success`,
 *      redirectMode: "REDIRECT",
 *      callbackUrl: `${origin}/api/phonepay/webhook`,
 *      paymentInstrument: { type: "PAY_PAGE" },
 *    };
 *    const base64Payload = Buffer.from(JSON.stringify(payload)).toString("base64");
 *    const checksum = sha256(base64Payload + "/pg/v1/pay" + process.env.PHONEPE_SALT_KEY)
 *                     + "###" + process.env.PHONEPE_SALT_INDEX;
 *    const res = await fetch("https://api.phonepe.com/apis/hermes/pg/v1/pay", {
 *      method: "POST",
 *      headers: { "Content-Type": "application/json", "X-VERIFY": checksum },
 *      body: JSON.stringify({ request: base64Payload }),
 *    });
 *    const data = await res.json();
 *    return new Response(JSON.stringify({ url: data.data.instrumentResponse.redirectInfo.url }), { status: 200 });
 */

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const origin = req.headers.get("origin") || "http://localhost:3000";

    // ── DEMO MODE ──────────────────────────────────────────────────────────
    // Returns demo:true so the modal shows a success state without redirect.
    // Replace with real PhonePe API call (see comments above) in production.
    await new Promise((r) => setTimeout(r, 1200)); // simulate network latency

    return new Response(
      JSON.stringify({
        demo: true,
        message: "PhonePe demo payment successful",
        method: "phonepay",
        amount: body.unit_amount,
        txnId: `PPDEMOTXN${Date.now()}`,
      }),
      { status: 200 }
    );
    // ── END DEMO ───────────────────────────────────────────────────────────
  } catch (err: any) {
    console.error("PhonePe checkout error", err);
    return new Response(
      JSON.stringify({ error: err.message || "PhonePe checkout failed" }),
      { status: 500 }
    );
  }
}
