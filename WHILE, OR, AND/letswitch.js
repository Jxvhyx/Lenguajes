let valor ;
valor = parseInt(prompt("Ingrese un valor entre 1 y 3"));
switch (valor){
    case 1 :
        document.write("Ingrese uno");
        break;
    case 2:
        document.write("Ingrese dos");
        break;
    case 3 :
        document.write("Ingrese tres");
        break;
default:
    document.write("No es un número válido");
}