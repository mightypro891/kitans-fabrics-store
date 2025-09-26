import axios from "axios";

export const initializePayment = async (orderId, amount, email) => {
  // Replace with real Monnify API keys
  const apiKey = process.env.MONNIFY_API_KEY;
  const secret = process.env.MONNIFY_SECRET_KEY;

  const token = Buffer.from(`${apiKey}:${secret}`).toString("base64");

  const response = await axios.post(
    "https://sandbox.monnify.com/api/v1/merchant/transactions/init-transaction",
    {
      amount,
      customerName: email,
      customerEmail: email,
      paymentReference: orderId,
      paymentDescription: "Order Payment",
      currencyCode: "NGN",
      contractCode: process.env.MONNIFY_CONTRACT_CODE,
      redirectUrl: "http://localhost:3000/checkout/success"
    },
    { headers: { Authorization: `Basic ${token}` } }
  );

  return response.data.responseBody.checkoutUrl;
};