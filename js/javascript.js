// Crear cogollos flotando por la pantalla
function createCogollo() {
    const cogollo = document.createElement('img');
    cogollo.src = "imagenes/cogollo.png";  // Ruta a tu imagen del cogollo
    cogollo.classList.add('cogollo');
  
    // Posicionar el cogollo aleatoriamente en la pantalla
    const xPos = Math.random() * window.innerWidth;
    const yPos = Math.random() * window.innerHeight;
    cogollo.style.left = `${xPos}px`;
    cogollo.style.top = `${yPos}px`;
  
    // Establecer un tamaño aleatorio para el cogollo
    const size = Math.random() * 40 + 30; // Tamaño entre 20px y 50px
    cogollo.style.width = `${size}px`;
    cogollo.style.height = `${size}px`;
  
    // Añadir el cogollo al fondo
    document.getElementById('background').appendChild(cogollo);
  
    // Animación para mover el cogollo
    animateCogollo(cogollo);
  }
  
  // Animar los cogollos
  function animateCogollo(cogollo) {
    // Definir la animación de los cogollos
    const duration = Math.random() * 5 + 5; // Duración aleatoria entre 5 y 10 segundos
    const xMove = Math.random() * 5000 - 2000; // Movimiento aleatorio en el eje X
    const yMove = Math.random() * 5000 - 2000; // Movimiento aleatorio en el eje Y
  
    cogollo.style.transition = `transform ${duration}s linear`;
  
    setTimeout(() => {
      cogollo.style.transform = `translate(${xMove}px, ${yMove}px)`;
  
      // Eliminar el cogollo después de la animación
      setTimeout(() => {
        cogollo.remove();
      }, duration * 2000); // Eliminar el cogollo después de que termine la animación
    }, 100);
  }
  
  // Generar cogollos constantemente
  setInterval(createCogollo, 300);  // Cada 500ms se genera un nuevo cogollo
  