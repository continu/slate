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

[object Object]
undefined

<h1 id="rateLimit">Rate Limit</h1>
We currently limit the number of calls a single client can make to X requests per minute. If you exceed the limit, we return a 429 Too Many Requests response.

Every response from our API contains the following headers:

|Header|Description|
|-----|-----|
|Example|Example|

<h1 id="continu-s-open-api-assessments">Assessments</h1>

## Lists User Assessments Completion Information for all the user emails in the mandatory for_users argument

`GET /completion/assessments`

This endpoints lists all Assessments for specific users. Users should be specified as a comma separated list of email addresses for which the Assessment information is required.
You also have the option to specify a date range using the from or until Unix Epoch timestamp.

<h3 id="lists-user-assessments-completion-information-for-all-the-user-emails-in-the-mandatory-for_users-argument-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|for_users|query|string|true|Comma Separated List of users for which to return the AssessmentsList|
|from|query|integer|false|From date in Unix time (AKA Epoch time, seconds since 00:00:00 UTC on 1 January 1970)|
|until|query|integer|false|Until date in Unix time (AKA Epoch time, seconds since 00:00:00 UTC on 1 January 1970)|
|Authorization|header|string|true|The Authorization Header and Token|

> Example responses

> 200 Response

```json
{
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "assessments": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "attempts": {
              "type": "integer"
            },
            "completion_status": {
              "type": "string"
            },
            "grading_status": {
              "type": "string"
            },
            "id": {
              "type": "string"
            },
            "passed_date": {
              "type": "string"
            },
            "score": {
              "type": "integer"
            },
            "start_date": {
              "type": "string"
            },
            "title": {
              "type": "string"
            },
            "type": {
              "type": "string"
            }
          }
        }
      },
      "email": {
        "type": "string"
      },
      "first_name": {
        "type": "string"
      },
      "last_name": {
        "type": "string"
      },
      "user_id": {
        "type": "string"
      }
    }
  }
}
```

<h3 id="lists-user-assessments-completion-information-for-all-the-user-emails-in-the-mandatory-for_users-argument-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|number|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|number|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|number|

<h3 id="lists-user-assessments-completion-information-for-all-the-user-emails-in-the-mandatory-for_users-argument-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[controllers.UserAssessments](#schemacontrollers.userassessments)]|false|none|none|
|» assessments|[[controllers.Assessment](#schemacontrollers.assessment)]|false|none|none|
|»» attempts|integer|false|none|none|
|»» completion_status|string|false|none|none|
|»» grading_status|string|false|none|none|
|»» id|string|false|none|none|
|»» passed_date|string|false|none|none|
|»» score|integer|false|none|none|
|»» start_date|string|false|none|none|
|»» title|string|false|none|none|
|»» type|string|false|none|none|
|» email|string|false|none|none|
|» first_name|string|false|none|none|
|» last_name|string|false|none|none|
|» user_id|string|false|none|none|

<h1 id="continu-s-open-api-assignments">Assignments</h1>

## Lists User Assignments Completion Information for all the user emails in the mandatory for_users argument

`GET /completion/assignments`

This endpoints lists all Assignments for specific users. Users should be specified as a comma separated list of email addresses for which the Assignment information is required.
You also have the option to specify a date range using the from or until Unix Epoch timestamp.

<h3 id="lists-user-assignments-completion-information-for-all-the-user-emails-in-the-mandatory-for_users-argument-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|for_users|query|string|true|Comma Separated List of users for which to return the AssignmentsList|
|from|query|integer|false|From date in Unix time (AKA Epoch time, seconds since 00:00:00 UTC on 1 January 1970)|
|until|query|integer|false|Until date in Unix time (AKA Epoch time, seconds since 00:00:00 UTC on 1 January 1970)|
|Authorization|header|string|true|The Authorization Header and Token|

> Example responses

> 200 Response

```json
{
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "assignments": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "assigned_content": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "completed_date": {
                    "type": "string"
                  },
                  "content_id": {
                    "type": "string"
                  },
                  "content_title": {
                    "type": "string"
                  },
                  "content_type": {
                    "type": "string"
                  }
                }
              }
            },
            "assigned_date": {
              "type": "string"
            },
            "assignment_id": {
              "type": "string"
            },
            "completed": {
              "type": "boolean"
            },
            "completed_date": {
              "type": "string"
            },
            "completion_status": {
              "type": "string"
            },
            "due_date": {
              "type": "string"
            }
          }
        }
      },
      "email": {
        "type": "string"
      },
      "first_name": {
        "type": "string"
      },
      "last_name": {
        "type": "string"
      },
      "user_id": {
        "type": "string"
      }
    }
  }
}
```

<h3 id="lists-user-assignments-completion-information-for-all-the-user-emails-in-the-mandatory-for_users-argument-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|number|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|number|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|number|

<h3 id="lists-user-assignments-completion-information-for-all-the-user-emails-in-the-mandatory-for_users-argument-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[controllers.UserAssignments](#schemacontrollers.userassignments)]|false|none|none|
|» assignments|[[controllers.AssignmentRecord](#schemacontrollers.assignmentrecord)]|false|none|none|
|»» assigned_content|[[controllers.ContentRecord](#schemacontrollers.contentrecord)]|false|none|none|
|»»» completed_date|string|false|none|none|
|»»» content_id|string|false|none|none|
|»»» content_title|string|false|none|none|
|»»» content_type|string|false|none|none|
|»» assigned_date|string|false|none|none|
|»» assignment_id|string|false|none|none|
|»» completed|boolean|false|none|none|
|»» completed_date|string|false|none|none|
|»» completion_status|string|false|none|none|
|»» due_date|string|false|none|none|
|» email|string|false|none|none|
|» first_name|string|false|none|none|
|» last_name|string|false|none|none|
|» user_id|string|false|none|none|

<h1 id="continu-s-open-api-tracks">Tracks</h1>

## Lists User Tracks Completion Information for all the user emails in the mandatory for_users argument

`GET /completion/tracks`

This endpoints lists all Learning Tracks for specific users. Users should be specified as a comma separated list of email addresses for which the Learning Track information is required.
You also have the option to specify a date range using the from or until Unix Epoch timestamp.

<h3 id="lists-user-tracks-completion-information-for-all-the-user-emails-in-the-mandatory-for_users-argument-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|for_users|query|string|true|Comma Separated List of users for which to return the TracksList|
|from|query|integer|false|From date in Unix time (AKA Epoch time, seconds since 00:00:00 UTC on 1 January 1970)|
|until|query|integer|false|Until date in Unix time (AKA Epoch time, seconds since 00:00:00 UTC on 1 January 1970)|
|Authorization|header|string|true|The Authorization Header and Token|

> Example responses

> 200 Response

```json
{
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "email": {
        "type": "string"
      },
      "first_name": {
        "type": "string"
      },
      "last_name": {
        "type": "string"
      },
      "tracks": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "completed": {
              "type": "boolean"
            },
            "completed_date": {
              "type": "string"
            },
            "duration": {
              "type": "integer"
            },
            "id": {
              "type": "string"
            },
            "name": {
              "type": "string"
            },
            "progress": {
              "type": "integer"
            },
            "start_date": {
              "type": "string"
            }
          }
        }
      },
      "user_id": {
        "type": "string"
      }
    }
  }
}
```

<h3 id="lists-user-tracks-completion-information-for-all-the-user-emails-in-the-mandatory-for_users-argument-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|number|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|number|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|number|

<h3 id="lists-user-tracks-completion-information-for-all-the-user-emails-in-the-mandatory-for_users-argument-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[controllers.UserTracks](#schemacontrollers.usertracks)]|false|none|none|
|» email|string|false|none|none|
|» first_name|string|false|none|none|
|» last_name|string|false|none|none|
|» tracks|[[controllers.Track](#schemacontrollers.track)]|false|none|none|
|»» completed|boolean|false|none|none|
|»» completed_date|string|false|none|none|
|»» duration|integer|false|none|none|
|»» id|string|false|none|none|
|»» name|string|false|none|none|
|»» progress|integer|false|none|none|
|»» start_date|string|false|none|none|
|» user_id|string|false|none|none|

<h1 id="continu-s-open-api-workshops">Workshops</h1>

## Lists User Workshops Completion Information for all the user emails in the mandatory for_users argument

`GET /completion/workshops`

This endpoints lists all Workshops for specific users. Users should be specified as a comma separated list of email addresses for which the Workshop information is required.
You also have the option to specify a date range using the from or until Unix Epoch timestamp.

<h3 id="lists-user-workshops-completion-information-for-all-the-user-emails-in-the-mandatory-for_users-argument-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|for_users|query|string|true|Comma Separated List of users for which to return the WorkshopsList|
|from|query|integer|false|From date in Unix time (AKA Epoch time, seconds since 00:00:00 UTC on 1 January 1970)|
|until|query|integer|false|Until date in Unix time (AKA Epoch time, seconds since 00:00:00 UTC on 1 January 1970)|
|Authorization|header|string|true|The Authorization Header and Token|

> Example responses

> 200 Response

```json
{
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "email": {
        "type": "string"
      },
      "first_name": {
        "type": "string"
      },
      "last_name": {
        "type": "string"
      },
      "user_id": {
        "type": "string"
      },
      "workshops": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "date": {
              "type": "string"
            },
            "facilitator": {
              "type": "string"
            },
            "id": {
              "type": "string"
            },
            "status": {
              "type": "string"
            },
            "title": {
              "type": "string"
            }
          }
        }
      }
    }
  }
}
```

<h3 id="lists-user-workshops-completion-information-for-all-the-user-emails-in-the-mandatory-for_users-argument-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|number|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|number|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|number|

<h3 id="lists-user-workshops-completion-information-for-all-the-user-emails-in-the-mandatory-for_users-argument-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[controllers.UserWorkshops](#schemacontrollers.userworkshops)]|false|none|none|
|» email|string|false|none|none|
|» first_name|string|false|none|none|
|» last_name|string|false|none|none|
|» user_id|string|false|none|none|
|» workshops|[[controllers.Workshop](#schemacontrollers.workshop)]|false|none|none|
|»» date|string|false|none|none|
|»» facilitator|string|false|none|none|
|»» id|string|false|none|none|
|»» status|string|false|none|none|
|»» title|string|false|none|none|

<h1 id="continu-s-open-api-status">Status</h1>

## Ping methods returns a simple pong/alive signal

`GET /status/ping`

GET method that returns a pong/alive message to check API's responsiveness

> Example responses

> 200 Response

```json
{
  "type": "string"
}
```

<h3 id="ping-methods-returns-a-simple-pong/alive-signal-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|string|

