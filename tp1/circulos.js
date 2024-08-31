function circulos(espacio, tamañoCirculo, centroX, centroY) {
  for (let i = 0; i < 60; i++) {
    for (let j = 0; j < 60; j++) {
      
      let circuloVioletaX = i * espacio + espacio / 2;
      let circuloVioletaY = j * espacio + espacio / 2;   //posición de los circulos violetas

                                                     //forma el espiral
      let distancia = dist(centroX, centroY, circuloVioletaX, circuloVioletaY);
      let angulo = atan2(circuloVioletaY - centroY, circuloVioletaX - centroX) + distancia * 0.05;   // forma el espiral

                                               //posicion de los circulos blancos 
      let circuloBlancoX = circuloVioletaX + cos(angulo) * tamañoCirculo * 0.3;
      let circuloBlancoY = circuloVioletaY + sin(angulo) * tamañoCirculo * 0.3;

                                               //posicion de los circulos negros
      let circuloNegroX = circuloVioletaX + cos(angulo + radians(180)) * tamañoCirculo * 0.3;
      let circuloNegroY = circuloVioletaY + sin(angulo + radians(180)) * tamañoCirculo * 0.3;

      fill(colorCirculoNegro);
      ellipse(circuloNegroX, circuloNegroY, espacio * 0.5, espacio * 0.5);

      fill(colorCirculoBlanco);
      ellipse(circuloBlancoX, circuloBlancoY, espacio * 0.5, espacio * 0.5);

      fill(colorCirculoVioleta);
      noStroke();
      ellipse(circuloVioletaX, circuloVioletaY, tamañoCirculo + 1, tamañoCirculo + 1);
    }
  }
}



function calcularTamañoCirculos(mouseX, mouseY, width, height) {
  let tamañoNormal = 900 / 50 * 0.6;
  let cambioDeTamaño = 900 / 50 * 0.9;               // tamaño cuando el mouse está cerca
  let distancia = dist(mouseX, mouseY, width, 195);// calcula la distancia del mouse en la pantalla

  if (distancia < 200) {
    return map(distancia, 0, 200, tamañoNormal, cambioDeTamaño);
  } else {
    return tamañoNormal;
  }
}
