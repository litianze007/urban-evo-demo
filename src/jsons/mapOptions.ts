
export function getMapOptions() {
        return {
                "zoomControll": true,
                "mapTypeControl": false,
                "styles": [
                        {
                                "featureType": "poi.business",
                                "elementType": "labels.icon",
                                "stylers": [
                                        {
                                                "color": "#c7c6bd"
                                        }
                                ]
                        },
                        {
                                "featureType": "poi.business",
                                "elementType": "labels.text.fill",
                                "stylers": [
                                        {
                                                "color": "#c7c6bd"
                                        }
                                ]
                        },
                        {
                                "featureType": "poi.place_of_worship",
                                "elementType": "labels.icon",
                                "stylers": [
                                        {
                                                "color": "#c7c6bd"
                                        }
                                ]
                        },
                        {
                                "featureType": "poi.place_of_worship",
                                "elementType": "labels.text.fill",
                                "stylers": [
                                        {
                                                "color": "#c7c6bd"
                                        }
                                ]
                        },
                        {
                                "featureType": "poi.sports_complex",
                                "elementType": "labels.icon",
                                "stylers": [
                                        {
                                                "color": "#c7c6bd"
                                        }
                                ]
                        },
                        {
                                "featureType": "poi.sports_complex",
                                "elementType": "labels.text.fill",
                                "stylers": [
                                        {
                                                "color": "#c7c6bd"
                                        }
                                ]
                        },
                        {
                                "featureType": "poi.attraction",
                                "elementType": "labels.icon",
                                "stylers": [
                                        {
                                                "color": "#c7c6bd"
                                        }
                                ]
                        },
                        {
                                "featureType": "poi.attraction",
                                "elementType": "labels.text.fill",
                                "stylers": [
                                        {
                                                "color": "#c7c6bd"
                                        }
                                ]
                        },
                        {
                                "featureType": "poi.park",
                                "elementType": "labels.icon",
                                "stylers": [
                                        {
                                                "color": "#c7c6bd"
                                        }
                                ]
                        },
                        {
                                "featureType": "poi.park",
                                "elementType": "labels.text.fill",
                                "stylers": [
                                        {
                                                "color": "#c7c6bd"
                                        }
                                ]
                        },
                        {
                                "featureType": "poi.government",
                                "elementType": "labels.icon",
                                "stylers": [
                                        {
                                                "color": "#c7c6bd"
                                        }
                                ]
                        },
                        {
                                "featureType": "poi.government",
                                "elementType": "labels.text.fill",
                                "stylers": [
                                        {
                                                "color": "#c7c6bd"
                                        }
                                ]
                        },
                        {
                                "featureType": "poi.medical",
                                "elementType": "labels.icon",
                                "stylers": [
                                        {
                                                "color": "#c7c6bd"
                                        }
                                ]
                        },
                        {
                                "featureType": "poi.medical",
                                "elementType": "labels.text.fill",
                                "stylers": [
                                        {
                                                "color": "#c7c6bd"
                                        }
                                ]
                        },
                ]
        }
}


export function filterOptions() {
        return [
                {
                        value: 'Canberra Bruce',
                        label: 'Bruce',
                        children: [
                                {
                                        value: 'Infrastructure',
                                        label: 'Infrastructure',
                                        children: [
                                                {
                                                        value: 'lake_ginninderra_park',
                                                        label: 'Lake Ginninderra Park Renovation'
                                                },
                                                {
                                                        value: 'belconnen_bus_interchange',
                                                        label: 'Belconnen Bus Interchange Upgrade'
                                                }
                                        ]
                                },
                                {
                                        value: 'Education',
                                        label: 'Education',
                                        children: [
                                                {
                                                        value: 'bruce_high_school',
                                                        label: 'Bruce High School Expansion'
                                                },
                                                {
                                                        value: 'bruce_college',
                                                        label: 'Canberra University Modernization'
                                                }
                                        ]
                                }
                        ]
                },
                {
                        value: 'Canberra Woden',
                        label: 'Woden',
                        children: [
                                {
                                        value: 'Infrastructure',
                                        label: 'Infrastructure',
                                        children: [
                                                {
                                                        value: 'woden_transport_hub',
                                                        label: 'Woden Transport Hub Redevelopment'
                                                },
                                                {
                                                        value: 'woden_park_adevlopment',
                                                        label: 'Woden Park Development Project'
                                                }
                                        ]
                                },
                                {
                                        value: 'Education',
                                        label: 'Education',
                                        children: [
                                                {
                                                        value: 'woden_primary_school',
                                                        label: 'Woden Primary School Expansion'
                                                },
                                                {
                                                        value: 'woden_community_college',
                                                        label: 'Woden Community College Expansion'
                                                }
                                        ]
                                }
                        ]
                }
        ]
}


export function regionData() {
        return {
                "Canberra Bruce": {
                        "Infrastructure": [
                                {
                                        "projectName": "Lake Ginninderra Park Renovation",
                                        "position": {
                                                "lat": -35.2353,
                                                "lng": 149.0723
                                        }
                                },
                                {
                                        "projectName": "Belconnen Bus Interchange Upgrade",
                                        "position": {
                                                "lat": -35.2394,
                                                "lng": 149.0684
                                        }
                                }
                        ],
                        "Education": [
                                {
                                        "projectName": "Bruce High School Expansion",
                                        "position": {
                                                "lat": -35.2380,
                                                "lng": 149.0805
                                        }
                                },
                                {
                                        "projectName": "Canberra University Modernization",
                                        "position": {
                                                "lat": -35.2446,
                                                "lng": 149.0839
                                        }
                                }
                        ]
                },
                "Canberra Woden": {
                        "Infrastructure": [
                                {
                                        "projectName": "Woden Transport Hub Redevelopment",
                                        "position": {
                                                "lat": -35.3453,
                                                "lng": 149.0876
                                        }
                                },
                                {
                                        "projectName": "Woden Park Development Project",
                                        "position": {
                                                "lat": -35.3469,
                                                "lng": 149.0832
                                        }
                                }
                        ],
                        "Education": [
                                {
                                        "projectName": "Woden Primary School Expansion",
                                        "position": {
                                                "lat": -35.3487,
                                                "lng": 149.0907
                                        }
                                },
                                {
                                        "projectName": "Woden Community College Expansion",
                                        "position": {
                                                "lat": -35.3510,
                                                "lng": 149.0951
                                        }
                                }
                        ]
                }
        }
}
