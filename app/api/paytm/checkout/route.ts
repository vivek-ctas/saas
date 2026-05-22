/**
 * Paytm Checkout Route (Demo)
 *
 * Production integration steps:
 * 1. npm install paytmchecksum
 * 2. Set env vars: PAYTM_MERCHANT_ID, PAYTM_MERCHANT_KEY, PAYTM_WEBSITE, PAYTM_CHANNEL_ID
 * 3. Replace demo block with real Paytm initiate transaction call:
 *
 *    import PaytmChecksum from "paytmchecksum";
 *
 *    const orderId = "ORDER_" + Date.now();
 *    const paytmParams = {
 *      body: {
 *        requestType: "Payment",
 *        mid: process.env.PAYTM_MERCHANT_ID,
 *        websiteName: process.env.PAYTM_WEBSITE,  // "WEBSTAGING" for test
 *        orderId,
 *        callbackUrl: `${origin}/api/paytm/webhook`,
 *        txnAmount: { value: (body.unit_amount / 100).toFixed(2), currency: "INR" },
 *        userInfo: { custId: "CUST_" + Date.now() },
 *      },
 *    };
 *    const checksum = await PaytmChecksum.generateSignature(
 *      JSON.stringify(paytmParams.body),
 *      process.env.PAYTM_MERCHANT_KEY!
 *    );
 *    paytmParams.head = { signature: checksum };
 *
 *    const txnRes = await fetch(
 *      `https://securegw-stage.paytm.in/theia/api/v1/initiateTransaction?mid=${process.env.PAYTM_MERCHANT_ID}&orderId=${orderId}`,
 *      { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(paytmParams) }
 *    );
 *    const txnData = await txnRes.json();
 *    const txnToken = txnData.body.txnToken;
 *    // Return token to client → render Paytm JS checkout widget
 *    return new Response(JSON.stringify({ txnToken, orderId, mid: process.env.PAYTM_MERCHANT_ID }), { status: 200 });
 */

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));

    // ── DEMO MODE ──────────────────────────────────────────────────────────
    await new Promise((r) => setTimeout(r, 1100)); // simulate processing

    return new Response(
      JSON.stringify({
        demo: true,
        message: "Paytm demo payment successful",
        method: "paytm",
        amount: body.unit_amount,
        orderId: `PAYTM-DEMO-${Date.now()}`,
      }),
      { status: 200 }
    );
    // ── END DEMO ───────────────────────────────────────────────────────────
  } catch (err: any) {
    console.error("Paytm checkout error", err);
    return new Response(
      JSON.stringify({ error: err.message || "Paytm checkout failed" }),
      { status: 500 }
    );
  }
}
