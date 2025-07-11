window.onload=comenzar;
function comenzar (){
    const header = document.getElementById('hero');

// Lista de URLs de imágenes
const imagenes = [
  'imagenes/m1.jpeg',
  'imagenes/m2.jpeg',
  'imagenes/m3.jpeg',
  'imagenes/m4.jpeg',
  'imagenes/m5.jpeg'
];

let indice = 0;

function cambiarFondo() {
  header.style.backgroundImage = `url(${imagenes[indice]})`;
  indice = (indice + 1) % imagenes.length;
}

// Cambia cada 3 segundos
cambiarFondo(); // Mostrar la primera al cargar
setInterval(cambiarFondo, 3000);
}