var provinciasCosteras = {
    'A Coruña': [43.3713, -8.418],
    'Lugo': [43.0096, -7.5560],
    'Pontevedra': [42.4312, -8.6470],
    'Oviedo': [43.5297, -5.6773],
    'Gijón': [43.3614, -5.8593],
    'Avilés': [43.5560, -5.9248],
    'Santander': [43.4623, -3.8099],
    'Bilbao': [43.2627, -2.9253],
    'San Sebastián': [43.3183, -1.9812],
    'Barcelona': [41.3888, 2.1589],
    'Tarragona': [41.1189, 1.2445],
    'Castellón': [39.9864, -0.0513],
    'Valencia': [39.4699, -0.3763],
    'Alicante': [38.3452, -0.4810],
    'Murcia': [37.9922, -1.1307],
    'Almería': [36.8386, -2.4491],
    'Málaga': [36.7196, -4.4200],
    'Cádiz': [36.5298, -6.2926],
    'Huelva': [37.2614, -6.9447],
    'Sevilla': [37.3886, -5.9825],
};

// Inicializar el mapa con estilo Dark Matter
var map = L.map('mapa').setView([40.4168, -3.7038], 5);
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, CartoDB'
}).addTo(map);

// Añadir un marcador para cada provincia costera
for (var provincia in provinciasCosteras) {
    if (provinciasCosteras.hasOwnProperty(provincia)) {
        var marker = L.marker(provinciasCosteras[provincia]).addTo(map);
        var provinciaNombre = provincia.toLowerCase().replace(/\s+/g, '-');
        var popupContent = "<b>" + provincia + "</b><br>¡Datos aquí!<br><a href='" + provinciaNombre + ".html'>Ver más</a>";
        marker.bindPopup(popupContent);

        // Agregar evento de clic para redirigir al hacer clic en el enlace "Ver más"
        marker.on('popupopen', function (e) {
            var popup = e.popup;
            var link = popup._contentNode.querySelector('a');
            if (link) {
                link.addEventListener('click', function () {
                    window.location.href = link.getAttribute('href');
                });
            }
        });
    }
}


document.addEventListener('DOMContentLoaded', function () {
    var puntosValencia = {
        'Playa 1': [39.4699, -0.3763],
        'Playa 2': [39.4550, -0.3322],
        'Playa 3': [39.4816, -0.3084],
        // Agrega más puntos según sea necesario
    };

    // Inicializar el mapa de Valencia
    var mapValencia = L.map('mapa-valencia').setView([39.4699, -0.3763], 12);
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, CartoDB'
    }).addTo(mapValencia);

    // Añadir marcadores adicionales para Valencia
    for (var punto in puntosValencia) {
        if (puntosValencia.hasOwnProperty(punto)) {
            var marker = L.marker(puntosValencia[punto]).addTo(mapValencia);
            marker.bindPopup("<b>" + punto + "</b><br>Descripción del punto aquí.");
        }
    }
});