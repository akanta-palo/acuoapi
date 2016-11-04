const express = require('express');
const app = express();

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, email, auth_token, id')
  res.header('Access-Control-Allow-Methods', 'POST, GET')
  next()
})
const port = process.env.PORT || 8080;

let dashboard = {
  "data": {
    "menu":{
      "alerts": [
        {
          "item": "reconcile",
          "alerts": 15
        },
        {
          "item": "disputes",
          "alerts": 15
        },
        {
          "item": "pledge",
          "alerts": 15
        },
        {
          "item": "deployed",
          "alerts": 15
        },
        {
          "item": "analytics",
          "alerts": 15
        }
      ]
    },
    "filters":[

    ],
    "timeUpdated": "2016-10-23T18:00:00.000Z",
    "derivatives": [
      {
        "type": "ETD",
        "marginStatus": [
          {
            "status": "expected",
            "timeFrames": [{
              "timeRangeStart": "2016-10-23T03:00:00.000Z",
              "timeRangeEnd": "2016-10-23T03:59:59.999Z",
              "actionsList": [
                {
                  "time": "2016-10-23T10:25:43.511Z",
                  "legalEntity": "Acuo SG",
                  "cptyEntity": "ABC bank",
                  "cptyOrg": "Thailand",
                  "ccy": "SGD",
                  "direction": "IN",
                  "initialMargin": 10000,
                  "variableMargin": 500000
                },
                {
                  "time": "2016-10-23T10:30:43.511Z",
                  "legalEntity": "Acuo SG",
                  "cptyEntity": "ABC bank",
                  "cptyOrg": "Singapore",
                  "ccy": "SGD",
                  "direction": "IN",
                  "initialMargin": 10000,
                  "variableMargin": 500000
                },
                {
                  "time": "2016-10-23T10:40:43.511Z",
                  "legalEntity": "Acuo SG",
                  "cptyEntity": "ABC bank",
                  "cptyOrg": "Thailand",
                  "ccy": "SGD",
                  "direction": "OUT",
                  "initialMargin": 100000000000,
                  "variableMargin": 500000
                },
                {
                  "time": "2016-10-23T10:50:43.511Z",
                  "legalEntity": "Acuo SG",
                  "cptyEntity": "ABC bank",
                  "cptyOrg": "Thailand",
                  "ccy": "SGD",
                  "direction": "OUT",
                  "initialMargin": 100000000000,
                  "variableMargin": 500000
                }
              ]
            },
            {
              "timeRangeStart": "2016-10-23T10:00:00.000Z",
              "timeRangeEnd": "2016-10-23T10:59:59.999Z",
              "actionsList": [
                {
                  "time": "2016-10-23T10:25:43.511Z",
                  "legalEntity": "Acuo SG",
                  "cptyEntity": "ABC bank",
                  "cptyOrg": "Thailand",
                  "ccy": "SGD",
                  "direction": "IN",
                  "initialMargin": 10000,
                  "variableMargin": 500000
                },
                {
                  "time": "2016-10-23T10:30:43.511Z",
                  "legalEntity": "Acuo SG",
                  "cptyEntity": "ABC bank",
                  "cptyOrg": "Singapore",
                  "ccy": "SGD",
                  "direction": "IN",
                  "initialMargin": 10000,
                  "variableMargin": 500000
                },
                {
                  "time": "2016-10-23T10:40:43.511Z",
                  "legalEntity": "Acuo SG",
                  "cptyEntity": "ABC bank",
                  "cptyOrg": "Thailand",
                  "ccy": "SGD",
                  "direction": "OUT",
                  "initialMargin": 100000000000,
                  "variableMargin": 500000
                },
                {
                  "time": "2016-10-23T10:50:43.511Z",
                  "legalEntity": "Acuo SG",
                  "cptyEntity": "ABC bank",
                  "cptyOrg": "Thailand",
                  "ccy": "SGD",
                  "direction": "OUT",
                  "initialMargin": 100000000000,
                  "variableMargin": 500000
                }
              ]
            },
            {
              "timeRangeStart": "2016-10-23T11:00:00.000Z",
              "timeRangeEnd": "2016-10-23T11:59:59.999Z",
              "actionsList": [
                {
                  "time": "2016-10-23T10:25:43.511Z",
                  "legalEntity": "Acuo SG",
                  "cptyEntity": "ABC bank",
                  "cptyOrg": "Thailand",
                  "ccy": "SGD",
                  "direction": "IN",
                  "initialMargin": 10000,
                  "variableMargin": 500000
                },
                {
                  "time": "2016-10-23T10:30:43.511Z",
                  "legalEntity": "Acuo SG",
                  "cptyEntity": "ABC bank",
                  "cptyOrg": "Singapore",
                  "ccy": "SGD",
                  "direction": "IN",
                  "initialMargin": 10000,
                  "variableMargin": 500000
                },
                {
                  "time": "2016-10-23T10:40:43.511Z",
                  "legalEntity": "Acuo SG",
                  "cptyEntity": "ABC bank",
                  "cptyOrg": "Thailand",
                  "ccy": "SGD",
                  "direction": "OUT",
                  "initialMargin": 100000000000,
                  "variableMargin": 500000
                },
                {
                  "time": "2016-10-23T10:50:43.511Z",
                  "legalEntity": "Acuo SG",
                  "cptyEntity": "ABC bank",
                  "cptyOrg": "Thailand",
                  "ccy": "SGD",
                  "direction": "OUT",
                  "initialMargin": 100000000000,
                  "variableMargin": 500000
                }
              ]
            },
              {
                "timeRangeStart": "2016-10-23T18:00:00.000Z",
                "timeRangeEnd": "2016-10-23T18:59:59.999Z",
                "actionsList": [
                  {
                    "time": "2016-10-23T18:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Thailand",
                    "ccy": "SGD",
                    "direction": "IN",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T18:30:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "IN",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T18:40:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Thailand",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T18:50:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Thailand",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  }
                ]
              },
              {
                "timeRangeStart": "2016-10-23T19:00:00.000Z",
                "timeRangeEnd": "2016-10-23T19:59:59.999Z",
                "actionsList": [
                  {
                    "time": "2016-10-23T19:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "IN",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T19:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  }
                ]
              },
              {
                "timeRangeStart": "2016-10-23T20:00:00.000Z",
                "timeRangeEnd": "2016-10-23T20:59:59.999Z",
                "actionsList": [
                  {
                    "time": "2016-10-23T19:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000000000,
                    "variableMargin": 500000
                  }
                ]
              }
            ]
          },
          {
            "status": "unrecon",
            "timeFrames": [
              {
                "timeRangeStart": "2016-10-23T10:00:00.000Z",
                "timeRangeEnd": "2016-10-23T10:59:59.999Z",
                "actionsList": [
                  {
                    "time": "2016-10-23T18:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Thailand",
                    "ccy": "SGD",
                    "direction": "IN",
                    "initialMargin": 10000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T18:30:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "IN",
                    "initialMargin": 10000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T18:40:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Thailand",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000000000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T18:50:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Thailand",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000000000,
                    "variableMargin": 500000
                  }
                ]
              },
              {
                "timeRangeStart": "2016-10-23T11:00:00.000Z",
                "timeRangeEnd": "2016-10-23T11:59:59.999Z",
                "actionsList": [
                  {
                    "time": "2016-10-23T18:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Thailand",
                    "ccy": "SGD",
                    "direction": "IN",
                    "initialMargin": 10000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T18:30:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "IN",
                    "initialMargin": 10000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T18:40:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Thailand",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000000000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T18:50:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Thailand",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000000000,
                    "variableMargin": 500000
                  }
                ]
              },
              {
                "timeRangeStart": "2016-10-23T18:00:00.000Z",
                "timeRangeEnd": "2016-10-23T18:59:59.999Z",
                "actionsList": [
                  {
                    "time": "2016-10-23T18:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Thailand",
                    "ccy": "SGD",
                    "direction": "IN",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T18:30:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "IN",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T18:40:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Thailand",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T18:50:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Thailand",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  }
                ]
              },
              {
                "timeRangeStart": "2016-10-23T19:00:00.000Z",
                "timeRangeEnd": "2016-10-23T19:59:59.999Z",
                "actionsList": [
                  {
                    "time": "2016-10-23T19:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "IN",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T19:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  }
                ]
              },
              {
                "timeRangeStart": "2016-10-23T20:00:00.000Z",
                "timeRangeEnd": "2016-10-23T20:59:59.999Z",
                "actionsList": [
                  {
                    "time": "2016-10-23T19:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000000000,
                    "variableMargin": 500000
                  }
                ]
              }
            ]
          },
          {
            "status": "recon",
            "timeFrames": [
              {
                "timeRangeStart": "2016-10-23T18:00:00.000Z",
                "timeRangeEnd": "2016-10-23T18:59:59.999Z",
                "actionsList": [
                  {
                    "time": "2016-10-23T18:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Thailand",
                    "ccy": "SGD",
                    "direction": "IN",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T18:30:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "IN",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T18:40:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Thailand",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T18:50:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Thailand",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  }
                ]
              },
              {
                "timeRangeStart": "2016-10-23T19:00:00.000Z",
                "timeRangeEnd": "2016-10-23T19:59:59.999Z",
                "actionsList": [
                  {
                    "time": "2016-10-23T19:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "IN",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T19:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  }
                ]
              },
              {
                "timeRangeStart": "2016-10-23T20:00:00.000Z",
                "timeRangeEnd": "2016-10-23T20:59:59.999Z",
                "actionsList": [
                  {
                    "time": "2016-10-23T19:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000000000,
                    "variableMargin": 500000
                  }
                ]
              }
            ]
          },
          {
            "status": "pledge",
            "timeFrames": [
              {
                "timeRangeStart": "2016-10-23T18:00:00.000Z",
                "timeRangeEnd": "2016-10-23T18:59:59.999Z",
                "actionsList": [
                  {
                    "time": "2016-10-23T18:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Thailand",
                    "ccy": "SGD",
                    "direction": "IN",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T18:30:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "IN",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T18:40:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Thailand",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T18:50:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Thailand",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  }
                ]
              },
              {
                "timeRangeStart": "2016-10-23T19:00:00.000Z",
                "timeRangeEnd": "2016-10-23T19:59:59.999Z",
                "actionsList": [
                  {
                    "time": "2016-10-23T19:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "IN",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T19:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  }
                ]
              },
              {
                "timeRangeStart": "2016-10-23T20:00:00.000Z",
                "timeRangeEnd": "2016-10-23T20:59:59.999Z",
                "actionsList": [
                  {
                    "time": "2016-10-23T19:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000000000,
                    "variableMargin": 500000
                  }
                ]
              }
            ]
          },
          {
            "status": "dispute",
            "timeFrames": [
              {
                "timeRangeStart": "2016-10-23T18:00:00.000Z",
                "timeRangeEnd": "2016-10-23T18:59:59.999Z",
                "actionsList": [
                  {
                    "time": "2016-10-23T18:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Thailand",
                    "ccy": "SGD",
                    "direction": "IN",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T18:30:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "IN",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T18:40:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Thailand",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T18:50:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Thailand",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  }
                ]
              },
              {
                "timeRangeStart": "2016-10-23T19:00:00.000Z",
                "timeRangeEnd": "2016-10-23T19:59:59.999Z",
                "actionsList": [
                  {
                    "time": "2016-10-23T19:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "IN",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T19:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  }
                ]
              },
              {
                "timeRangeStart": "2016-10-23T20:00:00.000Z",
                "timeRangeEnd": "2016-10-23T20:59:59.999Z",
                "actionsList": [
                  {
                    "time": "2016-10-23T19:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000000000,
                    "variableMargin": 500000
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "type": "OTC_clear",
        "marginStatus": [
          {
            "status": "expected",
            "timeFrames": [
              {
                "timeRangeStart": "2016-10-23T10:00:00.000Z",
                "timeRangeEnd": "2016-10-23T10:59:59.999Z",
                "actionsList": [
                  {
                    "time": "2016-10-23T18:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Thailand",
                    "ccy": "SGD",
                    "direction": "IN",
                    "initialMargin": 10000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T18:30:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "IN",
                    "initialMargin": 10000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T18:40:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Thailand",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T18:50:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Thailand",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  }
                ]
              },
              {
                "timeRangeStart": "2016-10-23T18:00:00.000Z",
                "timeRangeEnd": "2016-10-23T18:59:59.999Z",
                "actionsList": [
                  {
                    "time": "2016-10-23T18:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Thailand",
                    "ccy": "SGD",
                    "direction": "IN",
                    "initialMargin": 10000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T18:30:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "IN",
                    "initialMargin": 10000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T18:40:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Thailand",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T18:50:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Thailand",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  }
                ]
              },
              {
                "timeRangeStart": "2016-10-23T19:00:00.000Z",
                "timeRangeEnd": "2016-10-23T19:59:59.999Z",
                "actionsList": [
                  {
                    "time": "2016-10-23T19:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "IN",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T19:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  }
                ]
              },
              {
                "timeRangeStart": "2016-10-23T20:00:00.000Z",
                "timeRangeEnd": "2016-10-23T20:59:59.999Z",
                "actionsList": [
                  {
                    "time": "2016-10-23T19:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000000000,
                    "variableMargin": 500000
                  }
                ]
              }
            ]
          },
          {
            "status": "unrecon",
            "timeFrames": [
              {
                "timeRangeStart": "2016-10-23T18:00:00.000Z",
                "timeRangeEnd": "2016-10-23T18:59:59.999Z",
                "actionsList": [
                  {
                    "time": "2016-10-23T18:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Thailand",
                    "ccy": "SGD",
                    "direction": "IN",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T18:30:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "IN",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T18:40:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Thailand",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T18:50:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Thailand",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  }
                ]
              },
              {
                "timeRangeStart": "2016-10-23T19:00:00.000Z",
                "timeRangeEnd": "2016-10-23T19:59:59.999Z",
                "actionsList": [
                  {
                    "time": "2016-10-23T19:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "IN",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T19:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  }
                ]
              },
              {
                "timeRangeStart": "2016-10-23T20:00:00.000Z",
                "timeRangeEnd": "2016-10-23T20:59:59.999Z",
                "actionsList": [
                  {
                    "time": "2016-10-23T19:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000000000,
                    "variableMargin": 500000
                  }
                ]
              }
            ]
          },
          {
            "status": "recon",
            "timeFrames": [
              {
                "timeRangeStart": "2016-10-23T18:00:00.000Z",
                "timeRangeEnd": "2016-10-23T18:59:59.999Z",
                "actionsList": [
                  {
                    "time": "2016-10-23T18:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Thailand",
                    "ccy": "SGD",
                    "direction": "IN",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T18:30:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "IN",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T18:40:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Thailand",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T18:50:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Thailand",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  }
                ]
              },
              {
                "timeRangeStart": "2016-10-23T19:00:00.000Z",
                "timeRangeEnd": "2016-10-23T19:59:59.999Z",
                "actionsList": [
                  {
                    "time": "2016-10-23T19:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "IN",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T19:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  }
                ]
              },
              {
                "timeRangeStart": "2016-10-23T20:00:00.000Z",
                "timeRangeEnd": "2016-10-23T20:59:59.999Z",
                "actionsList": [
                  {
                    "time": "2016-10-23T19:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000000000,
                    "variableMargin": 500000
                  }
                ]
              }
            ]
          },
          {
            "status": "pledge",
            "timeFrames": [
              {
                "timeRangeStart": "2016-10-23T18:00:00.000Z",
                "timeRangeEnd": "2016-10-23T18:59:59.999Z",
                "actionsList": [
                  {
                    "time": "2016-10-23T18:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Thailand",
                    "ccy": "SGD",
                    "direction": "IN",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T18:30:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "IN",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T18:40:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Thailand",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T18:50:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Thailand",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  }
                ]
              },
              {
                "timeRangeStart": "2016-10-23T19:00:00.000Z",
                "timeRangeEnd": "2016-10-23T19:59:59.999Z",
                "actionsList": [
                  {
                    "time": "2016-10-23T19:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "IN",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T19:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  }
                ]
              },
              {
                "timeRangeStart": "2016-10-23T20:00:00.000Z",
                "timeRangeEnd": "2016-10-23T20:59:59.999Z",
                "actionsList": [
                  {
                    "time": "2016-10-23T19:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000000000,
                    "variableMargin": 500000
                  }
                ]
              }
            ]
          },
          {
            "status": "dispute",
            "timeFrames": [
              {
                "timeRangeStart": "2016-10-23T18:00:00.000Z",
                "timeRangeEnd": "2016-10-23T18:59:59.999Z",
                "actionsList": [
                  {
                    "time": "2016-10-23T18:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Thailand",
                    "ccy": "SGD",
                    "direction": "IN",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T18:30:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "IN",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T18:40:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Thailand",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T18:50:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Thailand",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  }
                ]
              },
              {
                "timeRangeStart": "2016-10-23T19:00:00.000Z",
                "timeRangeEnd": "2016-10-23T19:59:59.999Z",
                "actionsList": [
                  {
                    "time": "2016-10-23T19:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "IN",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T19:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  }
                ]
              },
              {
                "timeRangeStart": "2016-10-23T20:00:00.000Z",
                "timeRangeEnd": "2016-10-23T20:59:59.999Z",
                "actionsList": [
                  {
                    "time": "2016-10-23T19:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000000000,
                    "variableMargin": 500000
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "type": "OTC_bilateral",
        "marginStatus": [
          {
            "status": "expected",
            "timeFrames": [
              {
                "timeRangeStart": "2016-10-23T18:00:00.000Z",
                "timeRangeEnd": "2016-10-23T18:59:59.999Z",
                "actionsList": [
                  {
                    "time": "2016-10-23T18:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Thailand",
                    "ccy": "SGD",
                    "direction": "IN",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T18:30:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "IN",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T18:40:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Thailand",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T18:50:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Thailand",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  }
                ]
              },
              {
                "timeRangeStart": "2016-10-23T19:00:00.000Z",
                "timeRangeEnd": "2016-10-23T19:59:59.999Z",
                "actionsList": [
                  {
                    "time": "2016-10-23T19:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "IN",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T19:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  }
                ]
              },
              {
                "timeRangeStart": "2016-10-23T20:00:00.000Z",
                "timeRangeEnd": "2016-10-23T20:59:59.999Z",
                "actionsList": [
                  {
                    "time": "2016-10-23T19:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000000000,
                    "variableMargin": 500000
                  }
                ]
              }
            ]
          },
          {
            "status": "unrecon",
            "timeFrames": [
              {
                "timeRangeStart": "2016-10-23T18:00:00.000Z",
                "timeRangeEnd": "2016-10-23T18:59:59.999Z",
                "actionsList": [
                  {
                    "time": "2016-10-23T18:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Thailand",
                    "ccy": "SGD",
                    "direction": "IN",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T18:30:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "IN",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T18:40:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Thailand",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T18:50:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Thailand",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  }
                ]
              },
              {
                "timeRangeStart": "2016-10-23T19:00:00.000Z",
                "timeRangeEnd": "2016-10-23T19:59:59.999Z",
                "actionsList": [
                  {
                    "time": "2016-10-23T19:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "IN",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T19:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  }
                ]
              },
              {
                "timeRangeStart": "2016-10-23T20:00:00.000Z",
                "timeRangeEnd": "2016-10-23T20:59:59.999Z",
                "actionsList": [
                  {
                    "time": "2016-10-23T19:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000000000,
                    "variableMargin": 500000
                  }
                ]
              }
            ]
          },
          {
            "status": "recon",
            "timeFrames": [
              {
                "timeRangeStart": "2016-10-23T18:00:00.000Z",
                "timeRangeEnd": "2016-10-23T18:59:59.999Z",
                "actionsList": [
                  {
                    "time": "2016-10-23T18:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Thailand",
                    "ccy": "SGD",
                    "direction": "IN",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T18:30:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "IN",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T18:40:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Thailand",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T18:50:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Thailand",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  }
                ]
              },
              {
                "timeRangeStart": "2016-10-23T19:00:00.000Z",
                "timeRangeEnd": "2016-10-23T19:59:59.999Z",
                "actionsList": [
                  {
                    "time": "2016-10-23T19:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "IN",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T19:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  }
                ]
              },
              {
                "timeRangeStart": "2016-10-23T20:00:00.000Z",
                "timeRangeEnd": "2016-10-23T20:59:59.999Z",
                "actionsList": [
                  {
                    "time": "2016-10-23T19:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000000000,
                    "variableMargin": 500000
                  }
                ]
              }
            ]
          },
          {
            "status": "pledge",
            "timeFrames": [
              {
                "timeRangeStart": "2016-10-23T18:00:00.000Z",
                "timeRangeEnd": "2016-10-23T18:59:59.999Z",
                "actionsList": [
                  {
                    "time": "2016-10-23T18:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Thailand",
                    "ccy": "SGD",
                    "direction": "IN",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T18:30:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "IN",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T18:40:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Thailand",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T18:50:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Thailand",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  }
                ]
              },
              {
                "timeRangeStart": "2016-10-23T19:00:00.000Z",
                "timeRangeEnd": "2016-10-23T19:59:59.999Z",
                "actionsList": [
                  {
                    "time": "2016-10-23T19:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "IN",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T19:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  }
                ]
              },
              {
                "timeRangeStart": "2016-10-23T20:00:00.000Z",
                "timeRangeEnd": "2016-10-23T20:59:59.999Z",
                "actionsList": [
                  {
                    "time": "2016-10-23T19:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000000000,
                    "variableMargin": 500000
                  }
                ]
              }
            ]
          },
          {
            "status": "dispute",
            "timeFrames": [
              {
                "timeRangeStart": "2016-10-23T18:00:00.000Z",
                "timeRangeEnd": "2016-10-23T18:59:59.999Z",
                "actionsList": [
                  {
                    "time": "2016-10-23T18:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Thailand",
                    "ccy": "SGD",
                    "direction": "IN",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T18:30:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "IN",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T18:40:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Thailand",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T18:50:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Thailand",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  }
                ]
              },
              {
                "timeRangeStart": "2016-10-23T19:00:00.000Z",
                "timeRangeEnd": "2016-10-23T19:59:59.999Z",
                "actionsList": [
                  {
                    "time": "2016-10-23T19:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "IN",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T19:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  }
                ]
              },
              {
                "timeRangeStart": "2016-10-23T20:00:00.000Z",
                "timeRangeEnd": "2016-10-23T20:59:59.999Z",
                "actionsList": [
                  {
                    "time": "2016-10-23T19:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000000000,
                    "variableMargin": 500000
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "type": "OTC_legacy",
        "marginStatus": [
          {
            "status": "expected",
            "timeFrames": [
              {
                "timeRangeStart": "2016-10-23T18:00:00.000Z",
                "timeRangeEnd": "2016-10-23T18:59:59.999Z",
                "actionsList": [
                  {
                    "time": "2016-10-23T18:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Thailand",
                    "ccy": "SGD",
                    "direction": "IN",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T18:30:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "IN",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T18:40:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Thailand",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T18:50:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Thailand",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  }
                ]
              },
              {
                "timeRangeStart": "2016-10-23T19:00:00.000Z",
                "timeRangeEnd": "2016-10-23T19:59:59.999Z",
                "actionsList": [
                  {
                    "time": "2016-10-23T19:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "IN",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T19:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  }
                ]
              },
              {
                "timeRangeStart": "2016-10-23T20:00:00.000Z",
                "timeRangeEnd": "2016-10-23T20:59:59.999Z",
                "actionsList": [
                  {
                    "time": "2016-10-23T19:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000000000,
                    "variableMargin": 500000
                  }
                ]
              }
            ]
          },
          {
            "status": "unrecon",
            "timeFrames": [
              {
                "timeRangeStart": "2016-10-23T18:00:00.000Z",
                "timeRangeEnd": "2016-10-23T18:59:59.999Z",
                "actionsList": [
                  {
                    "time": "2016-10-23T18:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Thailand",
                    "ccy": "SGD",
                    "direction": "IN",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T18:30:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "IN",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T18:40:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Thailand",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T18:50:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Thailand",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  }
                ]
              },
              {
                "timeRangeStart": "2016-10-23T19:00:00.000Z",
                "timeRangeEnd": "2016-10-23T19:59:59.999Z",
                "actionsList": [
                  {
                    "time": "2016-10-23T19:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "IN",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T19:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  }
                ]
              },
              {
                "timeRangeStart": "2016-10-23T20:00:00.000Z",
                "timeRangeEnd": "2016-10-23T20:59:59.999Z",
                "actionsList": [
                  {
                    "time": "2016-10-23T19:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000000000,
                    "variableMargin": 500000
                  }
                ]
              }
            ]
          },
          {
            "status": "recon",
            "timeFrames": [
              {
                "timeRangeStart": "2016-10-23T18:00:00.000Z",
                "timeRangeEnd": "2016-10-23T18:59:59.999Z",
                "actionsList": [
                  {
                    "time": "2016-10-23T18:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Thailand",
                    "ccy": "SGD",
                    "direction": "IN",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T18:30:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "IN",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T18:40:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Thailand",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T18:50:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Thailand",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  }
                ]
              },
              {
                "timeRangeStart": "2016-10-23T19:00:00.000Z",
                "timeRangeEnd": "2016-10-23T19:59:59.999Z",
                "actionsList": [
                  {
                    "time": "2016-10-23T19:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "IN",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T19:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  }
                ]
              },
              {
                "timeRangeStart": "2016-10-23T20:00:00.000Z",
                "timeRangeEnd": "2016-10-23T20:59:59.999Z",
                "actionsList": [
                  {
                    "time": "2016-10-23T19:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000000000,
                    "variableMargin": 500000
                  }
                ]
              }
            ]
          },
          {
            "status": "pledge",
            "timeFrames": [
              {
                "timeRangeStart": "2016-10-23T18:00:00.000Z",
                "timeRangeEnd": "2016-10-23T18:59:59.999Z",
                "actionsList": [
                  {
                    "time": "2016-10-23T18:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Thailand",
                    "ccy": "SGD",
                    "direction": "IN",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T18:30:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "IN",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T18:40:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Thailand",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T18:50:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Thailand",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  }
                ]
              },
              {
                "timeRangeStart": "2016-10-23T19:00:00.000Z",
                "timeRangeEnd": "2016-10-23T19:59:59.999Z",
                "actionsList": [
                  {
                    "time": "2016-10-23T19:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "IN",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T19:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  }
                ]
              },
              {
                "timeRangeStart": "2016-10-23T20:00:00.000Z",
                "timeRangeEnd": "2016-10-23T20:59:59.999Z",
                "actionsList": [
                  {
                    "time": "2016-10-23T19:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000000000,
                    "variableMargin": 500000
                  }
                ]
              }
            ]
          },
          {
            "status": "dispute",
            "timeFrames": [
              {
                "timeRangeStart": "2016-10-23T18:00:00.000Z",
                "timeRangeEnd": "2016-10-23T18:59:59.999Z",
                "actionsList": [
                  {
                    "time": "2016-10-23T18:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Thailand",
                    "ccy": "SGD",
                    "direction": "IN",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T18:30:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "IN",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T18:40:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Thailand",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T18:50:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Thailand",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  }
                ]
              },
              {
                "timeRangeStart": "2016-10-23T19:00:00.000Z",
                "timeRangeEnd": "2016-10-23T19:59:59.999Z",
                "actionsList": [
                  {
                    "time": "2016-10-23T19:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "IN",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  },
                  {
                    "time": "2016-10-23T19:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000,
                    "variableMargin": 500000
                  }
                ]
              },
              {
                "timeRangeStart": "2016-10-23T20:00:00.000Z",
                "timeRangeEnd": "2016-10-23T20:59:59.999Z",
                "actionsList": [
                  {
                    "time": "2016-10-23T19:25:43.511Z",
                    "legalEntity": "Acuo SG",
                    "cptyEntity": "ABC bank",
                    "cptyOrg": "Singapore",
                    "ccy": "SGD",
                    "direction": "OUT",
                    "initialMargin": 100000000000,
                    "variableMargin": 500000
                  }
                ]
              }
            ]
          }
        ]
      }
    ],
    "someOtherRoute": [
      { "id": 1, "body": "some comment", "postId": 1 }
    ],
    "someMoreRoutes": { "name": "Rui" }
  }
}

app.get('/', function (req, res) {
  res.send('Welcome to ACUO');
});
app.get('/json', function (req, res) {
  res.send(dashboard);
});

app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});
