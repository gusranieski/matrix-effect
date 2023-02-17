const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

// Definir los caracteres que se utilizarán
const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()_+-=[]{}|;:,.<>/?`~";

// Definir el tamaño de la fuente y el tamaño del canvas
const fontSize = 14;
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

// Calcular la cantidad de columnas necesarias
const columns = canvas.width / fontSize;

// Inicializar un array para almacenar la posición vertical de cada columna
const drops = [];
for (let i = 0; i < columns; i++) {
  drops[i] = Math.floor(Math.random() * canvas.height);
}

function draw() {
  // Establecer el color de relleno del contexto en negro con una opacidad de 0.05
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Establecer el color de los caracteres en verde y la fuente en arial con el tamaño "fontSize"
  ctx.fillStyle = "#0F0";
  ctx.font = fontSize + "px arial";

  // Iterar sobre cada columna
  for (let i = 0; i < drops.length; i++) {
    // Obtener un carácter aleatorio de la variable "matrix" y dibujarlo en la posición correspondiente de la columna
    const text = matrix[Math.floor(Math.random() * matrix.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    // Si la posición vertical de la columna ha llegado al final del canvas y se cumple la condición aleatoria, reiniciar la posición vertical a 0
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    // Aumentar la posición vertical de la columna en 1
    drops[i]++;
  }
}

// Llamar a la función "draw()" cada 50 milisegundos para crear el efecto animado del efecto Matrix
setInterval(draw, 50);
