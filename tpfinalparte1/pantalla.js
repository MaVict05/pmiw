function Pantalla(numImagen) {

  image(imagenes[numImagen], 0, 0, width, height);
}


function DibujarBotones(alpha1, alpha2) {
  fill(255, 114, 117, alpha1);
  stroke(255, 49, 49)
  rect(73, 385, 212, 31, 10);
  fill(255, 114, 117, alpha2);
  rect(362, 385, 212, 31, 10);
}

function textos(x, y, id){
 DialogosCSV(x , y, id);

}
function volverAlInicio(alpha) {
  fill(216, 44, 91, alpha);
  rect(191, 353, 257, 49, 30);
}
function mensajefinal(texto1, texto2) {
  fill(219, 219, 219, 150);
  noStroke();
  rect(151, 150, 336, 172, 20);
  textSize(20);
  fill(94, 23, 235);
  textAlign( CENTER, CENTER);
  text(texto1, 166, 162, 306, 145);
  text(texto2, 144, 367, 380, 32);
}


function DialogosCSV(posX, posY, _id) {
  push();
  translate(posX, posY);
 // fill(255);
 // rect(0, 0, 235, 95, 10);
  fill(0);
  text(GetTextCSV(_id, 'Nombres'), 20, 30);
  text(GetTextCSV(_id, 'Es'), 20, 40, 220, 70);
  pop();
}

function GetTextCSV(_id, _columna) {
  let IDColumna = guionCSV.getColumn('ID');

  for (let fila = 0; fila < IDColumna.length; fila++) {
    if (IDColumna[fila] === _id) {
      return guionCSV.getColumn(_columna)[fila];
    }
  }
  return "NO SE ENCONTRO EL ID: " + _id;
}
