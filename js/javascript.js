let maxCogollos = 50;

  function createCogollo() {
    const background = document.getElementById('background');
    if (background.querySelectorAll('.cogollo').length >= maxCogollos) return;

    const cogollo = document.createElement('img');
    cogollo.src = "../imagenes/cogollo.png";
    cogollo.classList.add('cogollo');

    // Posiciones y tamaño aleatorio
    cogollo.style.left = `${Math.random() * window.innerWidth}px`;
    cogollo.style.top = `${Math.random() * window.innerHeight}px`;
    const size = Math.random() * 40 + 30;
    cogollo.style.width = `${size}px`;
    cogollo.style.height = `${size}px`;

    background.appendChild(cogollo);
    animateCogollo(cogollo);
  }

  function animateCogollo(cogollo) {
    // Animación para que se mueva y desaparezca
    const animationDuration = Math.random() * 10 + 10; // Aleatorio entre 10 y 20 segundos
    const rotation = Math.random() * 360; // Ángulo aleatorio
    const translateX = Math.random() * 500 - 250; // Desplazamiento aleatorio en X
    const translateY = Math.random() * 500 - 250; // Desplazamiento aleatorio en Y

    cogollo.style.transition = `transform ${animationDuration}s linear`;

    setTimeout(() => {
      cogollo.style.transform = `rotate(${rotation}deg) translate(${translateX}px, ${translateY}px)`;
      cogollo.style.opacity = 0;
    }, 100);

    // Eliminar el cogollo después de la animación
    setTimeout(() => {
      cogollo.remove();
    }, animationDuration * 1000);
  }

  // Crear un cogollo cada 1 segundo
  setInterval(createCogollo, 1000);