document.querySelector('.card-btn').addEventListener('click', () => {
    document.querySelector('.hero__wrapper').classList.toggle('wrapper-show')
})
document.querySelector('.hero__close').addEventListener('click', () => {
    document.querySelector('.hero__wrapper').classList.remove('wrapper-show')
})
document.querySelector('.hero__wrapper').addEventListener('click', (e) => {
    if (e.target.classList.contains('hero__wrapper')) {
        document.querySelector('.hero__wrapper').classList.remove('wrapper-show')
    }
})

document.querySelector('.header_menu').addEventListener('click', () => {
    document.querySelector('.navbar').classList.toggle('show')
})

var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 42.8780549, lng: 74.5902513},
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [
                {
                    "featureType": "all",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#202c3e"
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "gamma": 0.01
                        },
                        {
                            "lightness": 20
                        },
                        {
                            "weight": "1.39"
                        },
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "weight": "0.96"
                        },
                        {
                            "saturation": "9"
                        },
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#000000"
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "lightness": 30
                        },
                        {
                            "saturation": "9"
                        },
                        {
                            "color": "#29446b"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "saturation": 20
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "lightness": 20
                        },
                        {
                            "saturation": -20
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "lightness": 10
                        },
                        {
                            "saturation": -30
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#193a55"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "saturation": 25
                        },
                        {
                            "lightness": 25
                        },
                        {
                            "weight": "0.01"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [
                        {
                            "lightness": -20
                        }
                    ]
                }

            ]

        }
    )
}
