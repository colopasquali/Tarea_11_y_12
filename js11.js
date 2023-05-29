
//tarea 11
var helado = 2100;
var topping = "kit kat";
var precio;
var preciofinal;

if(topping =="oreo"){
    precio = 10;
}
else if(topping =="kit kat"){
    precio = 15;
}
else if(topping =="kinder"){
    precio = 25;
}
else {
    console.log("no tenemos este toppin");}

preciofinal= helado + precio;
 console.log("El helado cuasta $" + preciofinal);    



 var menu = "pollo";

 switch (menu) {
    case "carne":
        console.log("le puedo ofrecer vino tinto para acompañar");
        break;
    case "pesacado":
        console.log("le puedo ofrecer vino blanco para acompañar");
        break;
    case "verdura":
        console.log("le puedo ofrecer agua para acompañar");        
    default:
        break;
 }
 console.log("elija carne, pescado o verdura");


 const peliculas = ["Rapido y furioso","Piratas del caribe","jhon wick" ]
 var peli;
 for (let peli = 0; peli < peliculas.length; peli++) {
    console.log(peliculas[peli]);
}
 peliculas.push("Rapidos y furiosos 2");

 for (let peli = 0; peli < peliculas.length; peli++) {
    console.log(peliculas[peli]);
}

let numero = 1;

while (numero < 11) {
    console.log(" El numero " + numero + " es mas pequeño que 11");
    numero++;
}


//Tarea 12
function saludo() {
  var nombre = prompt("Por favor, ingresa tu nombre:");

  if (nombre) {
    alert("¡Bienvenido, " + nombre + "!");
  } else {
    alert("Por favor, ingresa tu nombre.");
  }
}

// Llamada a la función
saludo();

