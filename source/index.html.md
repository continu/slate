---
title: Continu's Open API v1.0
language_tabs:
  - go: Go
  - http: HTTP
  - javascript: JavaScript
  - javascript--node: Node.JS
  - python: Python
  - ruby: Ruby
toc_footers: []
includes:
  - testing.erb
search: true
highlight_theme: darkula
headingLevel: 2

---

<!-- Generator: Widdershins v4.0.1 -->

<h1 id="heyoo">This is a title</h1>
THIS IS THE REAL FILE

_from

_id

_inBundle

_integrity

_location

_phantomChildren

_requested

_requiredBy

_resolved

_shasum

_spec

_where

author

bin

bugs

bundleDependencies

config

dependencies

deprecated

description

devDependencies

directories

homepage

keywords

license

main

name

repository

scripts

version

[object Object]

<h1 id="continu-s-open-api">Continu's Open API v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

You can use our API to get access to learner completion information contained within Continu.

Email: <a href="mailto:support@continu.co">API Support</a> Web: <a href="https://continu.co/help">API Support</a> 
 License: undefined

This is a test too

<h1 id="continu-s-open-api-assessments">Assessments</h1>

## get__completion_assessments

`GET /completion/assessments`

*Lists User Assessments Completion Information for all the user emails in the mandatory for_users argument*

This endpoints lists all Assessments for specific users. Users should be specified as a comma separated list of email addresses for which the Assessment information is required.
You also have the option to specify a date range using the from or until Unix Epoch timestamp.

<h3 id="get__completion_assessments-parameters">Parameters</h3>

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

<h3 id="get__completion_assessments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|number|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|number|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|number|

<h3 id="get__completion_assessments-responseschema">Response Schema</h3>

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

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="continu-s-open-api-assignments">Assignments</h1>

## get__completion_assignments

`GET /completion/assignments`

*Lists User Assignments Completion Information for all the user emails in the mandatory for_users argument*

This endpoints lists all Assignments for specific users. Users should be specified as a comma separated list of email addresses for which the Assignment information is required.
You also have the option to specify a date range using the from or until Unix Epoch timestamp.

<h3 id="get__completion_assignments-parameters">Parameters</h3>

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

<h3 id="get__completion_assignments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|number|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|number|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|number|

<h3 id="get__completion_assignments-responseschema">Response Schema</h3>

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

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="continu-s-open-api-tracks">Tracks</h1>

## get__completion_tracks

`GET /completion/tracks`

*Lists User Tracks Completion Information for all the user emails in the mandatory for_users argument*

This endpoints lists all Learning Tracks for specific users. Users should be specified as a comma separated list of email addresses for which the Learning Track information is required.
You also have the option to specify a date range using the from or until Unix Epoch timestamp.

<h3 id="get__completion_tracks-parameters">Parameters</h3>

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

<h3 id="get__completion_tracks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|number|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|number|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|number|

<h3 id="get__completion_tracks-responseschema">Response Schema</h3>

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

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="continu-s-open-api-workshops">Workshops</h1>

## get__completion_workshops

`GET /completion/workshops`

*Lists User Workshops Completion Information for all the user emails in the mandatory for_users argument*

This endpoints lists all Workshops for specific users. Users should be specified as a comma separated list of email addresses for which the Workshop information is required.
You also have the option to specify a date range using the from or until Unix Epoch timestamp.

<h3 id="get__completion_workshops-parameters">Parameters</h3>

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

<h3 id="get__completion_workshops-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|number|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Not Found|number|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|number|

<h3 id="get__completion_workshops-responseschema">Response Schema</h3>

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

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="continu-s-open-api-status">Status</h1>

## get__status_ping

`GET /status/ping`

*Ping methods returns a simple pong/alive signal*

GET method that returns a pong/alive message to check API's responsiveness

> Example responses

> 200 Response

```json
{
  "type": "string"
}
```

<h3 id="get__status_ping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|string|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_controllers.Assessment">controllers.Assessment</h2>
<!-- backwards compatibility -->
<a id="schemacontrollers.assessment"></a>
<a id="schema_controllers.Assessment"></a>
<a id="tocScontrollers.assessment"></a>
<a id="tocscontrollers.assessment"></a>

```json
{
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

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attempts|integer|false|none|none|
|completion_status|string|false|none|none|
|grading_status|string|false|none|none|
|id|string|false|none|none|
|passed_date|string|false|none|none|
|score|integer|false|none|none|
|start_date|string|false|none|none|
|title|string|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_controllers.AssignmentRecord">controllers.AssignmentRecord</h2>
<!-- backwards compatibility -->
<a id="schemacontrollers.assignmentrecord"></a>
<a id="schema_controllers.AssignmentRecord"></a>
<a id="tocScontrollers.assignmentrecord"></a>
<a id="tocscontrollers.assignmentrecord"></a>

```json
{
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

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assigned_content|[[controllers.ContentRecord](#schemacontrollers.contentrecord)]|false|none|none|
|assigned_date|string|false|none|none|
|assignment_id|string|false|none|none|
|completed|boolean|false|none|none|
|completed_date|string|false|none|none|
|completion_status|string|false|none|none|
|due_date|string|false|none|none|

<h2 id="tocS_controllers.ContentRecord">controllers.ContentRecord</h2>
<!-- backwards compatibility -->
<a id="schemacontrollers.contentrecord"></a>
<a id="schema_controllers.ContentRecord"></a>
<a id="tocScontrollers.contentrecord"></a>
<a id="tocscontrollers.contentrecord"></a>

```json
{
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

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completed_date|string|false|none|none|
|content_id|string|false|none|none|
|content_title|string|false|none|none|
|content_type|string|false|none|none|

<h2 id="tocS_controllers.Track">controllers.Track</h2>
<!-- backwards compatibility -->
<a id="schemacontrollers.track"></a>
<a id="schema_controllers.Track"></a>
<a id="tocScontrollers.track"></a>
<a id="tocscontrollers.track"></a>

```json
{
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

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completed|boolean|false|none|none|
|completed_date|string|false|none|none|
|duration|integer|false|none|none|
|id|string|false|none|none|
|name|string|false|none|none|
|progress|integer|false|none|none|
|start_date|string|false|none|none|

<h2 id="tocS_controllers.UserAssessments">controllers.UserAssessments</h2>
<!-- backwards compatibility -->
<a id="schemacontrollers.userassessments"></a>
<a id="schema_controllers.UserAssessments"></a>
<a id="tocScontrollers.userassessments"></a>
<a id="tocscontrollers.userassessments"></a>

```json
{
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

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assessments|[[controllers.Assessment](#schemacontrollers.assessment)]|false|none|none|
|email|string|false|none|none|
|first_name|string|false|none|none|
|last_name|string|false|none|none|
|user_id|string|false|none|none|

<h2 id="tocS_controllers.UserAssignments">controllers.UserAssignments</h2>
<!-- backwards compatibility -->
<a id="schemacontrollers.userassignments"></a>
<a id="schema_controllers.UserAssignments"></a>
<a id="tocScontrollers.userassignments"></a>
<a id="tocscontrollers.userassignments"></a>

```json
{
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

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assignments|[[controllers.AssignmentRecord](#schemacontrollers.assignmentrecord)]|false|none|none|
|email|string|false|none|none|
|first_name|string|false|none|none|
|last_name|string|false|none|none|
|user_id|string|false|none|none|

<h2 id="tocS_controllers.UserTracks">controllers.UserTracks</h2>
<!-- backwards compatibility -->
<a id="schemacontrollers.usertracks"></a>
<a id="schema_controllers.UserTracks"></a>
<a id="tocScontrollers.usertracks"></a>
<a id="tocscontrollers.usertracks"></a>

```json
{
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

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|none|
|first_name|string|false|none|none|
|last_name|string|false|none|none|
|tracks|[[controllers.Track](#schemacontrollers.track)]|false|none|none|
|user_id|string|false|none|none|

<h2 id="tocS_controllers.UserWorkshops">controllers.UserWorkshops</h2>
<!-- backwards compatibility -->
<a id="schemacontrollers.userworkshops"></a>
<a id="schema_controllers.UserWorkshops"></a>
<a id="tocScontrollers.userworkshops"></a>
<a id="tocscontrollers.userworkshops"></a>

```json
{
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

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|none|
|first_name|string|false|none|none|
|last_name|string|false|none|none|
|user_id|string|false|none|none|
|workshops|[[controllers.Workshop](#schemacontrollers.workshop)]|false|none|none|

<h2 id="tocS_controllers.Workshop">controllers.Workshop</h2>
<!-- backwards compatibility -->
<a id="schemacontrollers.workshop"></a>
<a id="schema_controllers.Workshop"></a>
<a id="tocScontrollers.workshop"></a>
<a id="tocscontrollers.workshop"></a>

```json
{
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

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|date|string|false|none|none|
|facilitator|string|false|none|none|
|id|string|false|none|none|
|status|string|false|none|none|
|title|string|false|none|none|

