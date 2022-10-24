# Stripe

Payment Intents API: https://stripe.com/docs/payments/payment-intents

Example app: https://github.com/stripe-samples/accept-a-payment/tree/main/custom-payment-flow/client/react-cra

## Test Cards

### For all cards

| Field           | Value                                                             |
| --------------- | ----------------------------------------------------------------- |
| Expiration Date | Use a valid future date, such as 12/34                            |
| CVC             | Use any three-digit CVC (four digits for American Express cards). |

### Card Numbers

| Decription                 | Number           |
| -------------------------- | ---------------- |
| Success                    | 4242424242424242 |
| Generic decline            | 4000000000000002 |
| Insufficient funds decline | 4000000000009995 |
| Lost card decline          | 4000000000009987 |
| Stolen card decline        | 4000000000009979 |
| Expired card decline       | 4000000000000069 |
| Incorrect CVC decline      | 4000000000000127 |
| Processing error decline   | 4000000000000119 |
| Incorrect number decline   | 4242424242424241 |

### Documentation

- https://stripe.com/docs/testing
