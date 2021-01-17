const apiHelpers = require('./apiHelpers');

describe('transformBritishTriathlonEvent...', () => {
    it('...should transform raw event data for event containing all fields', () => {
        const rawData = {
            next:
                'https://api.britishtriathlon.org/openactive/v1/events?afterTimestamp=1454071226&afterId=6290',
            items: [
                {
                    state: 'updated',
                    kind: 'Event',
                    id: 6302,
                    modified: 1446568515,
                    data: {
                        '@context': 'https://openactive.io/',
                        type: 'HeadlineEvent',
                        identifier: 'event-6302',
                        url:
                            'https://www.britishtriathlon.org/events/hebridean-cycle-challenge_6302?utm_source=openactive&utm_medium=referral',
                        name: 'Hebridean Cycle Challenge',
                        description:
                            "The Hebridean Cycle Challenge is a competitive road and mountain bike race with the option of running the off-road section instead of cycling it. The Challenge begins with a 33.6 mile road cycle from the Creed Enterprise Park outside Stornoway to Miavaig in North Harris. The race then continues with a 10.5 mile off road section through the mountains from Miavaig to Bowglas and ends with a 0.9 mile road section to the finish at the Scaladale Centre, Ardvourlie, North Harris. Competitors can enter the Hebridean Cycle Challenge as soloists or as teams of two with the changeover point in the team event being at the start of the off-road section at Miavaig. Also on the day there is The Hebridean Charity Cycle a non competitive 21 mile event catering for casual cyclists as well as The Hebridean Charity Walk, a 12k,non-competitive walk following the ancient route through the Harris hills . This year's charity is the Andrew Macleod Memorial Fund which supports local heart screening events.",
                        startDate: '2016-06-18',
                        duration: 'P1D',
                        location: {
                            type: 'Place',
                            name: 'Scaladale Outdoor Centre',
                            address: {
                                type: 'PostalAddress',
                                addressLocality: 'Isle of Harris',
                                addressRegion: 'Western Isles',
                                postalCode: 'HS3 3AB',
                                streetAddress:
                                    'Scaladale Outdoor Cnetre, Ardvourlie',
                                addressCountry: 'GB'
                            },
                            geo: {
                                type: 'GeoCoordinates',
                                latitude: 58.002,
                                longitude: -6.7561
                            }
                        },
                        organizer: {
                            type: 'Organization',
                            name: 'Lewis and Harris Youth Clubs Association'
                        },
                        eventStatus: 'https://schema.org/EventScheduled',
                        activity: [
                            {
                                type: 'Concept',
                                id:
                                    'https://openactive.io/activity-list#c4e6c711-66fc-438e-b206-1dfdddc2d912',
                                prefLabel: 'Triathlon',
                                inScheme: 'https://openactive.io/activity-list'
                            }
                        ],
                        'btf:raceTypes': ['Duathlon'],
                        subEvent: [
                            {
                                type: 'Event',
                                url:
                                    'https://www.britishtriathlon.org/events/hebridean-cycle-challenge_6302?utm_source=openactive&utm_medium=referral',
                                identifier: 'race-26444',
                                name: 'Hebridean Cycle Challenge',
                                activity: [
                                    {
                                        type: 'Concept',
                                        id:
                                            'https://openactive.io/activity-list#c4e6c711-66fc-438e-b206-1dfdddc2d912',
                                        prefLabel: 'Triathlon',
                                        inScheme:
                                            'https://openactive.io/activity-list'
                                    }
                                ],
                                genderRestriction:
                                    'https://openactive.io/NoRestriction',
                                level: ['Beginner'],
                                'btf:componentEvent': [
                                    {
                                        type: 'btf:EventComponent',
                                        identifier: 'stage-60598',
                                        name: 'run',
                                        activity: [
                                            {
                                                type: 'Concept',
                                                id:
                                                    'https://openactive.io/activity-list#72ddb2dc-7d75-424e-880a-d90eabe91381',
                                                prefLabel: 'Running',
                                                inScheme:
                                                    'https://openactive.io/activity-list'
                                            }
                                        ],
                                        'beta:distance': {
                                            type: 'QuantifiedValue',
                                            value: 11.4,
                                            unitCode: 'SMI'
                                        },
                                        'btf:order': 1
                                    },
                                    {
                                        type: 'btf:EventComponent',
                                        identifier: 'stage-60599',
                                        name: 'bike',
                                        activity: [
                                            {
                                                type: 'Concept',
                                                id:
                                                    'https://openactive.io/activity-list#4a19873e-118e-43f4-b86e-05acba8fb1de',
                                                prefLabel: 'Cycling',
                                                inScheme:
                                                    'https://openactive.io/activity-list'
                                            }
                                        ],
                                        'beta:distance': {
                                            type: 'QuantifiedValue',
                                            value: 33.6,
                                            unitCode: 'SMI'
                                        },
                                        'btf:order': 2
                                    },
                                    {
                                        type: 'btf:EventComponent',
                                        identifier: 'stage-60600',
                                        name: 'bike',
                                        activity: [
                                            {
                                                type: 'Concept',
                                                id:
                                                    'https://openactive.io/activity-list#4a19873e-118e-43f4-b86e-05acba8fb1de',
                                                prefLabel: 'Cycling',
                                                inScheme:
                                                    'https://openactive.io/activity-list'
                                            }
                                        ],
                                        'beta:distance': {
                                            type: 'QuantifiedValue',
                                            value: 11.4,
                                            unitCode: 'SMI'
                                        },
                                        'btf:order': 3
                                    }
                                ]
                            }
                        ]
                    }
                }
            ]
        };
        const expected = [
            {
                name: 'Hebridean Cycle Challenge',
                url:
                    'https://www.britishtriathlon.org/events/hebridean-cycle-challenge_6302?utm_source=openactive&utm_medium=referral',
                date: '2016-06-18',
                description:
                    "The Hebridean Cycle Challenge is a competitive road and mountain bike race with the option of running the off-road section instead of cycling it. The Challenge begins with a 33.6 mile road cycle from the Creed Enterprise Park outside Stornoway to Miavaig in North Harris. The race then continues with a 10.5 mile off road section through the mountains from Miavaig to Bowglas and ends with a 0.9 mile road section to the finish at the Scaladale Centre, Ardvourlie, North Harris. Competitors can enter the Hebridean Cycle Challenge as soloists or as teams of two with the changeover point in the team event being at the start of the off-road section at Miavaig. Also on the day there is The Hebridean Charity Cycle a non competitive 21 mile event catering for casual cyclists as well as The Hebridean Charity Walk, a 12k,non-competitive walk following the ancient route through the Harris hills . This year's charity is the Andrew Macleod Memorial Fund which supports local heart screening events.",
                location: {
                    name: 'Scaladale Outdoor Centre',
                    geo: { lat: 58.002, long: -6.7561 }
                },
                organizer: 'Lewis and Harris Youth Clubs Association',
                type: ['Duathlon'],
                eventFeatures: ''
            }
        ];
        const actual = apiHelpers.transformBritishTriathlonEvent(rawData);
        expect(actual).toEqual(expected);
    });

    it('...should transform raw event data which contains no events', () => {
        const rawData = {
            next:
                'https://api.britishtriathlon.org/openactive/v1/events?afterTimestamp=1454071226&afterId=6290',
            items: []
        };
        const expected = [];
        const actual = apiHelpers.transformBritishTriathlonEvent(rawData);
        expect(actual).toEqual(expected);
    });
});
