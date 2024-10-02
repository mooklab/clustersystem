var map
const adresses = [
    {
        name: 'Офис в Москве',
        coordinate: [55.802750, 37.584604]
    }, {
        name: 'Офис в Cанкт-Петербурге',
        coordinate: [59.989454, 30.370261]
    }, {
        name: 'Шоурум',
        coordinate: [55.790529, 37.569063]
    }
]


ymaps.ready(function(){
    map = new ymaps.Map('map', {
        controls: ["zoomControl"],
        center: adresses[0].coordinate,
        zoom: 16,
    })
    adresses.forEach( adress => {
        var placemark = new ymaps.Placemark(adress.coordinate, { hintContent: adress.name, }, {
            iconLayout: 'default#image',
            iconImageHref: 'images/yandex_pin.svg',
            iconImageSize: [60, 60],
            iconImageOffset: [-35, -50]
        })
        map.geoObjects.add(placemark)
    })
    map.behaviors.disable('scrollZoom')
})



