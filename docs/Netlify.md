# Netlify

### Functions

Docs: https://docs.netlify.com/functions/overview/

### Endpoints

All endpoints require authorization with a JWT token signed with the JWT_CLIENT_SECRET environment variable. To test locally, run the `scripts/getToken.js` script and provide the JWT_CLIENT_SECRET environment variable from Netlify as an argument.

```bash
scripts/getToken.js 345efesfds
```

Then pass the token in the `Authorization` header (e.g. `Authorization: Bearer <token>`).