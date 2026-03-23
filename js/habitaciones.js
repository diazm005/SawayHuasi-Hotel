/*Carrusel*/
document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(carousel => {
        const slides = carousel.querySelector('.slides');
        const images = slides.querySelectorAll('img');
        const prevButton = carousel.querySelector('.prev');
        const nextButton = carousel.querySelector('.next');
        let currentIndex = 0;
        const totalSlides = images.length;
        const slideWidth = carousel.offsetWidth;

        // Configurar el tamaño de las diapositivas
        slides.style.width = `${slideWidth * totalSlides}px`;

        images.forEach(image => {
            image.style.width = `${slideWidth}px`;
        });

        prevButton.addEventListener('click', () => {
            currentIndex--;
            if (currentIndex < 0) {
                currentIndex = totalSlides - 1;
            }
            updateSlidePosition();
        });

        nextButton.addEventListener('click', () => {
            currentIndex++;
            if (currentIndex >= totalSlides) {
                currentIndex = 0;
            }
            updateSlidePosition();
        });

        function updateSlidePosition() {
            slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        }

        // Inicializar la posición de la primera diapositiva
        updateSlidePosition();
    });
});

/*Reservar Ahora*/
document.addEventListener('DOMContentLoaded', function() {
    // Mostrar el formulario de reserva al hacer clic en el botón "RESERVAR AHORA"
    document.querySelector('.reservation-button-container button').addEventListener('click', function() {
        mostrarFormulario();
    });

    // Mostrar mensaje de éxito al enviar el formulario
    document.getElementById('reservaFormElement').addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío real del formulario
        mostrarMensajeExito();
    });

    // Cerrar mensaje de éxito y regresar a la página de inicio
    document.querySelector('#successMessage button').addEventListener('click', function() {
        cerrarMensajeExito();
    });
});

function mostrarFormulario() {
    var formContainer = document.getElementById("reservaForm");
    formContainer.style.display = "block"; // Mostrar el formulario
    formContainer.scrollIntoView({ behavior: 'smooth' });
}

function mostrarMensajeExito() {
    var formContainer = document.getElementById("reservaForm");
    formContainer.style.display = "none"; // Ocultar el formulario
    var successMessage = document.getElementById("successMessage");
    successMessage.style.display = "block"; // Mostrar el mensaje de éxito
    successMessage.scrollIntoView({ behavior: 'smooth' });
}

function cerrarMensajeExito() {
    var successMessage = document.getElementById("successMessage");
    successMessage.style.display = "none"; // Ocultar el mensaje de éxito
    window.location.reload(); // Regresar a la página inicial (recargar la página)
}




