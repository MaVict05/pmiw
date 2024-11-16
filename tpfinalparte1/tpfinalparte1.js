let imagenes = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19'];
let inicio;
let estado = 0;
let guionCSV;
let sonido;
 let colorfondo;
 let imgVolumen;
 let texto1 = "El viaje no terminó como esperabas, pero siempre hay una nueva oportunidad. ¿Te gustaría comenzar de nuevo y cambiar tu destino?";
let texto2 = "Has alcanzado el éxito en tu viaje. Sin embargo, el mundo está lleno de posibilidades. ¿Listo para una nueva aventura?";
let texto3 = "Reintentar";

function preload() {
  for (let i = 0; i < imagenes.length; i++) {
   imagenes[i] = loadImage('imagenes/' + imagenes[i] + '.jpg');
  }
  soundFormats('mp3', 'ogg');
  sonido = loadSound('sonido/sonido.mp3');
  imgVolumen = loadImage('imagenes/volumen.png');
  guionCSV = loadTable('guion.csv', 'csv', 'header', ';');
  inicio = loadImage('imagenes/inicio.png');
}

function setup() {
  createCanvas(640, 480);
   textSize(18);
 colorfondo= color(255,87,87);
}

function Boton(){
  fill(0); 
  rect(width - 50, 10, 40, 40); 
  image(imgVolumen, width - 50, 10, 40, 40);
  
}


function draw() {
  background(colorfondo);
  
  textSize(14);

  if (estado === 0) {
    PantallaInicio();
    Boton() 
    /*Pantalla(0);
  Boton();
    fill(colorfondo);
    rect(54,180,242,66);
     textos(38, 165, 'Escena1_Narracion1');
    
    fill(colorfondo);
    rect(52,411,200,50);
    textos(32, 400, 'Escena1_Narracion2');*/
    
  } else if (estado === 1) {    
    Pantalla(1);
      fill(colorfondo);
    rect(47,9,100,40);
    textos(46,0,'Escena2_Narracion1');
    
      fill(colorfondo);
    rect(325,189,200,40);
    textos(329, 184, 'Escena2_Narracion2');
         
  fill(colorfondo);
    rect(11,362,100,90);
     textos(11,364, 'Escena2_Narracion3');
     
       fill(colorfondo);
    rect(431,411,100,90);  
      textos(431, 402, 'Escena2_Dialogo1');
      
  } else if (estado === 2) {
    Pantalla(2);
    fill(colorfondo);
    rect(30,408,403,163,33);
    textos(28, 09, 'Escena3_Narracion1');
    fill(colorfondo);
    rect(30,408,403,163,33);
    textos(32, 400, 'Escena3_Narracion2');
    fill(colorfondo);
    rect(30,408,403,163,33);
     textos(32, 179, 'Escena3_Narracion3');
     fill(colorfondo);
    rect(30,408,403,163,33);
      textos(32, 179, 'Escena3_Narracion4');
  } else if (estado === 3) {
    Pantalla(3);
    fill(colorfondo);
    rect(30,408,403,163,33);
    textos(32, 179, 'Escena4_Narracion1');
    fill(colorfondo);
    rect(30,408,403,163,33);
    textos(32, 400, 'Escena4_Dialogo1');
    fill(colorfondo);
    rect(30,408,403,163,33);
    textos(32, 400, 'Escena4_Dialogo2');
  } else if (estado === 4) {
    Pantalla(4);
    fill(colorfondo);
    rect(30,408,403,163,33);
    textos(32, 179, 'Escena5_Dialogo1');
    fill(colorfondo);
    rect(30,408,403,163,33);
    textos(32, 400, 'Escena5_Dialogo2');
    fill(colorfondo);
    rect(30,408,403,163,33);    
    textos(32, 179, 'Escena5_Narracion1');
    
  } else if (estado === 5) {
    Pantalla(5);
    fill(colorfondo);
    
    textos(32, 179, 'Escena6_Narracion1') ; 
    
  } else if (estado === 6) {
    Pantalla(6);
    fill(colorfondo);
    rect(30,408,403,163,33);
    textos(32, 179, 'Escena7_Narracion1')  ;  
    
  } else if (estado === 7) {
    Pantalla(7);
    textos(32, 179, 'Escena8_Pregunta');
    textos(32, 400, 'Escena8_OpcionA');
     textos(32, 400, 'Escena8_OpcionB');
    DibujarBotones(100, 100);
  } else if (estado === 8) {
    Pantalla(8);
    textos(32, 179, 'Escena9_Narracion1');
    textos(32, 400, 'Escena9_Dialogo1');
     textos(32, 400, 'Escena9_Dialogo2');
     textos(32, 400, 'Escena9_Dialogo3');
     textos(32, 400, 'Escena9_Dialogo4');
     textos(32, 400, 'Escena9_Dialogo5');
     textos(32, 400, 'Escena9_Dialogo6');
     textos(32, 400, 'Escena9_Dialogo7');
      textos(32, 400, 'Escena9_Dialogo8');
      textos(32, 400, 'Escena9_Dialogo9');
      textos(32, 400, 'Escena9_Dialogo10');
      textos(32, 400, 'Escena9_Dialogo11');
      textos(32, 400, 'Escena9_Dialogo12');
      textos(32, 400, 'Escena9_Dialogo13');
      textos(32, 400, 'Escena9_Dialogo14');
      textos(32, 400, 'Escena9_Dialogo15');
  } else if (estado === 9) {
    Pantalla(9);
    textos(32, 179, 'Final1_Escena1_Dialogo1');
     textos(32, 179, 'Final1_Escena1_Dialogo2');
     textos(32, 179, 'Final1_Escena1_Narracion1');
     textos(32, 179, 'Final1_Escena1_Dialogo3');
     textos(32, 179, 'Final1_Escena1_Dialogo4');  
     textos(32, 179, 'Final1_Escena1_Dialogo5');
      textos(32, 179, 'Final1_Escena1_Dialogo6');
      
  } else if (estado === 10) {
    Pantalla(10);
    textos(32, 179, 'Final1_Escena2_Narracion1');
    textos(32, 179, 'Final1_Escena2_Narracion2');
    textos(32, 179, 'Final1_Escena2_Narracion3');
   textos(32, 179, 'Final1_Escena2_Narracion4');
   
  } else if (estado === 11) {
    Pantalla(11);
    textos(32, 179, 'Escena10_Dialogo1');
   textos(32, 179, 'Escena10_Dialogo2');
   textos(32, 179, 'Escena10_Dialogo3');
   textos(32, 179, 'Escena10_Dialogo4');
    textos(32, 179, 'Escena10_Dialogo5');
    BotonReiniciar();
      
  } else if (estado === 12) { 
    Pantalla(12);
    textos(32, 179, 'Escena11_Dialogo1');
    textos(32, 400, 'Escena11_Dialogo2');
     textos(32, 400, 'Escena11_Pregunta2');
     textos(32, 400, 'Escena11_OpcionA');
     textos(32, 400, 'Escena11_OpcionB');
  } else if (estado === 13) {
    Pantalla(13);
    textos(32, 179, 'Escena12_Dialogo1');
     textos(32, 179, 'Escena12_Dialogo2');
     textos(32, 179, 'Escena12_Dialogo3');
     textos(32, 179, 'Escena12_Dialogo4');
     textos(32, 179, 'Escena12_Dialogo5');
     textos(32, 179, 'Escena12_Dialogo6');
     textos(32, 179, 'Escena12_Dialogo7');
     textos(32, 179, 'Escena12_Dialogo8');
    
    DibujarBotones(100, 100);
  } else if (estado === 14) {
    Pantalla(14);
    textos(32, 179, 'Final2_Escena13_Dialogo1');
    textos(32, 179, 'Final2_Escena13_Dialogo2');
    textos(32, 179, 'Final2_Escena13_Dialogo3');
    textos(32, 179, 'Final2_Escena13_Dialogo4');
    textos(32, 179, 'Final2_Escena13_Dialogo5');
   textos(32, 179, 'Final2_Escena13_Dialogo6');
    textos(32, 179, 'Final2_Escena13_Dialogo7');
  } else if (estado === 15) {
    Pantalla(15);
    textos(32, 179, 'Final2_Escena14_Dialogo1');
  } else if (estado === 16) {
    Pantalla(16);    
         textos(32, 179, 'Final3_Escena15_Dialogo9')
         BotonReiniciar();
  } else if (estado === 17) {  
    Pantalla(17);
    textos(32, 179, 'Final3_Escena15_Dialogo1');
     textos(32, 179, 'Final3_Escena15_Dialogo2');
      textos(32, 179, 'Final3_Escena15_Dialogo3');
       textos(32, 179, 'Final3_Escena15_Dialogo4');
        textos(32, 179, 'Final3_Escena15_Dialogo5');
     textos(32, 179, 'Final3_Escena15_Dialogo6');
      textos(32, 179, 'Final3_Escena15_Dialogo7');
       textos(32, 179, 'Final3_Escena15_Dialogo8');
        textos(32, 179, 'Final3_Escena15_Dialogo9');
  } else if (estado === 18) {
    Pantalla(18);
    textos(32, 179, 'Final3_Escena16_Dialogo1');
    BotonReiniciar();
    
  }    
  else if (estado === 19) {
     PantallaCreditos(255);
    
   


  if (estado == 7 && mouseX > 73 && mouseX < 73+212 && mouseY > 385 && mouseY < 385 + 31) {
    DibujarBotones(255, 100);
  }
  
  if (estado == 13 && mouseX > 73 && mouseX < 73+212 && mouseY > 385 && mouseY < 385 + 31) {
    DibujarBotones(255, 100);
  }
  if (estado == 7 && mouseX > 362 && mouseX < 362+212 && mouseY > 385 && mouseY < 385 + 31) {
    DibujarBotones(100, 255);
  }
  
  if (estado == 13 && mouseX > 362 && mouseX < 362+212 && mouseY > 385 && mouseY < 385 + 31) {
    DibujarBotones(100, 255);
  }
   
}
   
}

function keyPressed() {

  if (estado == 0 && key === 'ArrowRight') {
    estado = 1;
  } else if (estado == 1 && key === 'ArrowRight') {
    estado = 2;
  } else if (estado == 2 && key === 'ArrowRight') {
    estado = 3;
  } else if (estado == 3 && key === 'ArrowRight') {
    estado = 4;
  } else if (estado == 4 && key === 'ArrowRight') {
    estado = 5;
  } else if (estado == 5 && key === 'ArrowRight') {
    estado = 6;
  } else if (estado == 6 && key === 'ArrowRight') {
    estado = 7;
  } else if (estado == 7 && key === 'ArrowRight') {
    estado = 8;
  } else if (estado == 8 && key === 'ArrowRight') {
    estado = 9;
  } else if (estado == 9 && key === 'ArrowRight') {
    estado = 10;
  } else if (estado == 10 && key === 'ArrowRight') {
    estado = 11;
  } else if (estado == 11 && key === 'ArrowRight') {
    estado = 12;
  } else if (estado == 12 && key === 'ArrowRight') {
    estado = 13;
  } else if (estado == 13 && key === 'ArrowRight') {
    estado = 14;
  } else if (estado == 14 && key === 'ArrowRight') {
    estado = 15;
  } else if (estado == 15 && key === 'ArrowRight') {
    estado = 16;
  } else if (estado == 16 && key === 'ArrowRight') {
    estado = 17;
  } else if (estado == 17 && key === 'ArrowRight') {
    estado = 18;
  }
}

function mousePressed() {
  if (estado == 0 && mouseX > 207 && mouseX < 207+222 && mouseY > 349 && mouseY < 349 + 45) {
    estado = 1;
  }
  if (estado == 0 && mouseX > 207 && mouseX < 207+222 && mouseY > 409 && mouseY < 409 + 45) {
    estado = 19;
  }
  if (estado == 7 && mouseX > 73 && mouseX < 73+212 && mouseY > 385 && mouseY < 385 + 31) {
    estado = 8;
  }
  if (estado == 7 && mouseX > 362 && mouseX < 362+212 && mouseY > 385 && mouseY < 385 + 31) {
    estado = 12;
  }
  if (estado == 13 && mouseX > 73 && mouseX < 73+212 && mouseY > 385 && mouseY < 385 + 31) {
    estado = 14;
  }
  if (estado == 13 && mouseX > 362 && mouseX < 362+212 && mouseY > 385 && mouseY < 385 + 31) {
    estado = 17;
  }
  if (mouseX > width - 50 && mouseX < width - 10 && mouseY > 10 && mouseY < 50) {
    sonido.play();
    sonido.setVolume(0.1);
  }
   if (estado == 19 && mouseX > 207 && mouseX < 207+222 && mouseY > 349 && mouseY < 349 + 45) {    
    estado = 1;
  }
  if (estado == 18 && mouseX > 207 && mouseX < 207+222 && mouseY > 409 && mouseY < 409 + 45) {
    estado = 0;
    ReiniciarSonido() ;
  }
  if (estado == 11 && mouseX > 207 && mouseX < 207+222 && mouseY > 409 && mouseY < 409 + 45) {
    estado = 0;
    ReiniciarSonido() ;
  }
}
