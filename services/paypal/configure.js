const paypal = require('paypal-rest-sdk')

paypal.configure({
  mode: 'sandbox',
  client_id: process.env.PAYPAL_CLIENT_ID,
  client_secret: process.env.PAYPAL_SECRET_ID,
});

module.exports = paypal
// paypal.payment.create()

// fetch('https://api-m.sandbox.paypal.com/v2/payments/authorizations/0VF52814937998046/capture', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer A21AAFs9YK9gWL6Vl6AqeoPtm-nf6JmtPOwAc8kfzHVdeigPEhrOJLCvbeIt3fJ4NKvyZo_iWic7sC3RIQrVUdu7igagcuMVQ',
//         'PayPal-Request-Id': '123e4567-e89b-12d3-a456-426655440010'
//     },
//     body: {
//       "amount": {
//         "value": "10.99",
//         "currency_code": "USD"
//       },
//       "invoice_id": "INVOICE-123",
//       "final_capture": true,
//       "note_to_payer": "If the ordered color is not available, we will substitute with a different color free of charge.",
//       "soft_descriptor": "Bobs"
//     }
// });