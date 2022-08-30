# Netlify

### Functions

Docs: https://docs.netlify.com/functions/overview/

### Endpoints

All endpoints require authorization with a JWT token signed with the JWT_CLIENT_SECRET environment variable. To test locally, run the `scripts/getToken.js` script and provide the JWT_CLIENT_SECRET environment variable from Netlify as an argument.

```bash
scripts/getToken.js $(yarn netlify env:get JWT_CLIENT_SECRET)
```

Then pass the token in the `Authorization` header (e.g. `Authorization: Bearer <token>`).

#### `/.netlify/functions/config`

Returns the Stripe `publishableKey`

##### Example Response

```json
{
  "publishableKey": "pk_test_ke7jEk34j5kjs"
}
```

##### Errors

| HTTP Status Code | Reason                                                   |
| ---------------- | -------------------------------------------------------- |
| 401              | Unauthorized request                                     |
| 405              | Only allows `GET`                                        |
| 503              | The Stripe publishable key is not set in the environment |

#### `/.netlify/functions/create-payment-intent`

Creates a Stripe [Payment Intent](https://stripe.com/docs/payments/payment-intents)

##### Example Response

```json
{
  "clientSecret": "pi_3LcNV9AamtRAtTxp2MEdFEXe_secret_8KqrsvmP9lus96qcDeweAxXzX"
}
```

##### Errors

| HTTP Status Code | Reason                                                                       |
| ---------------- | ---------------------------------------------------------------------------- |
| 400              | The request does not contain a valid amount or the amount is less than $0.50 |
| 401              | The Stripe publishable key is not set in the environment                     |
| 405              | Only allows `POST`                                                           |
