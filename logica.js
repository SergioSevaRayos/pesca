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
            value: '#3498db'  // Color de las partículas
        },
        shape: {
            type: 'triangle',  // Tipo de forma (círculo, triángulo, etc.)
            stroke: {
                width: 1,
                color: 'cornflowerblue'
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
            enable: true,
            distance: 150,
            color: '#ffcc00',
            opacity: 0.3,
            width: 1
        },
        move: {
            enable: true,
            speed: 1,
            direction: 'none',
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
                enable: true,
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