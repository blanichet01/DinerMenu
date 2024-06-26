import moment from "moment";
const almuerzo = [
  {
  entrante: "Patatas Fritas",
  precio: 2.90
  },
 {
  entrante: "Aros Cebolla",
  precio: 3.00
 },
 {
  entrante: "Jamon Serrano",
  precio: 6.30
 },
 {
   principal: "Alubias",
   precio: 5.40
 },
 {
   principal: "Sopa Fideos",
   precio: 6.40
   },
 {
   principal: "Pasta",
   precio: 7.40
   },
 {
  segundo: "Filete Merluza",
  precio: 7.40
  },
 {
  segundo: "Filete Cerdo",
  precio: 9.40
 },
 {
  segundo: "Pollo Frito",
  precio: 8.30
 }  
];
const cena = [
  {
  entrante: "Nachos",
  precio: 4.60
  },
 {
  entrante: "Pan De Ajo",
  precio: 1.50
 },
 {
  entrante: "Tabla Quesos",
  precio: 14.30
 },
  {
   principal: "Ensalada",
   precio: 7.50
 },
 {
   principal: "Guisantes",
   precio: 8.10
   },
 {
   principal: "Verduras Salteadas",
   precio: 6.40
   },
 {
  segundo: "Hamburguesa",
  precio: 12.60
  },
 {
  segundo: "Solomillo",
  precio: 17.80
 },
 {
  segundo: "Lomo Cerdo",
  precio: 13.30
 }
];

const desayuno = [
  {
     comida: "Pintxo Pollo",
     precio: 4.20
   },
    {
     comida: "Tortilla Patata",
     precio: 3.40
     },
   {
    comida: "Rollo Atun",
    precio: 4.30
     },
 {
     bebida: "Colacao",
     precio: 2.20
   },
    {
     bebida: "Cafe Cortado",
     precio: 1.40
     },
   {
     bebida: "Zumo Naranja",
     precio: 1.80
     },
];
const adicionales = [
  {
     comida:"Tarta Queso",
     precio: 2.10
 },
  {
     comida:"Flan",
     precio: 3.30
 },
 {
     comida:"Helado",
     precio: 3.10
 }  
];

var comentarios = ["Que buena eleccion!!", "Buen provecho!!", "es un plato exquisito!!","Es plato favorito de muchos clientes!!","Buen apetito!!"];
//Elemento aleatorio del array de comentarios
var comentarioAleatorio = comentarios[Math.floor(Math.random()*comentarios.length)].toUpperCase();

const hora = moment();
var elegirHora = prompt('Bienvenido a nuestro restaurante\n\n Elige una Hora por favor: formato 24h HH:mm ', hora.format("HH:mm"));

//Carta Adicionales
var listaAdicionales = '';
var adicionar = null;

for (var i = 0; i < adicionales.length; i++){
 listaAdicionales += `Plato:  ${adicionales[i].comida}\nPrecio: ${adicionales[i].precio} euros\n\n`; 
}
//Carta Desayuno
var listaDesayuno = '';
var listaBebidas = '';

for (var i = 0; i < desayuno.length -3; i++){
listaDesayuno += `Plato:  ${desayuno[i].comida}\n Precio: ${desayuno[i].precio} euros\n\n`; 
}
for (var i = 3; i < desayuno.length; i++){
listaBebidas += `Bebida:  ${desayuno[i].bebida}\nPrecio: ${desayuno[i].precio} euros\n\n`; 
}
//Condicionales hora Desayuno
try{
if((elegirHora >= "08:00") && (elegirHora < "13:00")){
alert("Es hora de desayunar, tenemos deliciosas opciones");
 var escogerDesayuno = prompt("Escoge tu pintxo, puede ser: Pintxo Pollo, Tortilla Patata o Rollo Atun \n\n"+"Menu\n "+listaDesayuno).toLowerCase().replace(/\b[a-z]/g,c=>c.toUpperCase());   
while ((escogerDesayuno != 'Pintxo Pollo') && (escogerDesayuno != 'Tortilla Patata') && (escogerDesayuno != 'Rollo Atun')){
  alert(escogerDesayuno+ "  No es una opcion valida");
  escogerDesayuno = prompt("Escoge tu pintxo, puede ser: Pintxo Pollo, Tortilla Patata o Rollo Atun \n\n"+"Menu\n "+listaDesayuno).toLowerCase().replace(/\b[a-z]/g,c=>c.toUpperCase());   
}
    alert(comentarioAleatorio);
    var platoDesayuno = desayuno.find(desayuno => desayuno.comida === escogerDesayuno);
    var precioDesayuno = platoDesayuno.precio;

 var escogerBebida = prompt("Escoge tu bebida, puede ser: Colacao, Cafe Cortado o Zumo Naranja \n\n"+"Menu\n "+listaBebidas).toLowerCase().replace(/\b[a-z]/g,c=>c.toUpperCase());
while ((escogerBebida != 'Colacao') && (escogerBebida != 'Cafe Cortado') && (escogerBebida != 'Zumo Naranja')){
  alert(escogerBebida+ "  No es una opcion valida");
  escogerBebida = prompt("Escoge tu bebida, puede ser: Colacao, Cafe Cortado o Zumo Naranja \n\n"+"Menu\n "+listaBebidas).toLowerCase().replace(/\b[a-z]/g,c=>c.toUpperCase());   
}
    var bebidaDesayuno = desayuno.find(desayuno => desayuno.bebida === escogerBebida);
    var precioBebida = bebidaDesayuno.precio;
    precioTotal = precioDesayuno + precioBebida;
     comentarioAleatorio = comentarios[Math.floor(Math.random()*comentarios.length)].toUpperCase();
     alert(comentarioAleatorio);
     alert("El precio total de tu pedido es:\n\n"+escogerDesayuno+" = "+precioDesayuno+ " Euros\n"+escogerBebida+" = "+ precioBebida+" Euros\n"+" Total A Pagar:  "+precioTotal.toFixed(2)+" Euros\n");       
} 
}catch (err) {
alert(err.message);
}
//Cerrado
if((elegirHora >= "00:00") && (elegirHora < "08:00")){
alert("No tenemos servicio en este horario, Gracias por elegirnos!!");
}
//Carta Almuerzo
var listaAlmuerzoPrincipal = '';
var listaAlmuerzoSegundo = '';
var listaAlmuerzoEntrante = '';

for (var i = 0; i < almuerzo.length -6; i++){
 listaAlmuerzoEntrante += `Entrante:  ${almuerzo[i].entrante}\nPrecio: ${almuerzo[i].precio} euros\n\n`;
}
for (var i = 3; i < almuerzo.length - 3; i++){  
 listaAlmuerzoPrincipal += `Primer plato:  ${almuerzo[i].principal}\nPrecio: ${almuerzo[i].precio} euros\n\n`; 
 
}
for (var i = 6; i < almuerzo.length; i++){
 listaAlmuerzoSegundo += `Segundo plato:  ${almuerzo[i].segundo}\nPrecio: ${almuerzo[i].precio} euros\n\n`;
}

//Condicionales hora Almuerzo
try{

if((elegirHora >= "13:00") && (elegirHora < "19:00")){
alert("Es hora de almorzar, tenemos deliciosas opciones");
var escogerEntrante = prompt("Escoge tu entrante, puede ser: Patatas Fritas, Aros Cebolla o Jamon Serrano \n\n "+" Menu Entrantes\n\n  "+listaAlmuerzoEntrante).toLowerCase().replace(/\b[a-z]/g,c=>c.toUpperCase());

while((escogerEntrante != 'Patatas Fritas') && (escogerEntrante != 'Aros Cebolla') && (escogerEntrante != 'Jamon Serrano')){
 alert(escogerEntrante+ "  No es una opcion valida");
 escogerEntrante = prompt("Escoge tu entrante, puede ser: Patatas Fritas, Aros Cebolla o Jamon Serrano \n\n "+" Menu Entrantes\n\n  "+listaAlmuerzoEntrante).toLowerCase().replace(/\b[a-z]/g,c=>c.toUpperCase());    
}
var entrante = almuerzo.find(almuerzo => almuerzo.entrante === escogerEntrante);
var precioEntrante = entrante.precio;  
alert(comentarioAleatorio);

var escogerPrimero = prompt("Escoge tu plato principal, puede ser: Alubias, Sopa Fideos o Pasta \n\n "+" Menu Primer Plato\n\n  "+listaAlmuerzoPrincipal).toLowerCase().replace(/\b[a-z]/g,c=>c.toUpperCase());

while((escogerPrimero != 'Alubias') && (escogerPrimero != 'Sopa Fideos') && (escogerPrimero != 'Pasta')){
 alert(escogerPrimero+ "  No es una opcion valida");
 escogerPrimero = prompt("Escoge tu plato principal, puede ser: Alubias, Sopa Fideos o Pasta \n\n "+" Menu\n\n  "+listaAlmuerzoPrincipal).toLowerCase().replace(/\b[a-z]/g,c=>c.toUpperCase());    
}
var primerPlato = almuerzo.find(almuerzo => almuerzo.principal === escogerPrimero);
var precioPrimero = primerPlato.precio;
comentarioAleatorio = comentarios[Math.floor(Math.random()*comentarios.length)].toUpperCase();
alert(comentarioAleatorio);

var escogerSegundo = prompt("Escoge tu segundo plato, puede ser: Filete Merluza, Filete Cerdo o Pollo Frito \n\n "+" Menu Segundo Plato\n\n  "+listaAlmuerzoSegundo).toLowerCase().replace(/\b[a-z]/g,c=>c.toUpperCase());

while((escogerSegundo != 'Filete Merluza') && (escogerSegundo != 'Filete Cerdo') && (escogerSegundo != 'Pollo Frito')){
 alert(escogerSegundo+ "  No es una opcion valida");
 escogerSegundo = prompt("Escoge tu segundo plato, puede ser: Filete Merluza, Filete Cerdo o Pollo Frito \n\n "+" Menu\n\n  "+listaAlmuerzoSegundo).toLowerCase().replace(/\b[a-z]/g,c=>c.toUpperCase());    
}
var segundoPlato = almuerzo.find(almuerzo => almuerzo.segundo === escogerSegundo);
var precioSegundo = segundoPlato.precio;  
comentarioAleatorio = comentarios[Math.floor(Math.random()*comentarios.length)].toUpperCase();
alert(comentarioAleatorio);
adicionar = prompt("Desea adicionar postre a su plato: Si o No").toLowerCase().replace(/\b[a-z]/g,c=>c.toUpperCase());

while((adicionar != 'Si') && (adicionar != 'No')){
   alert(adicionar+ '  No es una opcion valida');
   adicionar = prompt(comentarioAleatorio+"\n\nDesea adicionar postre a su plato: Si o No").toLowerCase().replace(/\b[a-z]/g,c=>c.toUpperCase());
}
 if(adicionar == 'Si'){
     var escogerAdicional = prompt("Escoge tu postre, puede ser: Tarta Queso, Flan o Helado \n\n "+" Menu\n\n  "+listaAdicionales).toLowerCase().replace(/\b[a-z]/g,c=>c.toUpperCase());
   
     while((escogerAdicional != 'Tarta Queso') && (escogerAdicional != 'Flan') && (escogerAdicional != 'Helado')){
       alert(escogerAdicional+ '  No es una opcion valida');
       escogerAdicional = prompt("Escoge tu postre, puede ser: Tarta Queso, Flan o Helado \n\n "+" Menu\n\n  "+listaAdicionales).toLowerCase().replace(/\b[a-z]/g,c=>c.toUpperCase());
     } 
     adicion = adicionales.find(adicionales => adicionales.comida === escogerAdicional);
     precioAdicional = adicion.precio;
     precioTotal = precioEntrante + precioPrimero + precioSegundo + precioAdicional;
     comentarioAleatorio = comentarios[Math.floor(Math.random()*comentarios.length)].toUpperCase();
     alert(comentarioAleatorio);
     
     alert("El precio total de tu pedido es:\n\n"+escogerEntrante+" = "+precioEntrante+ " Euros\n"+escogerPrimero+" = "+precioPrimero+ " Euros\n"+escogerSegundo+" = "+precioSegundo+ " Euros\n"+escogerAdicional+" = "+ precioAdicional+" Euros\n"+" Total A Pagar:  "+precioTotal.toFixed(2)+" Euros\n");       
 }    
else if (adicionar == 'No'){ 
precioTotalSinPostre = precioEntrante + precioPrimero + precioSegundo;
alert("El precio total de tu pedido es:\n\n"+escogerEntrante+" = "+precioEntrante+ " Euros\n"+escogerPrimero+" = "+precioPrimero+ " Euros\n"+escogerSegundo+" = "+precioSegundo+ " Euros\n Total A Pagar:  "+precioTotalSinPostre.toFixed(2)+" Euros\n");     
} 
}
}catch (err) {
alert(err.message);
}
//Carta Cena
var listaCenaPrincipal = '';
var listaCenaSegundo = '';
var listaCenaEntrante = '';

for (var i = 0; i < cena.length -6; i++){  
listaCenaEntrante += `Entrante:  ${cena[i].entrante}\nPrecio: ${cena[i].precio} euros\n\n`;     
}
for (var i = 3; i < cena.length - 3; i++){  
listaCenaPrincipal += `Primer plato:  ${cena[i].principal}\nPrecio: ${cena[i].precio} euros\n\n`;     
}
for (var i = 6; i < cena.length; i++){  
listaCenaSegundo += `Segundo plato:  ${cena[i].segundo}\nPrecio: ${cena[i].precio} euros\n\n`;     
}
//Condicionales hora Cena
try {

if((elegirHora >= "19:00") && (elegirHora < "23:59")){
alert("Es hora de cenar, tenemos deliciosas opciones");
var entranteCena = prompt("Escoge tu plato principal, puede ser: Nachos, Pan  De Ajo o Tabla Quesos \n\n "+" Menu Primer Plato\n\n"+listaCenaEntrante).toLowerCase().replace(/\b[a-z]/g,c=>c.toUpperCase());

while ((entranteCena != 'Nachos') && (entranteCena != 'Pan De Ajo') && (entranteCena != 'Tabla Quesos')){
alert(entranteCena+ "  No es una opcion valida");
entranteCena = prompt("Escoge tu plato principal, puede ser: Nachos, Pan  De Ajo o Tabla Quesos \n\n "+" Menu Primer Plato\n\n"+listaCenaEntrante).toLowerCase().replace(/\b[a-z]/g,c=>c.toUpperCase());
}
 var platoEntranteCena = cena.find(cena => cena.entrante === entranteCena);
 var precioEntranteCena = platoEntranteCena.precio;
 alert(comentarioAleatorio);

var primeroCena = prompt("Escoge tu plato principal, puede ser: Ensalada, Guisantes o Verduras Salteadas \n\n "+" Menu Primer Plato\n\n"+listaCenaPrincipal).toLowerCase().replace(/\b[a-z]/g,c=>c.toUpperCase());

while ((primeroCena != 'Ensalada') && (primeroCena != 'Guisantes') && (primeroCena != 'Verduras Salteadas')){
alert(primeroCena+ "  No es una opcion valida");
primeroCena = prompt("Escoge tu plato principal, puede ser: Ensalada, Guisantes o Verduras Salteadas \n\n "+" Menu Primer Plato\n\n"+listaCenaPrincipal).toLowerCase().replace(/\b[a-z]/g,c=>c.toUpperCase());
}
 var primerPlatoCena = cena.find(cena => cena.principal === primeroCena);
 var precioPrimeroCena = primerPlatoCena.precio;
 comentarioAleatorio = comentarios[Math.floor(Math.random()*comentarios.length)].toUpperCase();
 alert(comentarioAleatorio);

var segundoCena = prompt("Escoge tu segundo plato, puede ser: Hamburguesa, Solomillo o Lomo Cerdo \n\n "+" Menu Segundo Plato\n\n  "+listaCenaSegundo).toLowerCase().replace(/\b[a-z]/g,c=>c.toUpperCase());

while((segundoCena != 'Hamburguesa') && (segundoCena != 'Solomillo') && (segundoCena != 'Lomo Cerdo')){
 alert(segundoCena+ "  No es una opcion valida");
 segundoCena = prompt("Escoge tu segundo plato, puede ser: Hamburguesa, Solomillo o Lomo Cerdo \n\n "+" Menu Segundo Plato\n\n  "+listaCenaSegundo).toLowerCase().replace(/\b[a-z]/g,c=>c.toUpperCase());   
}

var segundoPlatoCena = cena.find(cena => cena.segundo === segundoCena);
var precioSegundoCena = segundoPlatoCena.precio; 
comentarioAleatorio = comentarios[Math.floor(Math.random()*comentarios.length)].toUpperCase();
alert(comentarioAleatorio);

 adicionar = prompt(comentarioAleatorio+"\n\nDesea adicionar algo a su plato: Si o No").toLowerCase().replace(/\b[a-z]/g,c=>c.toUpperCase());

while((adicionar != 'Si') && (adicionar != 'No')){
   alert(adicionar+ '  No es una opcion valida');
   adicionar = prompt(comentarioAleatorio+"\n\nDesea adicionar postre a su plato: Si o No").toLowerCase().replace(/\b[a-z]/g,c=>c.toUpperCase());
}
 if(adicionar == 'Si'){
     var escogerAdicional = prompt("Escoge tu postre, puede ser: Tarta Queso, Flan o Helado \n\n "+" Menu\n\n  "+listaAdicionales).toLowerCase().replace(/\b[a-z]/g,c=>c.toUpperCase());
     
     while((escogerAdicional != 'Tarta Queso') && (escogerAdicional != 'Flan') && (escogerAdicional != 'Helado')){
       alert(escogerAdicional+ '  No es una opcion valida');
       escogerAdicional = prompt("Escoge tu postre, puede ser: Tarta Queso, Flan o Helado \n\n "+" Menu\n\n  "+listaAdicionales).toLowerCase().replace(/\b[a-z]/g,c=>c.toUpperCase());
     } 
     adicion = adicionales.find(adicionales => adicionales.comida === escogerAdicional);
     precioAdicional = adicion.precio;
     precioTotal = precioEntranteCena + precioPrimeroCena + precioSegundoCena + precioAdicional;
     comentarioAleatorio = comentarios[Math.floor(Math.random()*comentarios.length)].toUpperCase();
     alert(comentarioAleatorio);
     
     alert("El precio total de tu pedido es:\n\n"+entranteCena+" = "+precioEntranteCena+ " Euros\n"+primeroCena+" = "+precioPrimeroCena+ " Euros\n"+segundoCena+" = "+precioSegundoCena+ " Euros\n"+escogerAdicional+" = "+ precioAdicional+" Euros\n"+" Total A Pagar:  "+precioTotal.toFixed(2)+" Euros\n");       
 }    
else if (adicionar == 'No'){ 
precioTotalSinPostre = precioEntranteCena + precioPrimeroCena + precioSegundoCena;
alert("El precio total de tu pedido es:\n\n"+entranteCena+" = "+precioEntranteCena+ " Euros\n"+primeroCena+" = "+precioPrimeroCena+ " Euros\n"+segundoCena+" = "+precioSegundoCena+ " Euros\n" + "Total A Pagar:  "+precioTotalSinPostre.toFixed(2)+" Euros\n");     
} 
} 
}
catch (err) {
console.error(err.message);
}


