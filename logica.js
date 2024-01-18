//---------------------------------------------------> INICIO
// Función para establecer un fondo animado en el login
particlesJS('background-container', {
    particles: {
        number: {
            value: 30,  // Número de partículas
            density: {
                enable: true,
                value_area: 200  // Densidad de partículas
            }
        },
        color: {
            value: '#fff'  // Color de las partículas
        },
        shape: {
            type: 'circle',  // Tipo de forma (círculo, triángulo, etc.)
            stroke: {
                width: 1,
                color: 'white'
            },
            polygon: {
                nb_sides: 9
            }
        },
        opacity: {
            value: 0.7,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 5,  // Tamaño de las partículas
            random: true,
            anim: {
                enable: false,
                speed: 10,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: false,
            distance: 150,
            color: 'white',
            opacity: 0,
            width: 0
        },
        move: {
            enable: true,
            speed: 1,
            direction: 'top', // Cambia 'none' a 'top'
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: false,
                mode: 'repulse'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
});
//---------------------------------------------------> FIN
//---------------------------------------------------> INICIO
// Obtén la referencia a la imagen del encabezado
const headerImg = document.querySelector('header > img');

// Función para actualizar la posición de la imagen en función del desplazamiento
function actualizarPosicion() {
    // Obtén el desplazamiento vertical actual de la página
    const scrollY = window.scrollY || window.pageYOffset;

    // Ajusta la propiedad 'top' de la imagen en función del desplazamiento
    headerImg.style.top = (50 - scrollY) + 'px';
}

// Registra un evento de desplazamiento para llamar a la función actualizarPosicion
window.addEventListener('scroll', actualizarPosicion);

// Llama a la función una vez al cargar la página para establecer la posición inicial
actualizarPosicion();
//---------------------------------------------------> FIN

//---------------------------------------------------> INICIO
document.addEventListener("DOMContentLoaded", function () {
    // Obtener la fecha actual
    var fecha = new Date();
    // Obtener el mes actual (0-11)
    var mes = fecha.getMonth();

    // Definir las especies para cada temporada
    var especiesPorTemporada = {
        verano: [
            { nombre: "Dorada", imagen: "media/img/dorada.png" },
            { nombre: "Lubina", imagen: "media/img/lubina.png" },
        ],
        otono: [
            { nombre: "Sargo", imagen: "media/img/sargo.png" },
            { nombre: "Palometón", imagen: "media/img/palometón.png" },
            { nombre: "Lubina", imagen: "media/img/lubina.png" },
            { nombre: "Dentón", imagen: "media/img/denton.png" },
            { nombre: "Dorada", imagen: "media/img/dorada.png" },
            { nombre: "Corvina", imagen: "media/img/corvina.png" }
        ],
        invierno: [
            { nombre: "Lubina", imagen: "media/img/lubina.png" },
            { nombre: "Róbalo", imagen: "media/img/robalo.png" },
            { nombre: "Herrera", imagen: "media/img/herrera.png" },
            { nombre: "Corvina", imagen: "media/img/corvina.png" }
        ],
        primavera: [
            { nombre: "Corvina", imagen: "media/img/corvina.png" },
            { nombre: "Lubina", imagen: "media/img/lubina.png" },
            { nombre: "Palometa", imagen: "media/img/palometón.png" },
            { nombre: "Dentón", imagen: "media/img/denton.png" }
        ]
    };

    // Seleccionar el elemento de la sección de temporadas
    var temporadasSection = document.getElementById("temporadasSection");

    // Función para actualizar el contenido de la sección de temporadas
    function actualizarContenidoTemporadas(temporada) {
        // Limpiar el contenido existente
        temporadasSection.innerHTML = "";

        // Crear elementos para cada especie y agregarlos a la sección
        especiesPorTemporada[temporada].forEach(function (especie) {
            var imgEspecie = document.createElement("img");
            imgEspecie.src = especie.imagen;
            imgEspecie.alt = especie.nombre;

            var pNombreEspecie = document.createElement("p");
            pNombreEspecie.textContent = especie.nombre;

            var divEspecie = document.createElement("div");
            divEspecie.appendChild(imgEspecie);
            divEspecie.appendChild(pNombreEspecie);

            temporadasSection.appendChild(divEspecie);
        });
    }

    // Determinar la temporada actual
    if (mes >= 3 && mes <= 5) { // Primavera (meses 3, 4, 5)
        actualizarContenidoTemporadas("primavera");
    } else if (mes >= 6 && mes <= 8) { // Verano (meses 6, 7, 8)
        actualizarContenidoTemporadas("verano");
    } else if (mes >= 9 && mes <= 11) { // Otoño (meses 9, 10, 11)
        actualizarContenidoTemporadas("otono");
    } else { // Invierno (meses 0, 1, 2)
        actualizarContenidoTemporadas("invierno");
    }
});
//---------------------------------------------------> FIN
//---------------------------------------------------> INICIO
$(document).ready(function () {
    // Configuración inicial del calendario
    
    $('#calendario').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
            
            
        },
        editable: false, // Para deshabilitar la edición de eventos
        locale: 'es', // Establece el idioma del calendario a español

    });
});
//---------------------------------------------------> FIN
