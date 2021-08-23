
function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}

function areaTriangulo(base,altura){
    return base * altura;
}


function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}


function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
    alert(area);
}

function calcularAreaTriangulo(){
    const inputb = document.getElementById("baseTriangulo");
    const valueb = inputb.value;

    const inputa = document.getElementById("alturaTriangulo");
    const valuea = inputa.value;

    const area = areaTriangulo(valueb,valuea);

    alert(area/2);
}