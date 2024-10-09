let valor;
do {
    valor = parseInt(promt("Ingrese valor 1 para salir"));
    document.write("Ingresó valor: ", valor, "<br>" + "<br>");
} while (valor !=1);
document.write("Fin del bucle");

let usuario, clave, control;

control = 0;
usuario = prompt("Ingrese el usuario: ");
clave = prompt("Ingrese su contraseña: ");
do {
    if (clave != "Miaccess33&") {
        clave = prompt("Contraseña incorrecta\n" + "Intente de nuevo");
        control = 1;
} else {
    control = 1;
}

} while (control != 1);
document.write("Acceso correcto!");