
    // ============================
    // Carrusel de imágenes
    // ============================
    let index = 0;
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    function showNextSlide() {
        slides[index].classList.remove('active'); // Quita la clase 'active' de la imagen actual
        index = (index + 1) % totalSlides; // Incrementa el índice, vuelve a 0 si llega al final
        slides[index].classList.add('active'); // Añade la clase 'active' a la nueva imagen
    }

    // Cambia la imagen automáticamente cada 5 segundos
    setInterval(showNextSlide, 5000);

    // ============================
    // Menú hamburguesa
    // ============================
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('.nav-menu');
    
    hamburgerMenu.addEventListener('click', function () {
        nav.classList.toggle('active');
        hamburgerMenu.classList.toggle('active');
    });
    
    

// Función para abrir el formulario de cita con una animación suave
function abrirFormularioCita() {
  const modal = document.getElementById('modalCita');
  modal.style.display = 'block'; // Muestra el formulario

  // Animación de deslizamiento suave
  setTimeout(() => {
      modal.classList.add('mostrar'); // Se aplica la clase para animar la aparición
  }, 10);
}

// Función para cerrar el formulario
function cerrarModalCita() {
  const modal = document.getElementById('modalCita');
  modal.classList.remove('mostrar'); // Se remueve la clase de animación

  // Oculta el formulario después de la animación
  setTimeout(() => {
      modal.style.display = 'none';
  }, 300); // Duración de la animación
}

// Función para mostrar el número de contacto
function mostrarContacto() {
  var contactoInfo = document.getElementById('contactoInfo');
  
  // Muestra el bloque de contacto
  contactoInfo.style.display = 'block';
  
  // Redirige a WhatsApp después de 5 segundos
  setTimeout(function() {
    window.location.href = 'https://wa.me/3507106842'; // URL para redirigir a WhatsApp
  }, 5000); // 5000 ms = 5 segundos
}

// Función para cerrar el bloque de contacto
function cerrarContacto() {
  var contactoInfo = document.getElementById('contactoInfo');
  contactoInfo.style.display = 'none'; // Oculta el bloque de contacto
}



    // ============================
    // funcionalidad para la casita del home
    // ============================
document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopButton = document.querySelector('.scroll-to-top');
    
    window.addEventListener('scroll', function() {
      if (window.scrollY > 200) {
        scrollToTopButton.style.display = 'block';
      } else {
        scrollToTopButton.style.display = 'none';
      }
    });
  
    scrollToTopButton.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });

  // ============================
    // funcionalidad para boton informacion medicina general y arternativa
    // ============================
    
   
    // Código JS modificado para usar `data-href`
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.btn-reducible').forEach(button => {
    button.addEventListener('click', function (event) {
      event.preventDefault();
      this.classList.add('clicked');
      this.innerHTML = '✔️';
      this.style.padding = '10px';

      setTimeout(() => {
        window.location.href = this.getAttribute('data-href');
      }, 500);
    });
  });
});

  
  
    
  // ============================
    // funcionalidad para boton informacion medicina general y arternativa
    // ============================
  function toggleInfo(event, element) {
    event.preventDefault();
    const infoText = element.previousElementSibling;
    if (infoText.classList.contains('visible')) {
        infoText.classList.remove('visible');
    } else {
        infoText.classList.add('visible');
    }
}

// ============================
    // funcionalidad para boton de historia
    // ============================ 

    // Seleccionar todos los elementos con la clase `hidden`
const hiddenElements = document.querySelectorAll('#historia-content.hidden, .timeline-item.hidden');

function revealOnScroll() {
  hiddenElements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    // Verificar si el elemento está en vista
    if (elementTop < windowHeight - 100) { // Ajusta 100 según tus preferencias
      el.classList.remove('hidden');
    }
  });
}

// Llamar a la función al cargar y hacer scroll
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);


 // Seleccionar el botón de "Historia" y la sección de contenido
 const historiaBtn = document.getElementById('historia-btn');
 const historiaContent = document.getElementById('historia-content');

 // Agregar un evento de clic para mostrar/ocultar la sección de Historia
 historiaBtn.addEventListener('click', function(event) {
   event.preventDefault(); // Evitar que el enlace haga scroll
   if (historiaContent.style.display === 'none' || historiaContent.style.display === '') {
     historiaContent.style.display = 'block'; // Mostrar la sección
   } else {
     historiaContent.style.display = 'none'; // Ocultar la sección
   }
 });

 // ============================
    // funcionalidad para animar la seccion servicios
    // ============================

 document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');  // Añade clase cuando el elemento es visible
      } else {
        entry.target.classList.remove('visible');  // Remueve clase cuando el elemento sale de la vista
      }
    });
  });

  // Observamos cada elemento de servicio
  const serviceItems = document.querySelectorAll('.service-item');
  serviceItems.forEach((item) => {
    observer.observe(item);
  });

  // Observamos el título y los párrafos de la sección de servicios
  const servicesText = document.querySelectorAll('.services-content h2, .services-content p');
  servicesText.forEach((text) => {
    observer.observe(text);
  });
});

// ============================
    // funcionalidad para  para hacer que las respuestas de las preguntas frecuentes se desplieguen al hacer clic. servicios
    // ============================


    

    
    

