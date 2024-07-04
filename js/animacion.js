function cambiarTextoDinamico() {
    const textos = [
        " responsable",
        " comprometido",
        " creativo",
        " dedicado"
        // Puedes agregar más textos aquí según tus preferencias
    ];

    const index = Math.floor(Math.random() * textos.length); // Elige un texto aleatorio
    document.getElementById('intro-text').textContent = textos[index];
}

setInterval(cambiarTextoDinamico, 2000);

document.addEventListener("DOMContentLoaded", () => {
    const carouselSlide = document.querySelector(".carousel-slide");
    const carouselImages = document.querySelectorAll(".carousel-slide img");
    const prevButton = document.querySelector(".carousel-button.prev");
    const nextButton = document.querySelector(".carousel-button.next");

    let counter = 0;
    const size = carouselImages[0].clientWidth;

    // Intervalo de tiempo en milisegundos
    const intervalTime = 5000;
    let carouselInterval;

    const updateCarousel = () => {
        carouselSlide.style.transition = "transform 0.5s ease-in-out";
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    };

    const startProgressBar = () => {
        const progressBarFill = document.querySelector(".progress-bar-fill");
        progressBarFill.style.transition = "none"; // Desactivar transición para reiniciar la barra instantáneamente
        progressBarFill.style.width = "100%"; // Empezar la barra llena

        // Usar setTimeout para asegurar que la siguiente transición se vea
        setTimeout(() => {
            progressBarFill.style.transition = "width 5s linear"; // Establecer la duración de la transición
            progressBarFill.style.width = "0%"; // Comenzar a descargar la barra
        }, 100);
    };

    const moveToNextImage = () => {
        if (counter >= carouselImages.length - 1) {
            counter = 0;
        } else {
            counter++;
        }
        updateCarousel();
        startProgressBar(); // Reiniciar la barra de progreso al cambiar la imagen
    };

    const moveToPrevImage = () => {
        if (counter <= 0) {
            counter = carouselImages.length - 1;
        } else {
            counter--;
        }
        updateCarousel();
        startProgressBar(); // Reiniciar la barra de progreso al cambiar la imagen
    };

    const resetCarouselInterval = () => {
        clearInterval(carouselInterval); // Detener el intervalo actual
        carouselInterval = setInterval(moveToNextImage, intervalTime); // Reiniciar el intervalo
    };

    // Event listeners para los botones de navegación
    nextButton.addEventListener("click", () => {
        moveToNextImage();
        resetCarouselInterval(); // Reiniciar el intervalo al cambiar la imagen manualmente
    });

    prevButton.addEventListener("click", () => {
        moveToPrevImage();
        resetCarouselInterval(); // Reiniciar el intervalo al cambiar la imagen manualmente
    });

    // Cambiar automáticamente la imagen cada 'intervalTime' milisegundos
    carouselInterval = setInterval(moveToNextImage, intervalTime);

    // Llamar a startProgressBar al cargar la página y cada 'intervalTime' después
    startProgressBar();
});


const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.enlaces-menu');
const barras = document.querySelectorAll('.ham span');

ham.addEventListener('click', () => {
    enlaces.classList.toggle('activado');
    barras.forEach(child => { child.classList.toggle('animado') });
    ham.classList.toggle('girar');
    
    // Toggle overflow on body
    if (enlaces.classList.contains('activado')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
});

// Cerrar menú al hacer clic en un enlace
const menuItems = document.querySelectorAll('.enlaces-menu li a');

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        enlaces.classList.remove('activado');
        barras.forEach(child => { child.classList.remove('animado') });
        ham.classList.remove('girar');
        document.body.style.overflow = 'auto'; // Asegúrate de que el desbordamiento se restablezca al cerrar el menú
    });
});

function openModal(imgElement) {
    var modal = document.getElementById('modal');
    var modalImage = document.getElementById('modalImage');
    modal.style.display = 'flex';
    modalImage.src = imgElement.src;
}

function closeModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Asegúrate de que el modal esté oculto al cargar la página
document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
});