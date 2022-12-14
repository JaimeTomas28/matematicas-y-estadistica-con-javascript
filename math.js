console.group('Cuadrado') 

const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log({
  ladoCuadrado,
  perimetroCuadrado,
  areaCuadrado,
});

function calcularCuadrado(lado) {
  return {
    perimetro: lado * 4,
    area: lado * lado,
  };
}

console.groupEnd('Cuadrado') 

console.group('Triangulo')

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;

function calcularTriangulo(lado1, lado2, base, altura) {
  return {
    perimetro: lado1 + lado2 + base,
    area: (base * altura) / 2,
  };
}

console.log({
  ladoTriangulo1,
  ladoTriangulo2,
  ladoTrianguloBase,
  alturaTriangulo,
  perimetroTriangulo,
  areaTriangulo,
});

console.groupEnd('Triangulo') 

//Círculo//
//Math.pow sirve para (numero al que queremos hacerle alguna potencia y número al que tenemos que hacerle la potencia)
//Math.PI.toFixed() sirve para indicar dentro del paréntesis el número de decimales.//

console.group("Circle")

const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;
const PI = 3.1415;

const circunferencia = diametroCirculo *PI;
const areaCriculo = (radioCirculo ** 2) * PI; 

console.log ({
  radioCirculo,
  diametroCirculo,
  PI,
  circunferencia,
  areaCriculo,
});

function calcularCirculo (radio) {
  const diamtero = radio * 2;
  const radioAlCuadrado = Math.pow(radio, 2);

  return {
    circunferencia: (radio * 2) * Math.PI,
    area: radioAlCuadrado * Math.PI.toFixed(3),
  };
}

console.groupEnd("Circle")