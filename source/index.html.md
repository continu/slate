---
title: Continu's Open API v1.0
language_tabs:
  - shell: curl
toc_footers:
  - <a href="mailto:api@continu.co">Contact Us</a>
  - <a href="https://continu.co/terms">Terms of Service</a>
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<!-- Generator: Widdershins v4.0.1 -->

<h1 id="home">Continu API</h1>
Welcome to the Continu API. You can use our API to get access to learner completion information contained within Continu.

<h1 id="authenticationMain">Authentication</h1>

```shell
curl -X POST -H "Content-Type: application/json" -d '{"client_id": "<client_id>", "client_secret": "<client_secret>"}' https://usw2-api.continu.co/v3/oauth2/access-token
```

```shell
// Which will return:
{"access_token":"<token>","token_type":"bearer","expires_in":<epoch>}
```

Continu uses the OAuth 2.0 protocol's Client Credentials Flow for authentication and authorization.
With these credentials, the client requests a bearer access token. This token is retrieved by POST'ing the following information:

|Parameter|Description|
|---------|---------|
|_client_id_|The ID of the client supplied by us|
|_client_secret_|The secret of the client supplied by us|

<p><code>
https://usw2-api.continu.co/v3/oauth2/access-token
</code></p>

The calling application extracts the access token from the response (see the example) and then sends the token using an HTTP authorization header with the value in the format `Bearer`. Access tokens are valid only for the set of operations and resources described in the scope of the token request.

<h1 id="rateLimit">Rate Limit</h1>
We currently limit the number of calls a single client can make to 50 requests per minute. If you exceed the limit, we return a `429 Too Many Requests` response.

Every response from our API contains the following headers:

|Header|Description|
|-----|-----|
|X-REQUESTS-PER-MINUTE|The number of requests counted last minute|
|X-REQUESTS-PER-DAY|The number of requests today|

<h1 id="continu-s-open-api-assessments">Assessments</h1>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v1/completion/assessments?for_users=string \
  -H 'Accept: application/json' \
  -H 'Authorization: string'

```

This endpoint lists all Assessments for specific users. Users should be specified as a comma separated list of email addresses for which the Assessment information is required.
You also have the option to specify a date range using the from or until Unix Epoch timestamp.

### HTTP Request
`GET /completion/assessments`

<h3 id="get-assessments-completion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|for_users|query|string|true|Comma Separated List of users for which to return the AssessmentsList|
|from|query|integer|false|From date in Unix time (AKA Epoch time, seconds since 00:00:00 UTC on 1 January 1970)|
|until|query|integer|false|Until date in Unix time (AKA Epoch time, seconds since 00:00:00 UTC on 1 January 1970)|
|Authorization|header|string|true|The Authorization Header and Token|

> Example responses

> 200 Response

```json
[
  {
    "assessments": [
      {
        "attempts": 1,
        "completion_status": "Passed",
        "grading_status": "Completed",
        "id": "5b72efb05e8e1534c818ec81",
        "passed_date": "2018-09-11T17:23:06.667-06:00",
        "score": 100,
        "start_date": "2018-09-06T17:07:20.942-06:00",
        "title": "Designing for the Modern Workplace",
        "type": "Video Coaching"
      }
    ],
    "email": "theresa@continu.co",
    "first_name": "Theresa",
    "last_name": "Jenkins",
    "user_id": "56b1258a9f176c1100e7e993"
  }
]
```

<h3 id="get-assessments-completion-responses">Responses</h3>

|Status|Meaning|Description|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|

<h1 id="continu-s-open-api-assignments">Assignments</h1>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v1/completion/assignments?for_users=string \
  -H 'Accept: application/json' \
  -H 'Authorization: string'

```

This endpoint lists all Assignments for specific users. Users should be specified as a comma separated list of email addresses for which the Assignment information is required.
You also have the option to specify a date range using the from or until Unix Epoch timestamp.

### HTTP Request
`GET /completion/assignments`

<h3 id="get-assignments-completion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|for_users|query|string|true|Comma Separated List of users for which to return the AssignmentsList|
|from|query|integer|false|From date in Unix time (AKA Epoch time, seconds since 00:00:00 UTC on 1 January 1970)|
|until|query|integer|false|Until date in Unix time (AKA Epoch time, seconds since 00:00:00 UTC on 1 January 1970)|
|Authorization|header|string|true|The Authorization Header and Token|

> Example responses

> 200 Response

```json
[
  {
    "assignments": [
      {
        "assigned_content": [
          {
            "completed_date": "2019-09-04T14:24:16.393-06:00",
            "content_id": "54e6411129b6698c270000d6",
            "content_title": "Sales Enablement Track",
            "content_type": "Track"
          }
        ],
        "assigned_date": "2019-09-01T14:24:16.393-06:00",
        "assignment_id": "57bdd6624487471000e2bf3a",
        "completed": true,
        "completed_date": "2019-09-04T14:24:16.393-06:00",
        "completion_status": "Completed - On Time",
        "due_date": "2019-09-05T14:24:16.393-06:00"
      }
    ],
    "email": "stanleybond@continu.co",
    "first_name": "Stanly",
    "last_name": "Bond",
    "user_id": "551b3553932def2b1e000019"
  }
]
```

<h3 id="get-assignments-completion-responses">Responses</h3>

|Status|Meaning|Description|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|

<h1 id="continu-s-open-api-learning-tracks">Learning Tracks</h1>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v1/completion/tracks?for_users=string \
  -H 'Accept: application/json' \
  -H 'Authorization: string'

```

This endpoint lists all Learning Tracks for specific users. Users should be specified as a comma separated list of email addresses for which the Learning Track information is required.
You also have the option to specify a date range using the from or until Unix Epoch timestamp.

### HTTP Request
`GET /completion/tracks`

<h3 id="lists-learning-tracks-completion-information-for-all-the-user-emails-in-the-mandatory-for_users-argument-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|for_users|query|string|true|Comma Separated List of users for which to return the TracksList|
|from|query|integer|false|From date in Unix time (AKA Epoch time, seconds since 00:00:00 UTC on 1 January 1970)|
|until|query|integer|false|Until date in Unix time (AKA Epoch time, seconds since 00:00:00 UTC on 1 January 1970)|
|Authorization|header|string|true|The Authorization Header and Token|

> Example responses

> 200 Response

```json
[
  {
    "email": "ferdinand@continu.co",
    "first_name": "Ferdinand",
    "last_name": "Danton",
    "tracks": [
      {
        "completed": true,
        "completed_date": "2019-07-19T15:32:53.744-06:00",
        "duration": 5,
        "id": "5d6fea50ca2bc5000fdf7dd6",
        "name": "Sales Tools for Teams",
        "progress": 100,
        "start_date": "2019-07-19T15:16:54.744-06:00"
      }
    ],
    "user_id": "5aa15c20f070380bcd59214c"
  }
]
```

<h3 id="lists-learning-tracks-completion-information-for-all-the-user-emails-in-the-mandatory-for_users-argument-responses">Responses</h3>

|Status|Meaning|Description|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|

<h1 id="continu-s-open-api-workshops">Workshops</h1>

> Code samples

```shell
# You can also use wget
curl -X GET /api/v1/completion/workshops?for_users=string \
  -H 'Accept: application/json' \
  -H 'Authorization: string'

```

This endpoint lists all Workshops for specific users. Users should be specified as a comma separated list of email addresses for which the Workshop information is required.
You also have the option to specify a date range using the from or until Unix Epoch timestamp.

### HTTP Request
`GET /completion/workshops`

<h3 id="get-workshops-completion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|for_users|query|string|true|Comma Separated List of users for which to return the WorkshopsList|
|from|query|integer|false|From date in Unix time (AKA Epoch time, seconds since 00:00:00 UTC on 1 January 1970)|
|until|query|integer|false|Until date in Unix time (AKA Epoch time, seconds since 00:00:00 UTC on 1 January 1970)|
|Authorization|header|string|true|The Authorization Header and Token|

> Example responses

> 200 Response

```json
[
  {
    "email": "mark@continu.co",
    "first_name": "Mark",
    "last_name": "Schumacher",
    "user_id": "5aa15c20f070380bcd59214c",
    "workshops": [
      {
        "date": "2020-04-28T09:13:30.466-06:00",
        "facilitator": "Ferdinand Danton",
        "id": "5aa15c20f070380bcd59214c",
        "status": "attended",
        "title": "Full Zoom Workshop"
      }
    ]
  }
]
```

<h3 id="get-workshops-completion-responses">Responses</h3>

|Status|Meaning|Description|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|

