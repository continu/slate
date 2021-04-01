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
https://usw2-api.continu.co/api/v1/oauth2/access-token
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

<h2 id="Get Assessments completion">Get Assessments completion</h2>

> Code Sample

```shell
# You can also use wget
curl -X GET https://usw2-oapi.continu.co/api/v1/completion/assessments \
  -H 'Accept: application/json' \
  -H 'Authorization: string'

```

This endpoint lists all Assessments for specific users. Users should be specified as a comma separated list of email addresses for which the Assessment information is required.
You also have the option to specify a date range using the from or until Unix Epoch timestamp.

### HTTP Request
`GET https://usw2-oapi.continu.co/api/v1/completion/assessments`

<h3 id="get-assessments-completion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email|query|string|false|Comma Separated List of users for which to return the Assessment Completion List|
|userid|query|string|false|UserId value expected (employee id, phone number, client defined id for users)|
|locations|query|string|false|Location value expected or comma separated list of values (56b9938a9f176c1100e7e156, 56b9938a9f176c1100e7e152, 56b9938a9f176c1100e7e154)|
|departments|query|string|false|Department value expected or comma separated list of values (56b9938a9f176c1100e7e156, 56b9938a9f176c1100e7e152, 56b9938a9f176c1100e7e154)|
|teams|query|string|false|Team value expected or comma separated list of values (56b9938a9f176c1100e7e156, 56b9938a9f176c1100e7e152, 56b9938a9f176c1100e7e154)|
|levels|query|string|false|Level value expected or comma separated list of values (56b9938a9f176c1100e7e156, 56b9938a9f176c1100e7e152, 56b9938a9f176c1100e7e154)|
|grades|query|string|false|Grade value expected or comma separated list of values (56b9938a9f176c1100e7e156, 56b9938a9f176c1100e7e152, 56b9938a9f176c1100e7e154)|
|assessment|query|string|false|Comma Separated List of Assessment IDs for which to return the Assessment Completion List|
|from|query|integer|false|From date in Unix time (AKA Epoch time, seconds since 00:00:00 UTC on 1 January 1970)|
|until|query|integer|false|Until date in Unix time (AKA Epoch time, seconds since 00:00:00 UTC on 1 January 1970)|
|range_target|query|string|false|Date-Range target field (from & until). This value can be started_date or passed_date indicating to which date field should the date-range be apply to. The default value is started_date|
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
        "started_date": "2018-09-06T17:07:20.942-06:00",
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

<h2 id="Get Assignments completion">Get Assignments completion</h2>

> Code Sample

```shell
# You can also use wget
curl -X GET https://usw2-oapi.continu.co/api/v1/completion/assignments \
  -H 'Accept: application/json' \
  -H 'Authorization: string'

```

This endpoint lists all Assignments for specific users. Users should be specified as a comma separated list of email addresses for which the Assignment information is required.
You also have the option to specify a date range using the from or until Unix Epoch timestamp.

### HTTP Request
`GET https://usw2-oapi.continu.co/api/v1/completion/assignments`

<h3 id="get-assignments-completion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email|query|string|false|Comma Separated List of users for which to return the AssignmentsList|
|userid|query|string|false|UserId value expected (employee id, phone number, client defined id for users)|
|locations|query|string|false|Location value expected or comma separated list of values (56b9938a9f176c1100e7e156, 56b9938a9f176c1100e7e152, 56b9938a9f176c1100e7e154)|
|departments|query|string|false|Department value expected or comma separated list of values (56b9938a9f176c1100e7e156, 56b9938a9f176c1100e7e152, 56b9938a9f176c1100e7e154)|
|teams|query|string|false|Team value expected or comma separated list of values (56b9938a9f176c1100e7e156, 56b9938a9f176c1100e7e152, 56b9938a9f176c1100e7e154)|
|levels|query|string|false|Level value expected or comma separated list of values (56b9938a9f176c1100e7e156, 56b9938a9f176c1100e7e152, 56b9938a9f176c1100e7e154)|
|grades|query|string|false|Grade value expected or comma separated list of values (56b9938a9f176c1100e7e156, 56b9938a9f176c1100e7e152, 56b9938a9f176c1100e7e154)|
|content|query|string|false|Comma Separated List of Content IDs for which to return the AssignmentsList|
|from|query|integer|false|From date in Unix time (AKA Epoch time, seconds since 00:00:00 UTC on 1 January 1970)|
|until|query|integer|false|Until date in Unix time (AKA Epoch time, seconds since 00:00:00 UTC on 1 January 1970)|
|range_target|query|string|false|Date-Range target field (from & until). This value can be assigned_date,due_date, or completed_date indicating to which date field should the date-range be apply to. The default value is assigned_date|
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

<h2 id="Lists Learning Tracks Completion Information for all the user emails in the mandatory for_users argument">Lists Learning Tracks Completion Information for all the user emails in the mandatory for_users argument</h2>

> Code Sample

```shell
# You can also use wget
curl -X GET https://usw2-oapi.continu.co/api/v1/completion/tracks \
  -H 'Accept: application/json' \
  -H 'Authorization: string'

```

This endpoint lists all Learning Tracks for specific users. Users should be specified as a comma separated list of email addresses for which the Learning Track information is required.
You also have the option to specify a date range using the from or until Unix Epoch timestamp.

### HTTP Request
`GET https://usw2-oapi.continu.co/api/v1/completion/tracks`

<h3 id="lists-learning-tracks-completion-information-for-all-the-user-emails-in-the-mandatory-for_users-argument-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email|query|string|false|Comma Separated List of users for which to return the Learning Tracks Completion List|
|userid|query|string|false|UserId value expected (employee id, phone number, client defined id for users)|
|locations|query|string|false|Location value expected or comma separated list of values (56b9938a9f176c1100e7e156, 56b9938a9f176c1100e7e152, 56b9938a9f176c1100e7e154)|
|departments|query|string|false|Department value expected or comma separated list of values (56b9938a9f176c1100e7e156, 56b9938a9f176c1100e7e152, 56b9938a9f176c1100e7e154)|
|teams|query|string|false|Team value expected or comma separated list of values (56b9938a9f176c1100e7e156, 56b9938a9f176c1100e7e152, 56b9938a9f176c1100e7e154)|
|levels|query|string|false|Level value expected or comma separated list of values (56b9938a9f176c1100e7e156, 56b9938a9f176c1100e7e152, 56b9938a9f176c1100e7e154)|
|grades|query|string|false|Grade value expected or comma separated list of values (56b9938a9f176c1100e7e156, 56b9938a9f176c1100e7e152, 56b9938a9f176c1100e7e154)|
|track|query|string|false|Comma Separated List of Track IDs for which to return the Learning Tracks Completion List|
|from|query|integer|false|From date in Unix time (AKA Epoch time, seconds since 00:00:00 UTC on 1 January 1970)|
|until|query|integer|false|Until date in Unix time (AKA Epoch time, seconds since 00:00:00 UTC on 1 January 1970)|
|range_target|query|string|false|Date-Range target field (from & until). This value can be started_date or completed_date indicating to which date field should the date-range be apply to. The default value is started_date|
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
        "started_date": "2019-07-19T15:16:54.744-06:00"
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

<h2 id="Get Workshops completion">Get Workshops completion</h2>

> Code Sample

```shell
# You can also use wget
curl -X GET https://usw2-oapi.continu.co/api/v1/completion/workshops \
  -H 'Accept: application/json' \
  -H 'Authorization: string'

```

This endpoint lists all Workshops for specific users. Users should be specified as a comma separated list of email addresses for which the Workshop information is required.
You also have the option to specify a date range using the from or until Unix Epoch timestamp.

### HTTP Request
`GET https://usw2-oapi.continu.co/api/v1/completion/workshops`

<h3 id="get-workshops-completion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email|query|string|false|Comma Separated List of users for which to return the Workshops Completion List|
|userid|query|string|false|UserId value expected (employee id, phone number, client defined id for users)|
|locations|query|string|false|Location value expected or comma separated list of values (56b9938a9f176c1100e7e156, 56b9938a9f176c1100e7e152, 56b9938a9f176c1100e7e154)|
|departments|query|string|false|Department value expected or comma separated list of values (56b9938a9f176c1100e7e156, 56b9938a9f176c1100e7e152, 56b9938a9f176c1100e7e154)|
|teams|query|string|false|Team value expected or comma separated list of values (56b9938a9f176c1100e7e156, 56b9938a9f176c1100e7e152, 56b9938a9f176c1100e7e154)|
|levels|query|string|false|Level value expected or comma separated list of values (56b9938a9f176c1100e7e156, 56b9938a9f176c1100e7e152, 56b9938a9f176c1100e7e154)|
|grades|query|string|false|Grade value expected or comma separated list of values (56b9938a9f176c1100e7e156, 56b9938a9f176c1100e7e152, 56b9938a9f176c1100e7e154)|
|workshop|query|string|false|Comma Separated List of Workshop IDs for which to return the Workshops Completion List|
|from|query|integer|false|From date in Unix time (AKA Epoch time, seconds since 00:00:00 UTC on 1 January 1970)|
|until|query|integer|false|Until date in Unix time (AKA Epoch time, seconds since 00:00:00 UTC on 1 January 1970)|
|range_target|query|string|false|Date-Range target field (from & until). This value can be created_date,started_date, or end_date indicating to which date field should the date-range be apply to. The default value is started_date|
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
    ],
    "workshopsMap": {
      "property1": {
        "date": "2020-04-28T09:13:30.466-06:00",
        "facilitator": "Ferdinand Danton",
        "id": "5aa15c20f070380bcd59214c",
        "status": "attended",
        "title": "Full Zoom Workshop"
      },
      "property2": {
        "date": "2020-04-28T09:13:30.466-06:00",
        "facilitator": "Ferdinand Danton",
        "id": "5aa15c20f070380bcd59214c",
        "status": "attended",
        "title": "Full Zoom Workshop"
      }
    }
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

<h1 id="continu-api-departments">Departments</h1>

<h2 id="Get Department List">Get Department List</h2>

> Code Sample

```shell
# You can also use wget
curl -X GET https://usw2-oapi.continu.co/api/v1/data/departments \
  -H 'Accept: application/json' \
  -H 'Authorization: string'

```

This endpoint lists all Department's briefs, you may return them as a list size of 50 records, 100, or 500, and in a "compact", "summary", or "full" list type.
If omitted, the default values for the list are "compact" and 50 records.
If you want to return the next batch of 50, 100, or 500 records
The list To get the next group of records send id_from argument with the last id you received.

### HTTP Request
`GET https://usw2-oapi.continu.co/api/v1/data/departments`

<h3 id="get-department-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_from|query|string|false|Optional Id from the last record previously returned. This will be the Id from which data is returned|
|list_size|query|string|false|Size of the returned list. This value can be 50, 100, or 500|
|list_type|query|string|false|Type of List to return. This value can be compact, summary, or full indicating the number of fields included in each element returned|
|name|query|string|false|Name value expected or comma separated list of values (Marketing, Engineering, Human Resources)|
|created_at_from|query|integer|false|CreatedAt From date in Unix time (AKA Epoch time, seconds since 00:00:00 UTC on 1 January 1970)|
|created_at_until|query|integer|false|CreatedAt Until date in Unix time (AKA Epoch time, seconds since 00:00:00 UTC on 1 January 1970)|
|Authorization|header|string|true|The Authorization Header and Token|

> Example Response

> 200 Response

```json
[
  {
    "children": [
      "[56b9938a9f176c1100e7e125]"
    ],
    "company": "56b1258a9f176c1100e7e993",
    "id": "56b1258a9f176c1100e7e993",
    "level": 1,
    "localized_names": "fr:featured-fr,de:gerfeatured,pt_br:Novidades,es_la:Spanish Featured,deu:Neuigkeiten",
    "name": "Featured",
    "order": [
      "[56b9938a9f176c1100e7e125]"
    ],
    "parent": "56b1258a9f176c1100e7e993",
    "show_external": true
  }
]
```

<h3 id="get-department-list-responses">Responses</h3>

|Status|Meaning|Description|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|

<h2 id="Creates a Department">Creates a Department</h2>

> Code Sample

```shell
# You can also use wget
curl -X POST https://usw2-oapi.continu.co/api/v1/data/departments \
  -H 'Content-Type: application/json' \
  -H 'Accept: */*' \
  -H 'Authorization: string'

```

This endpoint creates a Department instance

> Body parameter

```json
{
  "children": [
    "[56b9938a9f176c1100e7e125]"
  ],
  "company": "56b1258a9f176c1100e7e993",
  "created_at": "2020-01-28T09:13:30.466-06:00",
  "id": "56b1258a9f176c1100e7e993",
  "isCategory": true,
  "isDepartment": true,
  "isGrade": true,
  "isLabel": true,
  "isLocation": true,
  "isOrgLevel": true,
  "isTeam": true,
  "level": 1,
  "localized_names": "fr:featured-fr,de:gerfeatured,pt_br:Novidades,es_la:Spanish Featured,deu:Neuigkeiten",
  "name": "Featured",
  "order": [
    "[56b9938a9f176c1100e7e125]"
  ],
  "parent": "56b1258a9f176c1100e7e993",
  "show_external": true,
  "updated_at": "2020-04-28T09:13:30.466-06:00"
}
```

### HTTP Request
`POST https://usw2-oapi.continu.co/api/v1/data/departments`

<h3 id="creates-a-department-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|The Authorization Header and Token|
|body|body|[controllers.Segmentation](#schemacontrollers.segmentation)|true|The Department to create|
|» children|body|[string]|false|none|
|» company|body|string|false|none|
|» created_at|body|string|false|none|
|» id|body|string|false|none|
|» isCategory|body|boolean|false|none|
|» isDepartment|body|boolean|false|none|
|» isGrade|body|boolean|false|none|
|» isLabel|body|boolean|false|none|
|» isLocation|body|boolean|false|none|
|» isOrgLevel|body|boolean|false|none|
|» isTeam|body|boolean|false|none|
|» level|body|integer|false|none|
|» localized_names|body|string|false|none|
|» name|body|string|false|none|
|» order|body|[string]|false|none|
|» parent|body|string|false|none|
|» show_external|body|boolean|false|none|
|» updated_at|body|string|false|none|

> Example Response

> 201 Response

<h3 id="creates-a-department-responses">Responses</h3>

|Status|Meaning|Description|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Created|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Conflict|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|

<h2 id="Get Department by id">Get Department by id</h2>

> Code Sample

```shell
# You can also use wget
curl -X GET https://usw2-oapi.continu.co/api/v1/data/departments/{id} \
  -H 'Accept: */*' \
  -H 'Authorization: string'

```

This endpoint gets the department corresponding to the given id.

### HTTP Request
`GET https://usw2-oapi.continu.co/api/v1/data/departments/{id}`

<h3 id="get-department-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id for the department requested.|
|Authorization|header|string|true|The Authorization Header and Token|

> Example Response

> 200 Response

<h3 id="get-department-by-id-responses">Responses</h3>

|Status|Meaning|Description|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|

<h2 id="Replace a Department">Replace a Department</h2>

> Code Sample

```shell
# You can also use wget
curl -X PUT https://usw2-oapi.continu.co/api/v1/data/departments/{id} \
  -H 'Content-Type: application/json' \
  -H 'Accept: */*' \
  -H 'Authorization: string'

```

This endpoint replaces/updates a whole Department instance

> Body parameter

```json
{
  "children": [
    "[56b9938a9f176c1100e7e125]"
  ],
  "company": "56b1258a9f176c1100e7e993",
  "created_at": "2020-01-28T09:13:30.466-06:00",
  "id": "56b1258a9f176c1100e7e993",
  "isCategory": true,
  "isDepartment": true,
  "isGrade": true,
  "isLabel": true,
  "isLocation": true,
  "isOrgLevel": true,
  "isTeam": true,
  "level": 1,
  "localized_names": "fr:featured-fr,de:gerfeatured,pt_br:Novidades,es_la:Spanish Featured,deu:Neuigkeiten",
  "name": "Featured",
  "order": [
    "[56b9938a9f176c1100e7e125]"
  ],
  "parent": "56b1258a9f176c1100e7e993",
  "show_external": true,
  "updated_at": "2020-04-28T09:13:30.466-06:00"
}
```

### HTTP Request
`PUT https://usw2-oapi.continu.co/api/v1/data/departments/{id}`

<h3 id="replace-a-department-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id for the Department requested to be replaced.|
|Authorization|header|string|true|The Authorization Header and Token|
|body|body|[controllers.Segmentation](#schemacontrollers.segmentation)|true|The Department to replace|
|» children|body|[string]|false|none|
|» company|body|string|false|none|
|» created_at|body|string|false|none|
|» id|body|string|false|none|
|» isCategory|body|boolean|false|none|
|» isDepartment|body|boolean|false|none|
|» isGrade|body|boolean|false|none|
|» isLabel|body|boolean|false|none|
|» isLocation|body|boolean|false|none|
|» isOrgLevel|body|boolean|false|none|
|» isTeam|body|boolean|false|none|
|» level|body|integer|false|none|
|» localized_names|body|string|false|none|
|» name|body|string|false|none|
|» order|body|[string]|false|none|
|» parent|body|string|false|none|
|» show_external|body|boolean|false|none|
|» updated_at|body|string|false|none|

> Example Response

> 400 Response

<h3 id="replace-a-department-responses">Responses</h3>

|Status|Meaning|Description|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|none|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|

<h1 id="continu-api-grades">Grades</h1>

<h2 id="Get Grade List">Get Grade List</h2>

> Code Sample

```shell
# You can also use wget
curl -X GET https://usw2-oapi.continu.co/api/v1/data/grades \
  -H 'Accept: application/json' \
  -H 'Authorization: string'

```

This endpoint lists all Grade's briefs, you may return them as a list size of 50 records, 100, or 500, and in a "compact", "summary", or "full" list type.
If omitted, the default values for the list are "compact" and 50 records.
If you want to return the next batch of 50, 100, or 500 records
The list To get the next group of records send id_from argument with the last id you received.

### HTTP Request
`GET https://usw2-oapi.continu.co/api/v1/data/grades`

<h3 id="get-grade-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_from|query|string|false|Optional Id from the last record previously returned. This will be the Id from which data is returned|
|list_size|query|string|false|Size of the returned list. This value can be 50, 100, or 500|
|list_type|query|string|false|Type of List to return. This value can be compact, summary, or full indicating the number of fields included in each element returned|
|name|query|string|false|Name value expected or comma separated list of values (A+, A, B+, 1, 5, 10)|
|created_at_from|query|integer|false|CreatedAt From date in Unix time (AKA Epoch time, seconds since 00:00:00 UTC on 1 January 1970)|
|created_at_until|query|integer|false|CreatedAt Until date in Unix time (AKA Epoch time, seconds since 00:00:00 UTC on 1 January 1970)|
|Authorization|header|string|true|The Authorization Header and Token|

> Example Response

> 200 Response

```json
[
  {
    "children": [
      "[56b9938a9f176c1100e7e125]"
    ],
    "company": "56b1258a9f176c1100e7e993",
    "id": "56b1258a9f176c1100e7e993",
    "level": 1,
    "localized_names": "fr:featured-fr,de:gerfeatured,pt_br:Novidades,es_la:Spanish Featured,deu:Neuigkeiten",
    "name": "Featured",
    "order": [
      "[56b9938a9f176c1100e7e125]"
    ],
    "parent": "56b1258a9f176c1100e7e993",
    "show_external": true
  }
]
```

<h3 id="get-grade-list-responses">Responses</h3>

|Status|Meaning|Description|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|

<h2 id="Creates a Grade">Creates a Grade</h2>

> Code Sample

```shell
# You can also use wget
curl -X POST https://usw2-oapi.continu.co/api/v1/data/grades \
  -H 'Content-Type: application/json' \
  -H 'Accept: */*' \
  -H 'Authorization: string'

```

This endpoint creates a Grade instance

> Body parameter

```json
{
  "children": [
    "[56b9938a9f176c1100e7e125]"
  ],
  "company": "56b1258a9f176c1100e7e993",
  "created_at": "2020-01-28T09:13:30.466-06:00",
  "id": "56b1258a9f176c1100e7e993",
  "isCategory": true,
  "isDepartment": true,
  "isGrade": true,
  "isLabel": true,
  "isLocation": true,
  "isOrgLevel": true,
  "isTeam": true,
  "level": 1,
  "localized_names": "fr:featured-fr,de:gerfeatured,pt_br:Novidades,es_la:Spanish Featured,deu:Neuigkeiten",
  "name": "Featured",
  "order": [
    "[56b9938a9f176c1100e7e125]"
  ],
  "parent": "56b1258a9f176c1100e7e993",
  "show_external": true,
  "updated_at": "2020-04-28T09:13:30.466-06:00"
}
```

### HTTP Request
`POST https://usw2-oapi.continu.co/api/v1/data/grades`

<h3 id="creates-a-grade-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|The Authorization Header and Token|
|body|body|[controllers.Segmentation](#schemacontrollers.segmentation)|true|The Grade to create|
|» children|body|[string]|false|none|
|» company|body|string|false|none|
|» created_at|body|string|false|none|
|» id|body|string|false|none|
|» isCategory|body|boolean|false|none|
|» isDepartment|body|boolean|false|none|
|» isGrade|body|boolean|false|none|
|» isLabel|body|boolean|false|none|
|» isLocation|body|boolean|false|none|
|» isOrgLevel|body|boolean|false|none|
|» isTeam|body|boolean|false|none|
|» level|body|integer|false|none|
|» localized_names|body|string|false|none|
|» name|body|string|false|none|
|» order|body|[string]|false|none|
|» parent|body|string|false|none|
|» show_external|body|boolean|false|none|
|» updated_at|body|string|false|none|

> Example Response

> 201 Response

<h3 id="creates-a-grade-responses">Responses</h3>

|Status|Meaning|Description|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Created|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Conflict|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|

<h2 id="Get Grade by id">Get Grade by id</h2>

> Code Sample

```shell
# You can also use wget
curl -X GET https://usw2-oapi.continu.co/api/v1/data/grades/{id} \
  -H 'Accept: */*' \
  -H 'Authorization: string'

```

This endpoint gets the grade corresponding to the given id.

### HTTP Request
`GET https://usw2-oapi.continu.co/api/v1/data/grades/{id}`

<h3 id="get-grade-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id for the grade requested.|
|Authorization|header|string|true|The Authorization Header and Token|

> Example Response

> 200 Response

<h3 id="get-grade-by-id-responses">Responses</h3>

|Status|Meaning|Description|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|

<h2 id="Replace a Grade">Replace a Grade</h2>

> Code Sample

```shell
# You can also use wget
curl -X PUT https://usw2-oapi.continu.co/api/v1/data/grades/{id} \
  -H 'Content-Type: application/json' \
  -H 'Accept: */*' \
  -H 'Authorization: string'

```

This endpoint replaces/updates a whole Grade instance

> Body parameter

```json
{
  "children": [
    "[56b9938a9f176c1100e7e125]"
  ],
  "company": "56b1258a9f176c1100e7e993",
  "created_at": "2020-01-28T09:13:30.466-06:00",
  "id": "56b1258a9f176c1100e7e993",
  "isCategory": true,
  "isDepartment": true,
  "isGrade": true,
  "isLabel": true,
  "isLocation": true,
  "isOrgLevel": true,
  "isTeam": true,
  "level": 1,
  "localized_names": "fr:featured-fr,de:gerfeatured,pt_br:Novidades,es_la:Spanish Featured,deu:Neuigkeiten",
  "name": "Featured",
  "order": [
    "[56b9938a9f176c1100e7e125]"
  ],
  "parent": "56b1258a9f176c1100e7e993",
  "show_external": true,
  "updated_at": "2020-04-28T09:13:30.466-06:00"
}
```

### HTTP Request
`PUT https://usw2-oapi.continu.co/api/v1/data/grades/{id}`

<h3 id="replace-a-grade-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id for the Grade requested to be replaced.|
|Authorization|header|string|true|The Authorization Header and Token|
|body|body|[controllers.Segmentation](#schemacontrollers.segmentation)|true|The Grade to replace|
|» children|body|[string]|false|none|
|» company|body|string|false|none|
|» created_at|body|string|false|none|
|» id|body|string|false|none|
|» isCategory|body|boolean|false|none|
|» isDepartment|body|boolean|false|none|
|» isGrade|body|boolean|false|none|
|» isLabel|body|boolean|false|none|
|» isLocation|body|boolean|false|none|
|» isOrgLevel|body|boolean|false|none|
|» isTeam|body|boolean|false|none|
|» level|body|integer|false|none|
|» localized_names|body|string|false|none|
|» name|body|string|false|none|
|» order|body|[string]|false|none|
|» parent|body|string|false|none|
|» show_external|body|boolean|false|none|
|» updated_at|body|string|false|none|

> Example Response

> 400 Response

<h3 id="replace-a-grade-responses">Responses</h3>

|Status|Meaning|Description|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|none|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|

<h1 id="continu-api-levels">Levels</h1>

<h2 id="Get Level List">Get Level List</h2>

> Code Sample

```shell
# You can also use wget
curl -X GET https://usw2-oapi.continu.co/api/v1/data/levels \
  -H 'Accept: application/json' \
  -H 'Authorization: string'

```

This endpoint lists all Level's briefs, you may return them as a list size of 50 records, 100, or 500, and in a "compact", "summary", or "full" list type.
If omitted, the default values for the list are "compact" and 50 records.
If you want to return the next batch of 50, 100, or 500 records
The list To get the next group of records send id_from argument with the last id you received.

### HTTP Request
`GET https://usw2-oapi.continu.co/api/v1/data/levels`

<h3 id="get-level-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_from|query|string|false|Optional Id from the last record previously returned. This will be the Id from which data is returned|
|list_size|query|string|false|Size of the returned list. This value can be 50, 100, or 500|
|list_type|query|string|false|Type of List to return. This value can be compact, summary, or full indicating the number of fields included in each element returned|
|name|query|string|false|Name value expected or comma separated list of values (Intern, Junior, VP, S1, A1)|
|created_at_from|query|integer|false|CreatedAt From date in Unix time (AKA Epoch time, seconds since 00:00:00 UTC on 1 January 1970)|
|created_at_until|query|integer|false|CreatedAt Until date in Unix time (AKA Epoch time, seconds since 00:00:00 UTC on 1 January 1970)|
|Authorization|header|string|true|The Authorization Header and Token|

> Example Response

> 200 Response

```json
[
  {
    "children": [
      "[56b9938a9f176c1100e7e125]"
    ],
    "company": "56b1258a9f176c1100e7e993",
    "id": "56b1258a9f176c1100e7e993",
    "level": 1,
    "localized_names": "fr:featured-fr,de:gerfeatured,pt_br:Novidades,es_la:Spanish Featured,deu:Neuigkeiten",
    "name": "Featured",
    "order": [
      "[56b9938a9f176c1100e7e125]"
    ],
    "parent": "56b1258a9f176c1100e7e993",
    "show_external": true
  }
]
```

<h3 id="get-level-list-responses">Responses</h3>

|Status|Meaning|Description|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|

<h2 id="Creates a Level (An Organization Level)">Creates a Level (An Organization Level)</h2>

> Code Sample

```shell
# You can also use wget
curl -X POST https://usw2-oapi.continu.co/api/v1/data/levels \
  -H 'Content-Type: application/json' \
  -H 'Accept: */*' \
  -H 'Authorization: string'

```

This endpoint creates a Level

> Body parameter

```json
{
  "children": [
    "[56b9938a9f176c1100e7e125]"
  ],
  "company": "56b1258a9f176c1100e7e993",
  "created_at": "2020-01-28T09:13:30.466-06:00",
  "id": "56b1258a9f176c1100e7e993",
  "isCategory": true,
  "isDepartment": true,
  "isGrade": true,
  "isLabel": true,
  "isLocation": true,
  "isOrgLevel": true,
  "isTeam": true,
  "level": 1,
  "localized_names": "fr:featured-fr,de:gerfeatured,pt_br:Novidades,es_la:Spanish Featured,deu:Neuigkeiten",
  "name": "Featured",
  "order": [
    "[56b9938a9f176c1100e7e125]"
  ],
  "parent": "56b1258a9f176c1100e7e993",
  "show_external": true,
  "updated_at": "2020-04-28T09:13:30.466-06:00"
}
```

### HTTP Request
`POST https://usw2-oapi.continu.co/api/v1/data/levels`

<h3 id="creates-a-level-(an-organization-level)-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|The Authorization Header and Token|
|body|body|[controllers.Segmentation](#schemacontrollers.segmentation)|true|The Level to create|
|» children|body|[string]|false|none|
|» company|body|string|false|none|
|» created_at|body|string|false|none|
|» id|body|string|false|none|
|» isCategory|body|boolean|false|none|
|» isDepartment|body|boolean|false|none|
|» isGrade|body|boolean|false|none|
|» isLabel|body|boolean|false|none|
|» isLocation|body|boolean|false|none|
|» isOrgLevel|body|boolean|false|none|
|» isTeam|body|boolean|false|none|
|» level|body|integer|false|none|
|» localized_names|body|string|false|none|
|» name|body|string|false|none|
|» order|body|[string]|false|none|
|» parent|body|string|false|none|
|» show_external|body|boolean|false|none|
|» updated_at|body|string|false|none|

> Example Response

> 201 Response

<h3 id="creates-a-level-(an-organization-level)-responses">Responses</h3>

|Status|Meaning|Description|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Created|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Conflict|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|

<h2 id="Get Level by id">Get Level by id</h2>

> Code Sample

```shell
# You can also use wget
curl -X GET https://usw2-oapi.continu.co/api/v1/data/levels/{id} \
  -H 'Accept: */*' \
  -H 'Authorization: string'

```

This endpoint gets the level corresponding to the given id.

### HTTP Request
`GET https://usw2-oapi.continu.co/api/v1/data/levels/{id}`

<h3 id="get-level-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id for the level requested.|
|Authorization|header|string|true|The Authorization Header and Token|

> Example Response

> 200 Response

<h3 id="get-level-by-id-responses">Responses</h3>

|Status|Meaning|Description|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|

<h2 id="Replace a Level">Replace a Level</h2>

> Code Sample

```shell
# You can also use wget
curl -X PUT https://usw2-oapi.continu.co/api/v1/data/levels/{id} \
  -H 'Content-Type: application/json' \
  -H 'Accept: */*' \
  -H 'Authorization: string'

```

This endpoint replaces/updates a whole Level instance

> Body parameter

```json
{
  "children": [
    "[56b9938a9f176c1100e7e125]"
  ],
  "company": "56b1258a9f176c1100e7e993",
  "created_at": "2020-01-28T09:13:30.466-06:00",
  "id": "56b1258a9f176c1100e7e993",
  "isCategory": true,
  "isDepartment": true,
  "isGrade": true,
  "isLabel": true,
  "isLocation": true,
  "isOrgLevel": true,
  "isTeam": true,
  "level": 1,
  "localized_names": "fr:featured-fr,de:gerfeatured,pt_br:Novidades,es_la:Spanish Featured,deu:Neuigkeiten",
  "name": "Featured",
  "order": [
    "[56b9938a9f176c1100e7e125]"
  ],
  "parent": "56b1258a9f176c1100e7e993",
  "show_external": true,
  "updated_at": "2020-04-28T09:13:30.466-06:00"
}
```

### HTTP Request
`PUT https://usw2-oapi.continu.co/api/v1/data/levels/{id}`

<h3 id="replace-a-level-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id for the Level requested to be replaced.|
|Authorization|header|string|true|The Authorization Header and Token|
|body|body|[controllers.Segmentation](#schemacontrollers.segmentation)|true|The Level to replace|
|» children|body|[string]|false|none|
|» company|body|string|false|none|
|» created_at|body|string|false|none|
|» id|body|string|false|none|
|» isCategory|body|boolean|false|none|
|» isDepartment|body|boolean|false|none|
|» isGrade|body|boolean|false|none|
|» isLabel|body|boolean|false|none|
|» isLocation|body|boolean|false|none|
|» isOrgLevel|body|boolean|false|none|
|» isTeam|body|boolean|false|none|
|» level|body|integer|false|none|
|» localized_names|body|string|false|none|
|» name|body|string|false|none|
|» order|body|[string]|false|none|
|» parent|body|string|false|none|
|» show_external|body|boolean|false|none|
|» updated_at|body|string|false|none|

> Example Response

> 400 Response

<h3 id="replace-a-level-responses">Responses</h3>

|Status|Meaning|Description|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|none|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|

<h1 id="continu-api-locations">Locations</h1>

<h2 id="Get Location List">Get Location List</h2>

> Code Sample

```shell
# You can also use wget
curl -X GET https://usw2-oapi.continu.co/api/v1/data/locations \
  -H 'Accept: application/json' \
  -H 'Authorization: string'

```

This endpoint lists all Location's briefs, you may return them as a list size of 50 records, 100, or 500, and in a "compact", "summary", or "full" list type.
If omitted, the default values for the list are "compact" and 50 records.
If you want to return the next batch of 50, 100, or 500 records
The list To get the next group of records send id_from argument with the last id you received.

### HTTP Request
`GET https://usw2-oapi.continu.co/api/v1/data/locations`

<h3 id="get-location-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_from|query|string|false|Optional Id from the last record previously returned. This will be the Id from which data is returned|
|list_size|query|string|false|Size of the returned list. This value can be 50, 100, or 500|
|list_type|query|string|false|Type of List to return. This value can be compact, summary, or full indicating the number of fields included in each element returned|
|name|query|string|false|Name value expected or comma separated list of values (Detroit, Madrid, New York)|
|created_at_from|query|integer|false|CreatedAt From date in Unix time (AKA Epoch time, seconds since 00:00:00 UTC on 1 January 1970)|
|created_at_until|query|integer|false|CreatedAt Until date in Unix time (AKA Epoch time, seconds since 00:00:00 UTC on 1 January 1970)|
|Authorization|header|string|true|The Authorization Header and Token|

> Example Response

> 200 Response

```json
[
  {
    "children": [
      "[56b9938a9f176c1100e7e125]"
    ],
    "company": "56b1258a9f176c1100e7e993",
    "id": "56b1258a9f176c1100e7e993",
    "level": 1,
    "localized_names": "fr:featured-fr,de:gerfeatured,pt_br:Novidades,es_la:Spanish Featured,deu:Neuigkeiten",
    "name": "Featured",
    "order": [
      "[56b9938a9f176c1100e7e125]"
    ],
    "parent": "56b1258a9f176c1100e7e993",
    "show_external": true
  }
]
```

<h3 id="get-location-list-responses">Responses</h3>

|Status|Meaning|Description|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|

<h2 id="Creates a Location">Creates a Location</h2>

> Code Sample

```shell
# You can also use wget
curl -X POST https://usw2-oapi.continu.co/api/v1/data/locations \
  -H 'Content-Type: application/json' \
  -H 'Accept: */*' \
  -H 'Authorization: string'

```

This endpoint creates a Location instance

> Body parameter

```json
{
  "children": [
    "[56b9938a9f176c1100e7e125]"
  ],
  "company": "56b1258a9f176c1100e7e993",
  "created_at": "2020-01-28T09:13:30.466-06:00",
  "id": "56b1258a9f176c1100e7e993",
  "isCategory": true,
  "isDepartment": true,
  "isGrade": true,
  "isLabel": true,
  "isLocation": true,
  "isOrgLevel": true,
  "isTeam": true,
  "level": 1,
  "localized_names": "fr:featured-fr,de:gerfeatured,pt_br:Novidades,es_la:Spanish Featured,deu:Neuigkeiten",
  "name": "Featured",
  "order": [
    "[56b9938a9f176c1100e7e125]"
  ],
  "parent": "56b1258a9f176c1100e7e993",
  "show_external": true,
  "updated_at": "2020-04-28T09:13:30.466-06:00"
}
```

### HTTP Request
`POST https://usw2-oapi.continu.co/api/v1/data/locations`

<h3 id="creates-a-location-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|The Authorization Header and Token|
|body|body|[controllers.Segmentation](#schemacontrollers.segmentation)|true|The Location to create|
|» children|body|[string]|false|none|
|» company|body|string|false|none|
|» created_at|body|string|false|none|
|» id|body|string|false|none|
|» isCategory|body|boolean|false|none|
|» isDepartment|body|boolean|false|none|
|» isGrade|body|boolean|false|none|
|» isLabel|body|boolean|false|none|
|» isLocation|body|boolean|false|none|
|» isOrgLevel|body|boolean|false|none|
|» isTeam|body|boolean|false|none|
|» level|body|integer|false|none|
|» localized_names|body|string|false|none|
|» name|body|string|false|none|
|» order|body|[string]|false|none|
|» parent|body|string|false|none|
|» show_external|body|boolean|false|none|
|» updated_at|body|string|false|none|

> Example Response

> 201 Response

<h3 id="creates-a-location-responses">Responses</h3>

|Status|Meaning|Description|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Created|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Conflict|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|

<h2 id="Get Location by id">Get Location by id</h2>

> Code Sample

```shell
# You can also use wget
curl -X GET https://usw2-oapi.continu.co/api/v1/data/locations/{id} \
  -H 'Accept: */*' \
  -H 'Authorization: string'

```

This endpoint gets the location corresponding to the given id.

### HTTP Request
`GET https://usw2-oapi.continu.co/api/v1/data/locations/{id}`

<h3 id="get-location-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id for the location requested.|
|Authorization|header|string|true|The Authorization Header and Token|

> Example Response

> 200 Response

<h3 id="get-location-by-id-responses">Responses</h3>

|Status|Meaning|Description|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|

<h2 id="Replace a Location">Replace a Location</h2>

> Code Sample

```shell
# You can also use wget
curl -X PUT https://usw2-oapi.continu.co/api/v1/data/locations/{id} \
  -H 'Content-Type: application/json' \
  -H 'Accept: */*' \
  -H 'Authorization: string'

```

This endpoint replaces/updates a whole Location instance

> Body parameter

```json
{
  "children": [
    "[56b9938a9f176c1100e7e125]"
  ],
  "company": "56b1258a9f176c1100e7e993",
  "created_at": "2020-01-28T09:13:30.466-06:00",
  "id": "56b1258a9f176c1100e7e993",
  "isCategory": true,
  "isDepartment": true,
  "isGrade": true,
  "isLabel": true,
  "isLocation": true,
  "isOrgLevel": true,
  "isTeam": true,
  "level": 1,
  "localized_names": "fr:featured-fr,de:gerfeatured,pt_br:Novidades,es_la:Spanish Featured,deu:Neuigkeiten",
  "name": "Featured",
  "order": [
    "[56b9938a9f176c1100e7e125]"
  ],
  "parent": "56b1258a9f176c1100e7e993",
  "show_external": true,
  "updated_at": "2020-04-28T09:13:30.466-06:00"
}
```

### HTTP Request
`PUT https://usw2-oapi.continu.co/api/v1/data/locations/{id}`

<h3 id="replace-a-location-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id for the Location requested to be replaced.|
|Authorization|header|string|true|The Authorization Header and Token|
|body|body|[controllers.Segmentation](#schemacontrollers.segmentation)|true|The Location to replace|
|» children|body|[string]|false|none|
|» company|body|string|false|none|
|» created_at|body|string|false|none|
|» id|body|string|false|none|
|» isCategory|body|boolean|false|none|
|» isDepartment|body|boolean|false|none|
|» isGrade|body|boolean|false|none|
|» isLabel|body|boolean|false|none|
|» isLocation|body|boolean|false|none|
|» isOrgLevel|body|boolean|false|none|
|» isTeam|body|boolean|false|none|
|» level|body|integer|false|none|
|» localized_names|body|string|false|none|
|» name|body|string|false|none|
|» order|body|[string]|false|none|
|» parent|body|string|false|none|
|» show_external|body|boolean|false|none|
|» updated_at|body|string|false|none|

> Example Response

> 400 Response

<h3 id="replace-a-location-responses">Responses</h3>

|Status|Meaning|Description|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|none|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|

<h1 id="continu-api-skills">Skills</h1>

<h2 id="Get Skill List">Get Skill List</h2>

> Code Sample

```shell
# You can also use wget
curl -X GET https://usw2-oapi.continu.co/api/v1/data/skills \
  -H 'Accept: application/json' \
  -H 'Authorization: string'

```

This endpoint lists all Skill briefs, you may return them as a list size of 50 records, 100, or 500, and in a "compact", "summary", or "full" list type.
If omitted, the default values for the list are "compact" and 50 records.
If you want to return the next batch of 50, 100, or 500 records
The list To get the next group of records send id_from argument with the last id you received.

### HTTP Request
`GET https://usw2-oapi.continu.co/api/v1/data/skills`

<h3 id="get-skill-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_from|query|string|false|Optional Id from the last record previously returned. This will be the Id from which data is returned|
|list_size|query|string|false|Size of the returned list. This value can be 50, 100, or 500|
|list_type|query|string|false|Type of List to return. This value can be compact, summary, or full indicating the number of fields included in each element returned|
|name|query|string|false|Name value expected or comma separated list of values (JavaScript, Speaks German, PowerPoint)|
|created_at_from|query|integer|false|CreatedAt From date in Unix time (AKA Epoch time, seconds since 00:00:00 UTC on 1 January 1970)|
|created_at_until|query|integer|false|CreatedAt Until date in Unix time (AKA Epoch time, seconds since 00:00:00 UTC on 1 January 1970)|
|Authorization|header|string|true|The Authorization Header and Token|

> Example Response

> 200 Response

```json
[
  {
    "blocked": false,
    "blocked_date": "2020-04-28T09:13:30.466-06:00",
    "company": "56b1258a9f176c1100e7e993",
    "created_at": "2020-01-28T09:13:30.466-06:00",
    "id": "56b1258a9f176c1100e7e993",
    "name": "JavaScript",
    "user": "56b1258a9f176c1100e7e993",
    "user_blocked": "56b1258a9f176c1100e7e993"
  }
]
```

<h3 id="get-skill-list-responses">Responses</h3>

|Status|Meaning|Description|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|

<h2 id="Creates a Skill">Creates a Skill</h2>

> Code Sample

```shell
# You can also use wget
curl -X POST https://usw2-oapi.continu.co/api/v1/data/skills \
  -H 'Content-Type: application/json' \
  -H 'Accept: */*' \
  -H 'Authorization: string'

```

This endpoint creates a Skill instance

> Body parameter

```json
{
  "blocked": false,
  "blocked_date": "2020-04-28T09:13:30.466-06:00",
  "company": "56b1258a9f176c1100e7e993",
  "created_at": "2020-01-28T09:13:30.466-06:00",
  "id": "56b1258a9f176c1100e7e993",
  "name": "JavaScript",
  "updated_at": "2020-04-28T09:13:30.466-06:00",
  "user": "56b1258a9f176c1100e7e993",
  "user_blocked": "56b1258a9f176c1100e7e993"
}
```

### HTTP Request
`POST https://usw2-oapi.continu.co/api/v1/data/skills`

<h3 id="creates-a-skill-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|The Authorization Header and Token|
|body|body|[controllers.Skill](#schemacontrollers.skill)|true|The Skill to create|
|» blocked|body|boolean|false|none|
|» blocked_date|body|string|false|none|
|» company|body|string|false|none|
|» created_at|body|string|false|none|
|» id|body|string|false|none|
|» name|body|string|false|none|
|» updated_at|body|string|false|none|
|» user|body|string|false|none|
|» user_blocked|body|string|false|none|

> Example Response

> 201 Response

<h3 id="creates-a-skill-responses">Responses</h3>

|Status|Meaning|Description|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Created|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Conflict|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|

<h2 id="Get Skill by id">Get Skill by id</h2>

> Code Sample

```shell
# You can also use wget
curl -X GET https://usw2-oapi.continu.co/api/v1/data/skills/{id} \
  -H 'Accept: */*' \
  -H 'Authorization: string'

```

This endpoint gets the skill corresponding to the given id.

### HTTP Request
`GET https://usw2-oapi.continu.co/api/v1/data/skills/{id}`

<h3 id="get-skill-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id for the skill requested.|
|Authorization|header|string|true|The Authorization Header and Token|

> Example Response

> 200 Response

<h3 id="get-skill-by-id-responses">Responses</h3>

|Status|Meaning|Description|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|

<h2 id="Replace a Skill">Replace a Skill</h2>

> Code Sample

```shell
# You can also use wget
curl -X PUT https://usw2-oapi.continu.co/api/v1/data/skills/{id} \
  -H 'Content-Type: application/json' \
  -H 'Accept: */*' \
  -H 'Authorization: string'

```

This endpoint replaces/updates a whole Skill instance

> Body parameter

```json
{
  "blocked": false,
  "blocked_date": "2020-04-28T09:13:30.466-06:00",
  "company": "56b1258a9f176c1100e7e993",
  "created_at": "2020-01-28T09:13:30.466-06:00",
  "id": "56b1258a9f176c1100e7e993",
  "name": "JavaScript",
  "updated_at": "2020-04-28T09:13:30.466-06:00",
  "user": "56b1258a9f176c1100e7e993",
  "user_blocked": "56b1258a9f176c1100e7e993"
}
```

### HTTP Request
`PUT https://usw2-oapi.continu.co/api/v1/data/skills/{id}`

<h3 id="replace-a-skill-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id for the Skill requested to be replaced.|
|Authorization|header|string|true|The Authorization Header and Token|
|body|body|[controllers.Skill](#schemacontrollers.skill)|true|The Skill to replace|
|» blocked|body|boolean|false|none|
|» blocked_date|body|string|false|none|
|» company|body|string|false|none|
|» created_at|body|string|false|none|
|» id|body|string|false|none|
|» name|body|string|false|none|
|» updated_at|body|string|false|none|
|» user|body|string|false|none|
|» user_blocked|body|string|false|none|

> Example Response

> 400 Response

<h3 id="replace-a-skill-responses">Responses</h3>

|Status|Meaning|Description|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|none|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|

<h1 id="continu-api-teams">Teams</h1>

<h2 id="Get Team List">Get Team List</h2>

> Code Sample

```shell
# You can also use wget
curl -X GET https://usw2-oapi.continu.co/api/v1/data/teams \
  -H 'Accept: application/json' \
  -H 'Authorization: string'

```

This endpoint lists all Team's briefs, you may return them as a list size of 50 records, 100, or 500, and in a "compact", "summary", or "full" list type.
If omitted, the default values for the list are "compact" and 50 records.
If you want to return the next batch of 50, 100, or 500 records
The list To get the next group of records send id_from argument with the last id you received.

### HTTP Request
`GET https://usw2-oapi.continu.co/api/v1/data/teams`

<h3 id="get-team-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_from|query|string|false|Optional Id from the last record previously returned. This will be the Id from which data is returned|
|list_size|query|string|false|Size of the returned list. This value can be 50, 100, or 500|
|list_type|query|string|false|Type of List to return. This value can be compact, summary, or full indicating the number of fields included in each element returned|
|name|query|string|false|Name value expected or comma separated list of values (A-Team, Engineers, Master of Sales)|
|created_at_from|query|integer|false|CreatedAt From date in Unix time (AKA Epoch time, seconds since 00:00:00 UTC on 1 January 1970)|
|created_at_until|query|integer|false|CreatedAt Until date in Unix time (AKA Epoch time, seconds since 00:00:00 UTC on 1 January 1970)|
|Authorization|header|string|true|The Authorization Header and Token|

> Example Response

> 200 Response

```json
[
  {
    "children": [
      "[56b9938a9f176c1100e7e125]"
    ],
    "company": "56b1258a9f176c1100e7e993",
    "id": "56b1258a9f176c1100e7e993",
    "level": 1,
    "localized_names": "fr:featured-fr,de:gerfeatured,pt_br:Novidades,es_la:Spanish Featured,deu:Neuigkeiten",
    "name": "Featured",
    "order": [
      "[56b9938a9f176c1100e7e125]"
    ],
    "parent": "56b1258a9f176c1100e7e993",
    "show_external": true
  }
]
```

<h3 id="get-team-list-responses">Responses</h3>

|Status|Meaning|Description|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|

<h2 id="Creates a Team">Creates a Team</h2>

> Code Sample

```shell
# You can also use wget
curl -X POST https://usw2-oapi.continu.co/api/v1/data/teams \
  -H 'Content-Type: application/json' \
  -H 'Accept: */*' \
  -H 'Authorization: string'

```

This endpoint creates a Team instance

> Body parameter

```json
{
  "children": [
    "[56b9938a9f176c1100e7e125]"
  ],
  "company": "56b1258a9f176c1100e7e993",
  "created_at": "2020-01-28T09:13:30.466-06:00",
  "id": "56b1258a9f176c1100e7e993",
  "isCategory": true,
  "isDepartment": true,
  "isGrade": true,
  "isLabel": true,
  "isLocation": true,
  "isOrgLevel": true,
  "isTeam": true,
  "level": 1,
  "localized_names": "fr:featured-fr,de:gerfeatured,pt_br:Novidades,es_la:Spanish Featured,deu:Neuigkeiten",
  "name": "Featured",
  "order": [
    "[56b9938a9f176c1100e7e125]"
  ],
  "parent": "56b1258a9f176c1100e7e993",
  "show_external": true,
  "updated_at": "2020-04-28T09:13:30.466-06:00"
}
```

### HTTP Request
`POST https://usw2-oapi.continu.co/api/v1/data/teams`

<h3 id="creates-a-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|The Authorization Header and Token|
|body|body|[controllers.Segmentation](#schemacontrollers.segmentation)|true|The Team to create|
|» children|body|[string]|false|none|
|» company|body|string|false|none|
|» created_at|body|string|false|none|
|» id|body|string|false|none|
|» isCategory|body|boolean|false|none|
|» isDepartment|body|boolean|false|none|
|» isGrade|body|boolean|false|none|
|» isLabel|body|boolean|false|none|
|» isLocation|body|boolean|false|none|
|» isOrgLevel|body|boolean|false|none|
|» isTeam|body|boolean|false|none|
|» level|body|integer|false|none|
|» localized_names|body|string|false|none|
|» name|body|string|false|none|
|» order|body|[string]|false|none|
|» parent|body|string|false|none|
|» show_external|body|boolean|false|none|
|» updated_at|body|string|false|none|

> Example Response

> 201 Response

<h3 id="creates-a-team-responses">Responses</h3>

|Status|Meaning|Description|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Created|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Conflict|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|

<h2 id="Get Team by id">Get Team by id</h2>

> Code Sample

```shell
# You can also use wget
curl -X GET https://usw2-oapi.continu.co/api/v1/data/teams/{id} \
  -H 'Accept: */*' \
  -H 'Authorization: string'

```

This endpoint gets the team corresponding to the given id.

### HTTP Request
`GET https://usw2-oapi.continu.co/api/v1/data/teams/{id}`

<h3 id="get-team-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id for the team requested.|
|Authorization|header|string|true|The Authorization Header and Token|

> Example Response

> 200 Response

<h3 id="get-team-by-id-responses">Responses</h3>

|Status|Meaning|Description|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|

<h2 id="Replace a Team">Replace a Team</h2>

> Code Sample

```shell
# You can also use wget
curl -X PUT https://usw2-oapi.continu.co/api/v1/data/teams/{id} \
  -H 'Content-Type: application/json' \
  -H 'Accept: */*' \
  -H 'Authorization: string'

```

This endpoint replaces/updates a whole Team instance

> Body parameter

```json
{
  "children": [
    "[56b9938a9f176c1100e7e125]"
  ],
  "company": "56b1258a9f176c1100e7e993",
  "created_at": "2020-01-28T09:13:30.466-06:00",
  "id": "56b1258a9f176c1100e7e993",
  "isCategory": true,
  "isDepartment": true,
  "isGrade": true,
  "isLabel": true,
  "isLocation": true,
  "isOrgLevel": true,
  "isTeam": true,
  "level": 1,
  "localized_names": "fr:featured-fr,de:gerfeatured,pt_br:Novidades,es_la:Spanish Featured,deu:Neuigkeiten",
  "name": "Featured",
  "order": [
    "[56b9938a9f176c1100e7e125]"
  ],
  "parent": "56b1258a9f176c1100e7e993",
  "show_external": true,
  "updated_at": "2020-04-28T09:13:30.466-06:00"
}
```

### HTTP Request
`PUT https://usw2-oapi.continu.co/api/v1/data/teams/{id}`

<h3 id="replace-a-team-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id for the Team requested to be replaced.|
|Authorization|header|string|true|The Authorization Header and Token|
|body|body|[controllers.Segmentation](#schemacontrollers.segmentation)|true|The Team to replace|
|» children|body|[string]|false|none|
|» company|body|string|false|none|
|» created_at|body|string|false|none|
|» id|body|string|false|none|
|» isCategory|body|boolean|false|none|
|» isDepartment|body|boolean|false|none|
|» isGrade|body|boolean|false|none|
|» isLabel|body|boolean|false|none|
|» isLocation|body|boolean|false|none|
|» isOrgLevel|body|boolean|false|none|
|» isTeam|body|boolean|false|none|
|» level|body|integer|false|none|
|» localized_names|body|string|false|none|
|» name|body|string|false|none|
|» order|body|[string]|false|none|
|» parent|body|string|false|none|
|» show_external|body|boolean|false|none|
|» updated_at|body|string|false|none|

> Example Response

> 400 Response

<h3 id="replace-a-team-responses">Responses</h3>

|Status|Meaning|Description|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|none|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|

<h1 id="continu-api-users">Users</h1>

<h2 id="Get User List">Get User List</h2>

> Code Sample

```shell
# You can also use wget
curl -X GET https://usw2-oapi.continu.co/api/v1/data/users \
  -H 'Accept: application/json' \
  -H 'Authorization: string'

```

This endpoint lists all user's briefs, you may return them as a list size of 50 records, 100, 1000, etc, and in a "compact", "summary", or "full" list type.
If omitted, the default values for the list are "compact" and 50 records. You have the option to specify values for any of the fields returned regardless of the list type.
This can be a single value, or lists for string fields like emails, roles, and even from/until ranges for date fields like create_at, or first_login.
If you want to return the next batch of 50, 100, or 500 records
The list To get the next group of records send id_from argument with the last id you received.

### HTTP Request
`GET https://usw2-oapi.continu.co/api/v1/data/users`

<h3 id="get-user-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_from|query|string|false|Optional Id from the last record previously returned. This will be the Id from which data is returned|
|list_size|query|string|false|Size of the returned list. This value can be 50, 100, 500, 1000, or 5000|
|list_type|query|string|false|Type of List to return. This value can be compact, summary, or full indicating the number of fields included in each element returned|
|first_name|query|string|false|First Name value expected or comma separated list of values (George, Becky, Michael)|
|last_name|query|string|false|Last Name value expected or comma separated list of values (Smith, Senna, Carlson)|
|email|query|string|false|Email value or comma separated list of emails for which to return values|
|role|query|string|false|Role value expected or comma separated list of values (admin, user, external)|
|userid|query|string|false|UserId value expected (employee id, phone number, client defined id for users)|
|locations|query|string|false|Location value expected or comma separated list of values (56b9938a9f176c1100e7e156, 56b9938a9f176c1100e7e152, 56b9938a9f176c1100e7e154)|
|departments|query|string|false|Department value expected or comma separated list of values (56b9938a9f176c1100e7e156, 56b9938a9f176c1100e7e152, 56b9938a9f176c1100e7e154)|
|teams|query|string|false|Team value expected or comma separated list of values (56b9938a9f176c1100e7e156, 56b9938a9f176c1100e7e152, 56b9938a9f176c1100e7e154)|
|levels|query|string|false|Level value expected or comma separated list of values (56b9938a9f176c1100e7e156, 56b9938a9f176c1100e7e152, 56b9938a9f176c1100e7e154)|
|grades|query|string|false|Grade value expected or comma separated list of values (56b9938a9f176c1100e7e156, 56b9938a9f176c1100e7e152, 56b9938a9f176c1100e7e154)|
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
    "company": "56b1258a9f176c1100e7e993",
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
    "linked_grade": "56b9938a9f176c1100e7e156",
    "linked_locations": [
      "56b9938a9f176c1100e7e125"
    ],
    "linked_org_level": "56b9938a9f176c1100e7e156",
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

<h2 id="Creates a User">Creates a User</h2>

> Code Sample

```shell
# You can also use wget
curl -X POST https://usw2-oapi.continu.co/api/v1/data/users \
  -H 'Content-Type: application/json' \
  -H 'Accept: */*' \
  -H 'Authorization: string'

```

This endpoint creates a User instance

> Body parameter

```json
{
  "address": "21 Jump St",
  "buddy_email": "buddy@continu.co",
  "company": "56b1258a9f176c1100e7e993",
  "country": "USA",
  "created_at": "2020-01-28T09:13:30.466-06:00",
  "distributor": "Distributor A",
  "email": "theresa@continu.co",
  "first_login": "2020-01-28T09:13:30.466-06:00",
  "first_name": "Theresa",
  "full_name": "Theresa Jenkins",
  "group": "Group A",
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
  "linked_departments": [
    "56b9938a9f176c1100e7e156"
  ],
  "linked_grade": "56b9938a9f176c1100e7e156",
  "linked_locations": [
    "56b9938a9f176c1100e7e125"
  ],
  "linked_org_level": "56b9938a9f176c1100e7e156",
  "linked_teams": [
    "56b9938a9f176c1100e7e156"
  ],
  "manager_email": "manager@continu.co",
  "password": "my password",
  "provisioning_key": "string",
  "provisioning_status": "inviting",
  "region": "Central USA",
  "role": "user",
  "skills": [
    "56b9938a9f176c1100e7e156"
  ],
  "slack_dc": "A3Q47DZPB",
  "slack_id": "U0CSVAS3Z",
  "slack_last_attempt": "2020-01-28T09:13:30.466-06:00",
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
`POST https://usw2-oapi.continu.co/api/v1/data/users`

<h3 id="creates-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Authorization|header|string|true|The Authorization Header and Token|
|mute|query|string|false|Optionally, set to true if you don't want any emails to be sent. Default is false. Allowed values true/false, t/f, 1/0.|
|body|body|[controllers.User](#schemacontrollers.user)|true|The User to create|
|» address|body|string|false|none|
|» buddy_email|body|string|false|none|
|» company|body|string|false|none|
|» country|body|string|false|none|
|» created_at|body|string|false|none|
|» distributor|body|string|false|none|
|» email|body|string|false|none|
|» first_login|body|string|false|none|
|» first_name|body|string|false|none|
|» full_name|body|string|false|none|
|» group|body|string|false|none|
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
|» linked_departments|body|[string]|false|none|
|» linked_grade|body|string|false|none|
|» linked_locations|body|[string]|false|none|
|» linked_org_level|body|string|false|none|
|» linked_teams|body|[string]|false|none|
|» manager_email|body|string|false|none|
|» password|body|string|false|none|
|» provisioning_key|body|string|false|none|
|» provisioning_status|body|string|false|none|
|» region|body|string|false|none|
|» role|body|string|false|none|
|» skills|body|[string]|false|none|
|» slack_dc|body|string|false|none|
|» slack_id|body|string|false|none|
|» slack_last_attempt|body|string|false|none|
|» social_links|body|[[controllers.SocialLink](#schemacontrollers.sociallink)]|false|none|
|»» name|body|string|false|none|
|»» value|body|string|false|none|
|» suspended_on|body|string|false|none|
|» updated_at|body|string|false|none|
|» userid|body|string|false|none|

> Example Response

> 201 Response

<h3 id="creates-a-user-responses">Responses</h3>

|Status|Meaning|Description|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Created|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Conflict|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|

<h2 id="Get User by id">Get User by id</h2>

> Code Sample

```shell
# You can also use wget
curl -X GET https://usw2-oapi.continu.co/api/v1/data/users/{id} \
  -H 'Accept: */*' \
  -H 'Authorization: string'

```

This endpoint gets the user corresponding to the given id.

### HTTP Request
`GET https://usw2-oapi.continu.co/api/v1/data/users/{id}`

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

<h2 id="Updates/Patches a User">Updates/Patches a User</h2>

> Code Sample

```shell
# You can also use wget
curl -X PATCH https://usw2-oapi.continu.co/api/v1/data/users/{id} \
  -H 'Content-Type: application/json' \
  -H 'Accept: */*' \
  -H 'Authorization: string'

```

This endpoint updates a partial User instance

> Body parameter

```json
{
  "address": "21 Jump St",
  "buddy_email": "buddy@continu.co",
  "country": "USA",
  "distributor": "Distributor A",
  "email": "theresa@continu.co",
  "first_name": "Theresa",
  "group": "Group A",
  "hired_on": "2020-04-28T09:13:30.466-06:00",
  "image": "https://d2277n3gvptnup.cloudfront.net/images/afcaf0c3-b0db-4313-b42e-bcabdfae35cb.jpg",
  "is_collaborator": true,
  "is_manager": false,
  "is_suspended": false,
  "job_title": "Marketing Manager",
  "language": "en",
  "last_name": "Jenkins",
  "linked_departments": [
    "56b9938a9f176c1100e7e156"
  ],
  "linked_grade": "56b9938a9f176c1100e7e156",
  "linked_locations": [
    "56b9938a9f176c1100e7e125"
  ],
  "linked_org_level": "56b9938a9f176c1100e7e156",
  "linked_teams": [
    "56b9938a9f176c1100e7e156"
  ],
  "manager_email": "manager@continu.co",
  "password": "my password",
  "region": "Central USA",
  "role": "user",
  "skills": [
    "56b9938a9f176c1100e7e156"
  ],
  "slack_dc": "A3Q47DZPB",
  "slack_id": "U0CSVAS3Z",
  "social_links": [
    {
      "name": "linkedin",
      "value": "https://link.to.linkedin.com"
    }
  ],
  "userid": "123456789"
}
```

### HTTP Request
`PATCH https://usw2-oapi.continu.co/api/v1/data/users/{id}`

<h3 id="updates/patches-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Id for the user requested to be replaced.|
|Authorization|header|string|true|The Authorization Header and Token|
|body|body|[controllers.UpdateUser](#schemacontrollers.updateuser)|true|The UpdateUser to patch User with|
|» address|body|string|false|none|
|» buddy_email|body|string|false|none|
|» country|body|string|false|none|
|» distributor|body|string|false|none|
|» email|body|string|false|none|
|» first_name|body|string|false|none|
|» group|body|string|false|none|
|» hired_on|body|string|false|none|
|» image|body|string|false|none|
|» is_collaborator|body|boolean|false|none|
|» is_manager|body|boolean|false|none|
|» is_suspended|body|boolean|false|none|
|» job_title|body|string|false|none|
|» language|body|string|false|none|
|» last_name|body|string|false|none|
|» linked_departments|body|[string]|false|none|
|» linked_grade|body|string|false|none|
|» linked_locations|body|[string]|false|none|
|» linked_org_level|body|string|false|none|
|» linked_teams|body|[string]|false|none|
|» manager_email|body|string|false|none|
|» password|body|string|false|none|
|» region|body|string|false|none|
|» role|body|string|false|none|
|» skills|body|[string]|false|none|
|» slack_dc|body|string|false|none|
|» slack_id|body|string|false|none|
|» social_links|body|[[controllers.SocialLink](#schemacontrollers.sociallink)]|false|none|
|»» name|body|string|false|none|
|»» value|body|string|false|none|
|» userid|body|string|false|none|

> Example Response

> 400 Response

<h3 id="updates/patches-a-user-responses">Responses</h3>

|Status|Meaning|Description|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|none|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|

