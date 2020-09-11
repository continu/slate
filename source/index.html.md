---
title: Continu API v1.0
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

<h1 id="continu-api-assessments">Assessments</h1>

> Code Sample

```shell
# You can also use wget
curl -X GET /completion/assessments?for_users=string \
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

> Example Response

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

<h1 id="continu-api-assignments">Assignments</h1>

> Code Sample

```shell
# You can also use wget
curl -X GET /completion/assignments?for_users=string \
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

> Example Response

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

<h1 id="continu-api-learning-tracks">Learning Tracks</h1>

> Code Sample

```shell
# You can also use wget
curl -X GET /completion/tracks?for_users=string \
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

> Example Response

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

<h1 id="continu-api-workshops">Workshops</h1>

> Code Sample

```shell
# You can also use wget
curl -X GET /completion/workshops?for_users=string \
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

> Example Response

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

<h1 id="continu-api-users">Users</h1>

> Code Sample

```shell
# You can also use wget
curl -X GET /data/users \
  -H 'Accept: application/json' \
  -H 'Authorization: string'

```

This endpoint lists all user's briefs, you may return them as a list size of 50 records, 100, or 500, and in a "compact", "summary", or "full" list type.
If omitted, the default values for the list are "compact" and 50 records. You have the option to specify values for any of the fields returned regardless of the list type.
This can be a single value, or lists for string fields like emails, roles, and even from/until ranges for date fields like create_at, or first_login.
If you want to return the next batch of 50, 100, or 500 records
The list To get the next group of records send id_from argument with the last id you received.

### HTTP Request
`GET /data/users`

<h3 id="get-user-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_from|query|string|false|Optional Id from the last record previously returned. This will be the Id from which data is returned|
|list_size|query|string|false|Size of the returned list. This value can be 50, 100, or 500|
|list_type|query|string|false|Type of List to return. This value can be compact, summary, or full indicating the number of fields included in each element returned|
|email|query|string|false|Email value or comma separated list of emails for which to return values|
|role|query|string|false|Role value expected or comma separated list of values (admin, user, external)|
|userid|query|string|false|UserId value expected (employee id, phone number, client defined id for users)|
|locations|query|string|false|Locations value expected or comma separated list of values (56b9938a9f176c1100e7e156, 56b9938a9f176c1100e7e152, 56b9938a9f176c1100e7e154)|
|is_manager|query|string|false|IsManager value expected (true/false, t/f, 1/0)|
|is_collaborator|query|string|false|IsCollaborator value expected (true/false, t/f, 1/0)|
|is_suspended|query|string|false|IsSuspended value expected (true/false, t/f, 1/0)|
|suspended_on_from|query|integer|false|SuspendedOn From date in Unix time (AKA Epoch time, seconds since 00:00:00 UTC on 1 January 1970)|
|suspended_on_until|query|integer|false|SuspendedOn Until date in Unix time (AKA Epoch time, seconds since 00:00:00 UTC on 1 January 1970)|
|first_login_from|query|integer|false|FirstLogin From date in Unix time (AKA Epoch time, seconds since 00:00:00 UTC on 1 January 1970)|
|first_login_until|query|integer|false|FirstLogin Until date in Unix time (AKA Epoch time, seconds since 00:00:00 UTC on 1 January 1970)|
|last_login_from|query|integer|false|LastLogin From date in Unix time (AKA Epoch time, seconds since 00:00:00 UTC on 1 January 1970)|
|last_login_until|query|integer|false|LastLogin Until date in Unix time (AKA Epoch time, seconds since 00:00:00 UTC on 1 January 1970)|
|updated_at_from|query|integer|false|UpdatedAt From date in Unix time (AKA Epoch time, seconds since 00:00:00 UTC on 1 January 1970)|
|updated_at_until|query|integer|false|UpdatedAt Until date in Unix time (AKA Epoch time, seconds since 00:00:00 UTC on 1 January 1970)|
|created_at_from|query|integer|false|CreatedAt From date in Unix time (AKA Epoch time, seconds since 00:00:00 UTC on 1 January 1970)|
|created_at_until|query|integer|false|CreatedAt Until date in Unix time (AKA Epoch time, seconds since 00:00:00 UTC on 1 January 1970)|
|Authorization|header|string|true|The Authorization Header and Token|

> Example Response

> 200 Response

```json
[
  {
    "created_at": "2020-01-28T09:13:30.466-06:00",
    "email": "theresa@continu.co",
    "first_login": "2020-01-28T09:13:30.466-06:00",
    "first_name": "Theresa",
    "full_name": "Theresa Jenkins",
    "hired_on": "2020-04-28T09:13:30.466-06:00",
    "id": "56b1258a9f176c1100e7e993",
    "image": "https://d2277n3gvptnup.cloudfront.net/images/afcaf0c3-b0db-4313-b42e-bcabdfae35cb.jpg",
    "is_collaborator": true,
    "is_manager": false,
    "is_suspended": false,
    "job_title": "Marketing Manager",
    "language": "en",
    "last_login": "2020-04-28T09:13:30.466-06:00",
    "last_name": "Jenkins",
    "linked_departments": [
      "56b9938a9f176c1100e7e156"
    ],
    "linked_locations": [
      "56b9938a9f176c1100e7e125"
    ],
    "linked_teams": [
      "56b9938a9f176c1100e7e156"
    ],
    "role": "user",
    "suspended_on": "2020-04-28T09:13:30.466-06:00",
    "updated_at": "2020-04-28T09:13:30.466-06:00",
    "userid": "123456789"
  }
]
```

<h3 id="get-user-list-responses">Responses</h3>

|Status|Meaning|Description|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|

> Code Sample

```shell
# You can also use wget
curl -X POST /data/users \
  -H 'Content-Type: application/json' \
  -H 'Accept: */*' \
  -H 'Authorization: string'

```

This endpoint creates a User instance

> Body parameter

```json
{
  "buddy_email": "buddy@continu.co",
  "company": "56b1258a9f176c1100e7e993",
  "created_at": "2020-01-28T09:13:30.466-06:00",
  "departments": [
    "56b9938a9f176c1100e7e156"
  ],
  "email": "theresa@continu.co",
  "first_login": "2020-01-28T09:13:30.466-06:00",
  "first_name": "Theresa",
  "full_name": "Theresa Jenkins",
  "grade": "56b9938a9f176c1100e7e156",
  "hired_on": "2020-04-28T09:13:30.466-06:00",
  "id": "56b1258a9f176c1100e7e993",
  "image": "https://d2277n3gvptnup.cloudfront.net/images/afcaf0c3-b0db-4313-b42e-bcabdfae35cb.jpg",
  "is_collaborator": true,
  "is_manager": false,
  "is_suspended": false,
  "job_title": "Marketing Manager",
  "language": "en",
  "last_login": "2020-04-28T09:13:30.466-06:00",
  "last_name": "Jenkins",
  "last_onboarding_email": "2020-01-28T09:13:30.466-06:00",
  "last_reminded_email": "2020-01-28T09:13:30.466-06:00",
  "linked_teams": [
    "56b9938a9f176c1100e7e156"
  ],
  "locations": [
    "56b9938a9f176c1100e7e125"
  ],
  "manager_email": "manager@continu.co",
  "org_level": "56b9938a9f176c1100e7e156",
  "password": "mypassword",
  "provisioning_key": "string",
  "provisioning_status": "inviting",
  "role": "user",
  "skills": [
    "56b9938a9f176c1100e7e156"
  ],
  "social_links": [
    {
      "name": "linkedin",
      "value": "https://link.to.linkedin.com"
    }
  ],
  "suspended_on": "2020-04-28T09:13:30.466-06:00",
  "updated_at": "2020-04-28T09:13:30.466-06:00",
  "userid": "123456789"
}
```

### HTTP Request
`POST /data/users`

<h3 id="creates-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|The Authorization Header and Token|
|body|body|[controllers.User](#schemacontrollers.user)|true|Create User|
|» buddy_email|body|string|false|none|
|» company|body|string|false|none|
|» created_at|body|string|false|none|
|» departments|body|[string]|false|none|
|» email|body|string|false|none|
|» first_login|body|string|false|none|
|» first_name|body|string|false|none|
|» full_name|body|string|false|none|
|» grade|body|string|false|none|
|» hired_on|body|string|false|none|
|» id|body|string|false|none|
|» image|body|string|false|none|
|» is_collaborator|body|boolean|false|none|
|» is_manager|body|boolean|false|none|
|» is_suspended|body|boolean|false|none|
|» job_title|body|string|false|none|
|» language|body|string|false|none|
|» last_login|body|string|false|none|
|» last_name|body|string|false|none|
|» last_onboarding_email|body|string|false|none|
|» last_reminded_email|body|string|false|none|
|» linked_teams|body|[string]|false|none|
|» locations|body|[string]|false|none|
|» manager_email|body|string|false|none|
|» org_level|body|string|false|none|
|» password|body|string|false|none|
|» provisioning_key|body|string|false|none|
|» provisioning_status|body|string|false|none|
|» role|body|string|false|none|
|» skills|body|[string]|false|none|
|» social_links|body|[[controllers.SocialLink](#schemacontrollers.sociallink)]|false|none|
|»» name|body|string|false|none|
|»» value|body|string|false|none|
|» suspended_on|body|string|false|none|
|» updated_at|body|string|false|none|
|» userid|body|string|false|none|

> Example Response

> 400 Response

<h3 id="creates-a-user-responses">Responses</h3>

|Status|Meaning|Description|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|none|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|

> Code Sample

```shell
# You can also use wget
curl -X GET /data/users/{id} \
  -H 'Accept: */*' \
  -H 'Authorization: string'

```

This endpoint gets the user corresponding to the given id.

### HTTP Request
`GET /data/users/{id}`

<h3 id="get-user-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id for the user requested.|
|Authorization|header|string|true|The Authorization Header and Token|

> Example Response

> 200 Response

<h3 id="get-user-by-id-responses">Responses</h3>

|Status|Meaning|Description|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|

