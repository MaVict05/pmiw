//https://youtu.be/ZBpJTWzCQFs


let img;
let img2;
let fondoColor;
let tamañoCirculo;
let colorCirculoNegro;
let colorCirculoVioleta;
let colorCirculoBlanco;

function preload() {            //carga las imagenes
  img= loadImage('opArt.jpg');
  img2 = loadImage('op3.png');
}

function setup() {
  createCanvas(800, 400);
  fondoColor = color(154, 205, 50);
  colorCirculoNegro = color(0);
  colorCirculoVioleta = color(161, 3, 161);
  colorCirculoBlanco = color(255);
  tamañoCirculo = calcularTamañoCirculos(mouseX, mouseY, width, height);
}

function draw() {
  background(fondoColor);
  
  
  tamañoCirculo = calcularTamañoCirculos(mouseX, mouseY, width, height); // Cambia el tamaño de los círculos con el mouse
  circulos(900 / 50, tamañoCirculo, 600, height / 2);

                                     
  noStroke();
  fill(154, 205, 50);
  rect(559, 147, 88, 119);
   image(img, 0, 0);
  image(img2, 560, 150);
  
}

function cambiarFondo(nuevoFondo, nuevoCirculoVioleta, nuevoCirculoNegro, nuevoCirculoBlanco) {
  fondoColor = nuevoFondo;
  colorCirculoVioleta = nuevoCirculoVioleta;
  colorCirculoNegro = nuevoCirculoNegro;
  colorCirculoBlanco = nuevoCirculoBlanco;
}

function mousePressed() {        // cambio del color del fondo, cambio color circulos y tamaño 
  if (dist(mouseX, mouseY, 597, 208) < 75) {
    cambiarFondo(color(0), color(0), color(random(255), random(255), random(255)), color(random(255), random(255), random(255)));
    tamañoCirculo = calcularTamañoCirculos(mouseX, mouseY, width, height);
    circulos(900 / 50, tamañoCirculo, 600, height / 2);
  }
}

function keyPressed() {
  if (key === 'r') {               //reinicio
    cambiarFondo(color(154, 205, 50), color(161, 3, 161), color(0), color(255));
    tamañoCirculo = calcularTamañoCirculos(mouseX, mouseY, width, height);
    circulos(900 / 50, tamañoCirculo, 600, height / 2);
  }
}
