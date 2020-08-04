---
title: Continu's Open API v1.0
language_tabs:
  - shell: curl
toc_footers:
  - <a href='mailto:api@continu.co'>Contact Us</a>
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<!-- Generator: Widdershins v4.0.1 -->

<h1 id="home">Continu API</h1>
Welcome to the Continu API. You can use our API to get access to learner completion information contained within Continu.

<h1 id="authenticationMain">Authentication</h1>

Continu uses the OAuth 2.0 protocol's Client Credentials Flow for authentication and authorization.
With these credentials, the client requests a bearer access token. This token is retrieved by POST'ing the following information:

|Parameter|Description|
|---------|---------|
|_client_id_|The ID of the client supplied by us|
|_client_secret_|The secret of the client supplied by us|

<p><code>
https://usw2-api.continu.co/v3/oauth2/access-token
</code></p>

The calling application extracts the access token from the response (see the example) and then sends the token using an HTTP authorization header with the value in the format Bearer . Access tokens are valid only for the set of operations and resources described in the scope of the token request.

<p><code>
curl -X POST -H "Content-Type: application/json" -d '{"client_id": "<id>", "client_secret": "<secret>"}' https://usw2-api.continu.co/v3/oauth2/access-token
</code></p>

Which will return:
<p><code>
{"access_token":"&lt;token&gt;","token_type":"bearer","expires_in":&lt;epoch&gt;}
</code></p>

<h1 id="rateLimit">Rate Limit</h1>
We currently limit the number of calls a single client can make to X requests per minute. If you exceed the limit, we return a 429 Too Many Requests response.

Every response from our API contains the following headers:

|Header|Description|
|-----|-----|
|X-REQUESTS-PER-MINUTE|The number of requests counted last minute|
|X-REQUESTS-PER-DAY|The number of requests today|

<h1 id="continu-s-open-api-assessments">Assessments</h1>

This endpoints lists all Assessments for specific users. Users should be specified as a comma separated list of email addresses for which the Assessment information is required.
You also have the option to specify a date range using the from or until Unix Epoch timestamp.

`GET /completion/assessments`

<h3 id="lists-user-assessments-completion-information-for-all-the-user-emails-in-the-mandatory-for_users-argument-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|for_users|query|string|true|Comma Separated List of users for which to return the AssessmentsList|
|from|query|integer|false|From date in Unix time (AKA Epoch time, seconds since 00:00:00 UTC on 1 January 1970)|
|until|query|integer|false|Until date in Unix time (AKA Epoch time, seconds since 00:00:00 UTC on 1 January 1970)|
|Authorization|header|string|true|The Authorization Header and Token|

<h3 id="lists-user-assessments-completion-information-for-all-the-user-emails-in-the-mandatory-for_users-argument-responses">Responses</h3>

|Status|Meaning|Description|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|

<h1 id="continu-s-open-api-assignments">Assignments</h1>

This endpoints lists all Assignments for specific users. Users should be specified as a comma separated list of email addresses for which the Assignment information is required.
You also have the option to specify a date range using the from or until Unix Epoch timestamp.

`GET /completion/assignments`

<h3 id="lists-user-assignments-completion-information-for-all-the-user-emails-in-the-mandatory-for_users-argument-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|for_users|query|string|true|Comma Separated List of users for which to return the AssignmentsList|
|from|query|integer|false|From date in Unix time (AKA Epoch time, seconds since 00:00:00 UTC on 1 January 1970)|
|until|query|integer|false|Until date in Unix time (AKA Epoch time, seconds since 00:00:00 UTC on 1 January 1970)|
|Authorization|header|string|true|The Authorization Header and Token|

<h3 id="lists-user-assignments-completion-information-for-all-the-user-emails-in-the-mandatory-for_users-argument-responses">Responses</h3>

|Status|Meaning|Description|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|

<h1 id="continu-s-open-api-tracks">Tracks</h1>

This endpoints lists all Learning Tracks for specific users. Users should be specified as a comma separated list of email addresses for which the Learning Track information is required.
You also have the option to specify a date range using the from or until Unix Epoch timestamp.

`GET /completion/tracks`

<h3 id="lists-user-tracks-completion-information-for-all-the-user-emails-in-the-mandatory-for_users-argument-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|for_users|query|string|true|Comma Separated List of users for which to return the TracksList|
|from|query|integer|false|From date in Unix time (AKA Epoch time, seconds since 00:00:00 UTC on 1 January 1970)|
|until|query|integer|false|Until date in Unix time (AKA Epoch time, seconds since 00:00:00 UTC on 1 January 1970)|
|Authorization|header|string|true|The Authorization Header and Token|

<h3 id="lists-user-tracks-completion-information-for-all-the-user-emails-in-the-mandatory-for_users-argument-responses">Responses</h3>

|Status|Meaning|Description|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|

<h1 id="continu-s-open-api-workshops">Workshops</h1>

This endpoints lists all Workshops for specific users. Users should be specified as a comma separated list of email addresses for which the Workshop information is required.
You also have the option to specify a date range using the from or until Unix Epoch timestamp.

`GET /completion/workshops`

<h3 id="lists-user-workshops-completion-information-for-all-the-user-emails-in-the-mandatory-for_users-argument-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|for_users|query|string|true|Comma Separated List of users for which to return the WorkshopsList|
|from|query|integer|false|From date in Unix time (AKA Epoch time, seconds since 00:00:00 UTC on 1 January 1970)|
|until|query|integer|false|Until date in Unix time (AKA Epoch time, seconds since 00:00:00 UTC on 1 January 1970)|
|Authorization|header|string|true|The Authorization Header and Token|

<h3 id="lists-user-workshops-completion-information-for-all-the-user-emails-in-the-mandatory-for_users-argument-responses">Responses</h3>

|Status|Meaning|Description|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|

