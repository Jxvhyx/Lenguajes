let f = 1;
let suma = 0;
let valor;

while (f <= 5) {
    valor = parseInt(prompt("Ingrese un valor"));
    suma = suma + valor;
    f++;
}

document.write("La suma es: ", suma, "<br>");