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
    'menu':{ //for the red notification badges on the menu bar
        'alerts': [
            {
                'item': 'reconcile',
                'alerts': 15
            },
            {
                'item': 'disputes',
                'alerts': 15
            },
            {
                'item': 'pledge',
                'alerts': 15
            },
            {
                'item': 'deployed',
                'alerts': 15
            },
            {
                'item': 'analytics',
                'alerts': 15
            }
        ]
    },
    'filters':[ //should the time chart widget filters be from the backend? or hardcoded in front?

    ],
    'timeUpdated': '2016-10-23T18:00:00.000Z',
    'derivatives': [
        {
            'type': 'ETD',
            'marginStatus': [
                {
                    'status': 'expected',
                    'timeFrames': [ //TBC, depending on our UX designer this might change
                        {
                            'timeRangeStart': '2016-10-23T18:00:00.000Z',
                            'timeRangeEnd': '2016-10-23T18:59:59.999Z',
                            'noOfActions': 3,
                            'amount': 1510000,
                            'CPTYMargin': 1500000,
                            'EXPMargin': 10000000,
                            'actionsList': [
                                {
                                    'time': '2016-10-23T18:25:43.511Z',
                                    'legalEntity': 'Acuo ID',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                },
                                {
                                    'time': '2016-10-23T18:30:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                },
                                {
                                    'time': '2016-10-23T18:40:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                }
                            ]
                        },
                        {
                            'timeRangeStart': '2016-10-23T19:00:00.000Z',
                            'timeRangeEnd': '2016-10-23T19:59:59.999Z',
                            'noOfActions': 1,
                            'amount': 15500000,
                            'CPTYMargin': 1500000,
                            'EXPMargin': 10000000,
                            'actionsList': [
                                {
                                    'time': '2016-10-23T19:25:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                }
                            ]
                        },
                    ]
                },
                {
                    'status': 'unrecon',
                    'timeFrames': [ //TBC, depending on our UX designer this might change
                        {
                            'timeRangeStart': '2016-10-23T18:00:00.000Z',
                            'timeRangeEnd': '2016-10-23T18:59:59.999Z',
                            'noOfActions': 3,
                            'amount': 1500000,
                            'CPTYMargin': 1500000,
                            'EXPMargin': 10000000,
                            'actionsList': [
                                {
                                    'time': '2016-10-23T18:25:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                },
                                {
                                    'time': '2016-10-23T18:30:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                },
                                {
                                    'time': '2016-10-23T18:40:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                }
                            ]
                        },
                        {
                            'timeRangeStart': '2016-10-23T19:00:00.000Z',
                            'timeRangeEnd': '2016-10-23T19:59:59.999Z',
                            'noOfActions': 1,
                            'amount': 1550000,
                            'CPTYMargin': 1500000,
                            'EXPMargin': 10000000,
                            'actionsList': [
                                {
                                    'time': '2016-10-23T19:25:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                }
                            ]
                        },
                    ]
                },
                {
                    'status': 'recon',
                    'timeFrames': [ //TBC, depending on our UX designer this might change
                        {
                            'timeRangeStart': '2016-10-23T18:00:00.000Z',
                            'timeRangeEnd': '2016-10-23T18:59:59.999Z',
                            'noOfActions': 3,
                            'amount': 1500000,
                            'CPTYMargin': 1500000,
                            'EXPMargin': 10000000,
                            'actionsList': [
                                {
                                    'time': '2016-10-23T18:25:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                },
                                {
                                    'time': '2016-10-23T18:30:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                },
                                {
                                    'time': '2016-10-23T18:40:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                }
                            ]
                        },
                        {
                            'timeRangeStart': '2016-10-23T19:00:00.000Z',
                            'timeRangeEnd': '2016-10-23T19:59:59.999Z',
                            'noOfActions': 1,
                            'amount': 1550000,
                            'CPTYMargin': 1500000,
                            'EXPMargin': 10000000,
                            'actionsList': [
                                {
                                    'time': '2016-10-23T19:25:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                }
                            ]
                        },
                    ]
                },
                {
                    'status': 'pledge',
                    'timeFrames': [ //TBC, depending on our UX designer this might change
                        {
                            'timeRangeStart': '2016-10-23T18:00:00.000Z',
                            'timeRangeEnd': '2016-10-23T18:59:59.999Z',
                            'noOfActions': 3,
                            'amount': 15000,
                            'CPTYMargin': 1500000,
                            'EXPMargin': 10000000,
                            'actionsList': [
                                {
                                    'time': '2016-10-23T18:25:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                },
                                {
                                    'time': '2016-10-23T18:30:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                },
                                {
                                    'time': '2016-10-23T18:40:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                }
                            ]
                        },
                        {
                            'timeRangeStart': '2016-10-23T19:00:00.000Z',
                            'timeRangeEnd': '2016-10-23T19:59:59.999Z',
                            'noOfActions': 1,
                            'amount': 155000000,
                            'CPTYMargin': 1500000,
                            'EXPMargin': 10000000,
                            'actionsList': [
                                {
                                    'time': '2016-10-23T19:25:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                }
                            ]
                        },
                    ]
                },
                {
                    'status': 'dispute',
                    'timeFrames': [ //TBC, depending on our UX designer this might change
                        {
                            'timeRangeStart': '2016-10-23T18:00:00.000Z',
                            'timeRangeEnd': '2016-10-23T18:59:59.999Z',
                            'noOfActions': 3,
                            'amount': 150000000,
                            'CPTYMargin': 1500000,
                            'EXPMargin': 10000000,
                            'actionsList': [
                                {
                                    'time': '2016-10-23T18:25:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                },
                                {
                                    'time': '2016-10-23T18:30:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                },
                                {
                                    'time': '2016-10-23T18:40:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                }
                            ]
                        },
                        {
                            'timeRangeStart': '2016-10-23T19:00:00.000Z',
                            'timeRangeEnd': '2016-10-23T19:59:59.999Z',
                            'noOfActions': 1,
                            'amount': 1550000,
                            'CPTYMargin': 1500000,
                            'EXPMargin': 10000000,
                            'actionsList': [
                                {
                                    'time': '2016-10-23T19:25:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                }
                            ]
                        },
                    ]
                }
            ]
        },
        {
            'type': 'OTC_clear',
            'marginStatus': [
                {
                    'status': 'expected',
                    'timeFrames': [ //TBC, depending on our UX designer this might change
                        {
                            'timeRangeStart': '2016-10-23T18:00:00.000Z',
                            'timeRangeEnd': '2016-10-23T18:59:59.999Z',
                            'noOfActions': 3,
                            'amount': 15000000000,
                            'CPTYMargin': 1500000,
                            'EXPMargin': 10000000,
                            'actionsList': [
                                {
                                    'time': '2016-10-23T18:25:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                },
                                {
                                    'time': '2016-10-23T18:30:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                },
                                {
                                    'time': '2016-10-23T18:40:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                }
                            ]
                        },
                        {
                            'timeRangeStart': '2016-10-23T19:00:00.000Z',
                            'timeRangeEnd': '2016-10-23T19:59:59.999Z',
                            'noOfActions': 1,
                            'amount': 1550000,
                            'CPTYMargin': 1500000,
                            'EXPMargin': 10000000,
                            'actionsList': [
                                {
                                    'time': '2016-10-23T19:25:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                }
                            ]
                        },
                    ]
                },
                {
                    'status': 'unrecon',
                    'timeFrames': [ //TBC, depending on our UX designer this might change
                        {
                            'timeRangeStart': '2016-10-23T18:00:00.000Z',
                            'timeRangeEnd': '2016-10-23T18:59:59.999Z',
                            'noOfActions': 3,
                            'amount': 1500000,
                            'CPTYMargin': 1500000,
                            'EXPMargin': 10000000,
                            'actionsList': [
                                {
                                    'time': '2016-10-23T18:25:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                },
                                {
                                    'time': '2016-10-23T18:30:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                },
                                {
                                    'time': '2016-10-23T18:40:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                }
                            ]
                        },
                        {
                            'timeRangeStart': '2016-10-23T19:00:00.000Z',
                            'timeRangeEnd': '2016-10-23T19:59:59.999Z',
                            'noOfActions': 1,
                            'amount': 1550000,
                            'CPTYMargin': 1500000,
                            'EXPMargin': 10000000,
                            'actionsList': [
                                {
                                    'time': '2016-10-23T19:25:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                }
                            ]
                        },
                    ]
                },
                {
                    'status': 'recon',
                    'timeFrames': [ //TBC, depending on our UX designer this might change
                        {
                            'timeRangeStart': '2016-10-23T18:00:00.000Z',
                            'timeRangeEnd': '2016-10-23T18:59:59.999Z',
                            'noOfActions': 3,
                            'amount': 1500000,
                            'CPTYMargin': 1500000,
                            'EXPMargin': 10000000,
                            'actionsList': [
                                {
                                    'time': '2016-10-23T18:25:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                },
                                {
                                    'time': '2016-10-23T18:30:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                },
                                {
                                    'time': '2016-10-23T18:40:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                }
                            ]
                        },
                        {
                            'timeRangeStart': '2016-10-23T19:00:00.000Z',
                            'timeRangeEnd': '2016-10-23T19:59:59.999Z',
                            'noOfActions': 1,
                            'amount': 1550000,
                            'CPTYMargin': 1500000,
                            'EXPMargin': 10000000,
                            'actionsList': [
                                {
                                    'time': '2016-10-23T19:25:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                }
                            ]
                        },
                    ]
                },
                {
                    'status': 'pledge',
                    'timeFrames': [ //TBC, depending on our UX designer this might change
                        {
                            'timeRangeStart': '2016-10-23T18:00:00.000Z',
                            'timeRangeEnd': '2016-10-23T18:59:59.999Z',
                            'noOfActions': 3,
                            'amount': 1500000,
                            'CPTYMargin': 1500000,
                            'EXPMargin': 10000000,
                            'actionsList': [
                                {
                                    'time': '2016-10-23T18:25:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                },
                                {
                                    'time': '2016-10-23T18:30:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                },
                                {
                                    'time': '2016-10-23T18:40:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                }
                            ]
                        },
                        {
                            'timeRangeStart': '2016-10-23T19:00:00.000Z',
                            'timeRangeEnd': '2016-10-23T19:59:59.999Z',
                            'noOfActions': 1,
                            'amount': 1550000,
                            'CPTYMargin': 1500000,
                            'EXPMargin': 10000000,
                            'actionsList': [
                                {
                                    'time': '2016-10-23T19:25:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                }
                            ]
                        },
                    ]
                },
                {
                    'status': 'dispute',
                    'timeFrames': [ //TBC, depending on our UX designer this might change
                        {
                            'timeRangeStart': '2016-10-23T18:00:00.000Z',
                            'timeRangeEnd': '2016-10-23T18:59:59.999Z',
                            'noOfActions': 3,
                            'amount': 1500000,
                            'CPTYMargin': 1500000,
                            'EXPMargin': 10000000,
                            'actionsList': [
                                {
                                    'time': '2016-10-23T18:25:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                },
                                {
                                    'time': '2016-10-23T18:30:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                },
                                {
                                    'time': '2016-10-23T18:40:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                }
                            ]
                        },
                        {
                            'timeRangeStart': '2016-10-23T19:00:00.000Z',
                            'timeRangeEnd': '2016-10-23T19:59:59.999Z',
                            'noOfActions': 1,
                            'amount': 1550000,
                            'CPTYMargin': 1500000,
                            'EXPMargin': 10000000,
                            'actionsList': [
                                {
                                    'time': '2016-10-23T19:25:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                }
                            ]
                        },
                    ]
                }
            ]
        },
        {
            'type': 'OTC_bilateral',
            'marginStatus': [
                {
                    'status': 'expected',
                    'timeFrames': [ //TBC, depending on our UX designer this might change
                        {
                            'timeRangeStart': '2016-10-23T18:00:00.000Z',
                            'timeRangeEnd': '2016-10-23T18:59:59.999Z',
                            'noOfActions': 3,
                            'amount': 1500000,
                            'CPTYMargin': 1500000,
                            'EXPMargin': 10000000,
                            'actionsList': [
                                {
                                    'time': '2016-10-23T18:25:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                },
                                {
                                    'time': '2016-10-23T18:30:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                },
                                {
                                    'time': '2016-10-23T18:40:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                }
                            ]
                        },
                        {
                            'timeRangeStart': '2016-10-23T19:00:00.000Z',
                            'timeRangeEnd': '2016-10-23T19:59:59.999Z',
                            'noOfActions': 1,
                            'amount': 1550000,
                            'CPTYMargin': 1500000,
                            'EXPMargin': 10000000,
                            'actionsList': [
                                {
                                    'time': '2016-10-23T19:25:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                }
                            ]
                        },
                    ]
                },
                {
                    'status': 'unrecon',
                    'timeFrames': [ //TBC, depending on our UX designer this might change
                        {
                            'timeRangeStart': '2016-10-23T18:00:00.000Z',
                            'timeRangeEnd': '2016-10-23T18:59:59.999Z',
                            'noOfActions': 3,
                            'amount': 1500000,
                            'CPTYMargin': 1500000,
                            'EXPMargin': 10000000,
                            'actionsList': [
                                {
                                    'time': '2016-10-23T18:25:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                },
                                {
                                    'time': '2016-10-23T18:30:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                },
                                {
                                    'time': '2016-10-23T18:40:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                }
                            ]
                        },
                        {
                            'timeRangeStart': '2016-10-23T19:00:00.000Z',
                            'timeRangeEnd': '2016-10-23T19:59:59.999Z',
                            'noOfActions': 1,
                            'amount': 1550000,
                            'CPTYMargin': 1500000,
                            'EXPMargin': 10000000,
                            'actionsList': [
                                {
                                    'time': '2016-10-23T19:25:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                }
                            ]
                        },
                    ]
                },
                {
                    'status': 'recon',
                    'timeFrames': [ //TBC, depending on our UX designer this might change
                        {
                            'timeRangeStart': '2016-10-23T18:00:00.000Z',
                            'timeRangeEnd': '2016-10-23T18:59:59.999Z',
                            'noOfActions': 3,
                            'amount': 1500000,
                            'CPTYMargin': 1500000,
                            'EXPMargin': 10000000,
                            'actionsList': [
                                {
                                    'time': '2016-10-23T18:25:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                },
                                {
                                    'time': '2016-10-23T18:30:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                },
                                {
                                    'time': '2016-10-23T18:40:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                }
                            ]
                        },
                        {
                            'timeRangeStart': '2016-10-23T19:00:00.000Z',
                            'timeRangeEnd': '2016-10-23T19:59:59.999Z',
                            'noOfActions': 1,
                            'amount': 1550000,
                            'CPTYMargin': 1500000,
                            'EXPMargin': 10000000,
                            'actionsList': [
                                {
                                    'time': '2016-10-23T19:25:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                }
                            ]
                        },
                    ]
                },
                {
                    'status': 'pledge',
                    'timeFrames': [ //TBC, depending on our UX designer this might change
                        {
                            'timeRangeStart': '2016-10-23T18:00:00.000Z',
                            'timeRangeEnd': '2016-10-23T18:59:59.999Z',
                            'noOfActions': 3,
                            'amount': 1500000,
                            'CPTYMargin': 1500000,
                            'EXPMargin': 10000000,
                            'actionsList': [
                                {
                                    'time': '2016-10-23T18:25:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                },
                                {
                                    'time': '2016-10-23T18:30:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                },
                                {
                                    'time': '2016-10-23T18:40:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                }
                            ]
                        },
                        {
                            'timeRangeStart': '2016-10-23T19:00:00.000Z',
                            'timeRangeEnd': '2016-10-23T19:59:59.999Z',
                            'noOfActions': 1,
                            'amount': 1550000,
                            'CPTYMargin': 1500000,
                            'EXPMargin': 10000000,
                            'actionsList': [
                                {
                                    'time': '2016-10-23T19:25:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                }
                            ]
                        },
                    ]
                },
                {
                    'status': 'dispute',
                    'timeFrames': [ //TBC, depending on our UX designer this might change
                        {
                            'timeRangeStart': '2016-10-23T18:00:00.000Z',
                            'timeRangeEnd': '2016-10-23T18:59:59.999Z',
                            'noOfActions': 3,
                            'amount': 1500000,
                            'CPTYMargin': 1500000,
                            'EXPMargin': 10000000,
                            'actionsList': [
                                {
                                    'time': '2016-10-23T18:25:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                },
                                {
                                    'time': '2016-10-23T18:30:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                },
                                {
                                    'time': '2016-10-23T18:40:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                }
                            ]
                        },
                        {
                            'timeRangeStart': '2016-10-23T19:00:00.000Z',
                            'timeRangeEnd': '2016-10-23T19:59:59.999Z',
                            'noOfActions': 1,
                            'amount': 1550000,
                            'CPTYMargin': 1500000,
                            'EXPMargin': 10000000,
                            'actionsList': [
                                {
                                    'time': '2016-10-23T19:25:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                }
                            ]
                        },
                    ]
                }
            ]
        },
        {
            'type': 'OTC_legacy',
            'marginStatus': [
                {
                    'status': 'expected',
                    'timeFrames': [ //TBC, depending on our UX designer this might change
                        {
                            'timeRangeStart': '2016-10-23T18:00:00.000Z',
                            'timeRangeEnd': '2016-10-23T18:59:59.999Z',
                            'noOfActions': 3,
                            'amount': 1500000,
                            'CPTYMargin': 1500000,
                            'EXPMargin': 10000000,
                            'actionsList': [
                                {
                                    'time': '2016-10-23T18:25:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                },
                                {
                                    'time': '2016-10-23T18:30:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                },
                                {
                                    'time': '2016-10-23T18:40:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                }
                            ]
                        },
                        {
                            'timeRangeStart': '2016-10-23T19:00:00.000Z',
                            'timeRangeEnd': '2016-10-23T19:59:59.999Z',
                            'noOfActions': 1,
                            'amount': 1550000,
                            'CPTYMargin': 1500000,
                            'EXPMargin': 10000000,
                            'actionsList': [
                                {
                                    'time': '2016-10-23T19:25:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                }
                            ]
                        },
                    ]
                },
                {
                    'status': 'unrecon',
                    'timeFrames': [ //TBC, depending on our UX designer this might change
                        {
                            'timeRangeStart': '2016-10-23T18:00:00.000Z',
                            'timeRangeEnd': '2016-10-23T18:59:59.999Z',
                            'noOfActions': 3,
                            'amount': 1500000,
                            'CPTYMargin': 1500000,
                            'EXPMargin': 10000000,
                            'actionsList': [
                                {
                                    'time': '2016-10-23T18:25:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                },
                                {
                                    'time': '2016-10-23T18:30:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                },
                                {
                                    'time': '2016-10-23T18:40:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                }
                            ]
                        },
                        {
                            'timeRangeStart': '2016-10-23T19:00:00.000Z',
                            'timeRangeEnd': '2016-10-23T19:59:59.999Z',
                            'noOfActions': 1,
                            'amount': 1550000,
                            'CPTYMargin': 1500000,
                            'EXPMargin': 10000000,
                            'actionsList': [
                                {
                                    'time': '2016-10-23T19:25:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                }
                            ]
                        },
                    ]
                },
                {
                    'status': 'recon',
                    'timeFrames': [ //TBC, depending on our UX designer this might change
                        {
                            'timeRangeStart': '2016-10-23T18:00:00.000Z',
                            'timeRangeEnd': '2016-10-23T18:59:59.999Z',
                            'noOfActions': 3,
                            'amount': 1500000,
                            'CPTYMargin': 1500000,
                            'EXPMargin': 10000000,
                            'actionsList': [
                                {
                                    'time': '2016-10-23T18:25:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                },
                                {
                                    'time': '2016-10-23T18:30:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                },
                                {
                                    'time': '2016-10-23T18:40:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                }
                            ]
                        },
                        {
                            'timeRangeStart': '2016-10-23T19:00:00.000Z',
                            'timeRangeEnd': '2016-10-23T19:59:59.999Z',
                            'noOfActions': 1,
                            'amount': 1550000,
                            'CPTYMargin': 1500000,
                            'EXPMargin': 10000000,
                            'actionsList': [
                                {
                                    'time': '2016-10-23T19:25:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                }
                            ]
                        },
                    ]
                },
                {
                    'status': 'pledge',
                    'timeFrames': [ //TBC, depending on our UX designer this might change
                        {
                            'timeRangeStart': '2016-10-23T18:00:00.000Z',
                            'timeRangeEnd': '2016-10-23T18:59:59.999Z',
                            'noOfActions': 3,
                            'amount': 1500000,
                            'CPTYMargin': 1500000,
                            'EXPMargin': 10000000,
                            'actionsList': [
                                {
                                    'time': '2016-10-23T18:25:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                },
                                {
                                    'time': '2016-10-23T18:30:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                },
                                {
                                    'time': '2016-10-23T18:40:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                }
                            ]
                        },
                        {
                            'timeRangeStart': '2016-10-23T19:00:00.000Z',
                            'timeRangeEnd': '2016-10-23T19:59:59.999Z',
                            'noOfActions': 1,
                            'amount': 1550000,
                            'CPTYMargin': 1500000,
                            'EXPMargin': 10000000,
                            'actionsList': [
                                {
                                    'time': '2016-10-23T19:25:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                }
                            ]
                        },
                    ]
                },
                {
                    'status': 'dispute',
                    'timeFrames': [ //TBC, depending on our UX designer this might change
                        {
                            'timeRangeStart': '2016-10-23T18:00:00.000Z',
                            'timeRangeEnd': '2016-10-23T18:59:59.999Z',
                            'noOfActions': 3,
                            'amount': 1500000,
                            'CPTYMargin': 1500000,
                            'EXPMargin': 10000000,
                            'actionsList': [
                                {
                                    'time': '2016-10-23T18:25:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                },
                                {
                                    'time': '2016-10-23T18:30:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                },
                                {
                                    'time': '2016-10-23T18:40:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                }
                            ]
                        },
                        {
                            'timeRangeStart': '2016-10-23T19:00:00.000Z',
                            'timeRangeEnd': '2016-10-23T19:59:59.999Z',
                            'noOfActions': 1,
                            'amount': 1550000,
                            'CPTYMargin': 1500000,
                            'EXPMargin': 10000000,
                            'actionsList': [
                                {
                                    'time': '2016-10-23T19:25:43.511Z',
                                    'legalEntity': 'Acuo SG',
                                    'cpty': 'ABC bank',
                                    'venue': 'Singapore',
                                    'ccy': 'SGD',
                                    'initialMargin': 100000,
                                    'variableMargin': 500000
                                }
                            ]
                        },
                    ]
                }
            ]
        },

    ]
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
