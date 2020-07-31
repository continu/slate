Continu uses the OAuth 2.0 protocol’s Client Credentials Flow for authentication and authorization. 

With these credentials, the client requests a bearer access token. This token is retrieved by POST'ing the following information:

|Parameter|Description|
|---|---|
| client_id  | The ID of the client supplied by us  |
| client_secret  | The secret of the client supplied by us  |

https://usw2-api.continu.co/v3/oauth2/access-token

The calling application extracts the access token from the response (see the example) and then sends the token using an HTTP authorization header with the value in the format Bearer <access token>. Access tokens are valid only for the set of operations and resources described in the scope of the token request.

`curl -X POST  -H "Content-Type: application/json" -d '{"client_id": "<id>", "client_secret": "<secret>"}' https://usw2-api.continu.co/v3/oauth2/access-token`

Which will return:

`{"access_token":"<token>","token_type":"bearer","expires_in":<epoch>}`
