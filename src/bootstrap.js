const almuerzo = [
  {
    comida: "Bandeja Paisa",
    bebida: "Zumo Maracuya",
    precio: 14.40
  },
  {
      comida: "Chuleta Valluna",
      bebida: "Zumo de Mora",
      precio: 16.40
    },
  {
      comida: "Ajiaco",
      bebida: "Limonada",
      precio: 18.40
    }
];
const cena = [
  {
    comida: "Hamburguesa",
    bebida: "Refresco",
    precio: 9
  },
  {
      comida: "Salchipapa",
      bebida: "Refresco",
      precio: 11
    },
  {
      comida: "Plato Combinado",
      bebida: "Refresco",
      precio: 14.35
    }
];

const desayuno = [
   {
      comida: "Arepa Con Chorizo",
      bebida: "Chocolate Caliente",
      precio: 8.20
    },
     {
        comida: "Calentado De Frijoles",
        bebida: "Chocolate Caliente",
        precio: 10.40
      },
    {
        comida: "Arepa Con Pericos",
        bebida: "Cafe con leche",
        precio: 9.30
      }
];
const adicionales = [
   {
      comida:"Queso",
      precio: 2.10
  },
   {
      comida:"Chorizo",
      precio: 3.30
  },
  {
      comida:"Arepa",
      precio: 3.10
  }  
];

const comentarios = ["Que buena eleccion", "Es nuestro plato estrella", "Ese plato es delicioso"];
//Elemento aleatorio del array de comentarios
const comentarioAleatorio = comentarios[Math.floor(Math.random()*comentarios.length)].toUpperCase();

// Filtras horario de comidas libreria moment
const hora = moment();
var mañana = moment('08:30 am', "HH:mm a");
var descanso = moment('11:59 am', "HH:mm a");
var tarde = moment('02:00 pm', "HH:mm a");
var comida = moment('06:00 pm', "HH:mm a");
var noche = moment('11:59 pm', "HH:mm a")

horaDesayuno = hora.isBetween(mañana , descanso);  //hora desayuno

horaDescanso = hora.isBetween(descanso , tarde);  //hora descanso

horaAlmuerzo = hora.isBetween(tarde , comida);   //hora almuerzo

horaCena = hora.isBetween(comida , noche);    //hora cena
//Carta Adicionales
var listaAdicionales = '';
var adicionar = null;

for (var i = 0; i < adicionales.length; i++){
  listaAdicionales += `Plato:  ${adicionales[i].comida}\nPrecio: ${adicionales[i].precio} euros\n\n`; 
}
//Carta Desayuno
var listaDesayuno = '';

for (var i = 0; i < desayuno.length; i++){
 listaDesayuno += `Plato:  ${desayuno[i].comida}\nBebida:  ${desayuno[i].bebida}\nPrecio: ${desayuno[i].precio} euros\n\n`; 
}
//Condicionales hora Desayuno
try{
if(horaDesayuno == true){
  const escogerDesayuno = prompt("Escoge tu desayuno, puede ser: Arepa con chorizo, Calentado de Frijoles o Arepa con pericos \n\n"+"Menu\n "+listaDesayuno).toLowerCase().replace(/\b[a-z]/g,c=>c.toUpperCase());   

 if ((escogerDesayuno == 'Arepa Con Chorizo') || (escogerDesayuno == 'Calentado De Frijoles') || (escogerDesayuno == 'Arepa Con Pericos')){
   
     var platoDesayuno = desayuno.find(desayuno => desayuno.comida === escogerDesayuno);
     var precioDesayuno = platoDesayuno.precio;
     adicionar = prompt(comentarioAleatorio+"\n\nDesea adicionar algo a su plato: Si o No").toLowerCase().replace(/\b[a-z]/g,c=>c.toUpperCase());
   
    if (adicionar == 'Si'){
      const escogerAdicional = prompt("Escoge tu adicion, puede ser: Queso, Chorizo o Arepa \n\n "+" Menu\n\n  "+listaAdicionales).toLowerCase().replace(/\b[a-z]/g,c=>c.toUpperCase());
      if((escogerAdicional == 'Queso') || (escogerAdicional == 'Chorizo') || (escogerAdicional == 'Arepa')){
      adicion = adicionales.find(adicionales => adicionales.comida === escogerAdicional);
      precioAdicional = adicion.precio;
      precioTotal = precioDesayuno + precioAdicional;
      alert("El precio total de tu pedido es:\n\n"+escogerDesayuno+" = "+precioDesayuno+ " Euros\n"+escogerAdicional+" = "+ precioAdicional+" Euros\n"+" Total A Pagar:  "+precioTotal+" Euros\n");
      }
       else{
       alert("La adicion escogida no esta disponible, el precio total de tu pedido es:\n\n"+escogerDesayuno+" = " +precioDesayuno+ " Euros");  
    }
    }
 else if(adicionar == 'No'){ 
     alert("El precio total de tu pedido es:\n\n" +precioDesayuno+ " Euros");
  }
 else if ((adicionar != 'No') || (adicionar != 'Si') || (adicionar != null)) { 
 alert("Escoge una opcion valida");
 adicionar = prompt(comentarioAleatorio+"\n\nDesea adicionar algo a su plato: Si o No").toLowerCase().replace(/\b[a-z]/g,c=>c.toUpperCase());
 //alert("El precio total de tu pedido es:\n\n" +precioCena+ " Euros");  
  if(adicionar == 'Si' ){
 const escogerAdicional = prompt("Escoge tu adicion, puede ser: Queso, Chorizo o Arepa \n\n "+" Menu\n\n  "+listaAdicionales).toLowerCase().replace(/\b[a-z]/g,c=>c.toUpperCase());
    if((escogerAdicional == 'Queso') || (escogerAdicional == 'Chorizo') || (escogerAdicional == 'Arepa')){
 adicion = adicionales.find(adicionales => adicionales.comida === escogerAdicional);
 precioAdicional = adicion.precio;
 precioTotal = precioDesayuno + precioAdicional;
 alert("El precio total de tu pedido es:\n\n"+escogerDesayuno+" = "+precioDesayuno+ " Euros\n"+escogerAdicional+" = "+ precioAdicional+" Euros\n"+" Total A Pagar:  "+precioTotal+" Euros\n");  
    }
    else{
       alert("La adicion escogida no esta disponible, el precio total de tu pedido es:\n\n"+escogerDesayuno+" = " +precioDesayuno+ " Euros");  
    }
}
else if (adicionar == 'No'){ 
 alert("El precio total de tu pedido es:\n\n"+escogerDesayuno+" = " +precioDesayuno+ " Euros");     
} 
}     
 }
   else {
  throw new Error('Escoge una opcion valida');    
   }  
} 
}catch (err) {
alert(err.message);
console.error(err.message);
}

if(horaDescanso == true){
alert("No tenemos servicio en este horario abrimos de nuevo a las 2:00 pm");
}
//Carta Almuerzo
var listaAlmuerzo = '';

for (var i = 0; i < almuerzo.length; i++){  
  listaAlmuerzo += `Plato:  ${almuerzo[i].comida}\nBebida:  ${almuerzo[i].bebida}\nPrecio: ${almuerzo[i].precio} euros\n\n`;     
}
//Condicionales hora Almuerzo
try{
if(horaAlmuerzo == true){
const escogerAlmuerzo = prompt("Escoge tu almuerzo, puede ser: Bandeja Paisa, Chuleta Valluna o Ajiaco \n\n "+" Menu\n\n  "+listaAlmuerzo).toLowerCase().replace(/\b[a-z]/g,c=>c.toUpperCase());
if ((escogerAlmuerzo == 'Bandeja Paisa') || (escogerAlmuerzo == 'Chuleta Valluna') || (escogerAlmuerzo == 'Ajiaco')){ 
var platoAlmuerzo = almuerzo.find(almuerzo => almuerzo.comida === escogerAlmuerzo);
var precioAlmuerzo = platoAlmuerzo.precio;  
adicionar = prompt(comentarioAleatorio+"\n\nDesea adicionar algo a su plato: Si o No").toLowerCase().replace(/\b[a-z]/g,c=>c.toUpperCase());
  
  if(adicionar == 'Si'){
      const escogerAdicional = prompt("Escoge tu adicion, puede ser: Queso, Chorizo o Arepa \n\n "+" Menu\n\n  "+listaAdicionales).toLowerCase().replace(/\b[a-z]/g,c=>c.toUpperCase());
       if((escogerAdicional == 'Queso') || (escogerAdicional == 'Chorizo') || (escogerAdicional == 'Arepa')){
      adicion = adicionales.find(adicionales => adicionales.comida === escogerAdicional);
      precioAdicional = adicion.precio;
      precioTotal = precioAlmuerzo + precioAdicional;
      alert("El precio total de tu pedido es:\n\n"+escogerAlmuerzo+" = "+precioAlmuerzo+ " Euros\n"+escogerAdicional+" = "+ precioAdicional+" Euros\n"+" Total A Pagar:  "+precioTotal+" Euros\n");
       }
      else {
       alert("La adicion escogida no esta disponible, el precio total de tu pedido es:\n\n"+escogerAlmuerzo+" = " +precioAlmuerzo+ " Euros");  
    }     
    }
     else if(adicionar == 'No'){ 
      alert("El precio total de tu pedido es:\n\n" +precioAlmuerzo+ " Euros");
  } 
  else if ((adicionar != 'No') || (adicionar != 'Si')) { 
 alert("Escoge una opcion valida");
 adicionar = prompt(comentarioAleatorio+"\n\nDesea adicionar algo a su plato: Si o No").toLowerCase().replace(/\b[a-z]/g,c=>c.toUpperCase());
 //alert("El precio total de tu pedido es:\n\n" +precioCena+ " Euros");  
  if(adicionar == 'Si' ){
 const escogerAdicional = prompt("Escoge tu adicion, puede ser: Queso, Chorizo o Arepa \n\n "+" Menu\n\n  "+listaAdicionales).toLowerCase().replace(/\b[a-z]/g,c=>c.toUpperCase());
    if((escogerAdicional == 'Queso') || (escogerAdicional == 'Chorizo') || (escogerAdicional == 'Arepa')){
 adicion = adicionales.find(adicionales => adicionales.comida === escogerAdicional);
 precioAdicional = adicion.precio;
 precioTotal = precioAlmuerzo + precioAdicional;
 alert("El precio total de tu pedido es:\n\n"+escogerAlmuerzo+" = "+precioAlmuerzo+ " Euros\n"+escogerAdicional+" = "+ precioAdicional+" Euros\n"+" Total A Pagar:  "+precioTotal+" Euros\n");  
    }
    else{
       alert("La adicion escogida no esta disponible, el precio total de tu pedido es:\n\n"+escogerAlmuerzo+" = " +precioAlmuerzo+ " Euros");  
    }
}
else if (adicionar == 'No'){ 
 alert("El precio total de tu pedido es:\n\n"+escogerAlmuerzo+" = " +precioAlmuerzo+ " Euros");     
} 
} 
}
else {
  throw new Error('Escoge una opcion valida');
}    
}
}catch (err) {
alert(err.message);
console.error(err.message);
}
//Carta Cena
var listaCena = '';

for (var i = 0; i < cena.length; i++){  
listaCena += `Plato:  ${cena[i].comida}\nBebida:  ${cena[i].bebida}\nPrecio: ${cena[i].precio} euros\n\n`;     
}
//Condicionales hora Cena
try {

if(horaCena == true){
const escogerCena = prompt("Escoge tu cena, puede ser: Hamburguesa, Salchipapa o Plato Combinado \n\n "+" Menu\n\n  "+listaCena).toLowerCase().replace(/\b[a-z]/g,c=>c.toUpperCase());

if ((escogerCena == 'Hamburguesa')||(escogerCena == 'Salchipapa')||(escogerCena == 'Plato Combinado')){
  
  var platoCena = cena.find(cena => cena.comida === escogerCena);
  var precioCena = platoCena.precio;
  adicionar = prompt(comentarioAleatorio+"\n\nDesea adicionar algo a su plato: Si o No").toLowerCase().replace(/\b[a-z]/g,c=>c.toUpperCase());
  
  if(adicionar == 'Si' ){
 const escogerAdicional = prompt("Escoge tu adicion, puede ser: Queso, Chorizo o Arepa \n\n "+" Menu\n\n  "+listaAdicionales).toLowerCase().replace(/\b[a-z]/g,c=>c.toUpperCase());
if((escogerAdicional == 'Queso') || (escogerAdicional == 'Chorizo') || (escogerAdicional == 'Arepa')){
 adicion = adicionales.find(adicionales => adicionales.comida === escogerAdicional);
 precioAdicional = adicion.precio;
 precioTotal = precioCena + precioAdicional;
 alert("El precio total de tu pedido es:\n\n"+escogerCena+" = "+precioCena+ " Euros\n"+escogerAdicional+" = "+ precioAdicional+" Euros\n"+" Total A Pagar:  "+precioTotal+" Euros\n");  
    }
    else{
       alert("La adicion escogida no esta disponible, el precio total de tu pedido es:\n\n"+escogerCena+" = " +precioCena+ " Euros");  
    }     
}
else if (adicionar == 'No'){ 
 alert("El precio total de tu pedido es:\n\n" +precioCena+ " Euros");     
} 
else if ((adicionar != 'No') || (adicionar != 'Si')) { 
 alert("Escoge una opcion valida");
 adicionar = prompt(comentarioAleatorio+"\n\nDesea adicionar algo a su plato: Si o No").toLowerCase().replace(/\b[a-z]/g,c=>c.toUpperCase());
 //alert("El precio total de tu pedido es:\n\n" +precioCena+ " Euros");  
  if(adicionar == 'Si' ){
 const escogerAdicional = prompt("Escoge tu adicion, puede ser: Queso, Chorizo o Arepa \n\n "+" Menu\n\n  "+listaAdicionales).toLowerCase().replace(/\b[a-z]/g,c=>c.toUpperCase());
    if((escogerAdicional == 'Queso') || (escogerAdicional == 'Chorizo') || (escogerAdicional == 'Arepa')){
 adicion = adicionales.find(adicionales => adicionales.comida === escogerAdicional);
 precioAdicional = adicion.precio;
 precioTotal = precioCena + precioAdicional;
 alert("El precio total de tu pedido es:\n\n"+escogerCena+" = "+precioCena+ " Euros\n"+escogerAdicional+" = "+ precioAdicional+" Euros\n"+" Total A Pagar:  "+precioTotal+" Euros\n");  
    }
    else{
       alert("La adicion escogida no esta disponible, el precio total de tu pedido es:\n\n"+escogerCena+" = " +precioCena+ " Euros");  
    }
}
else if (adicionar == 'No'){ 
 alert("El precio total de tu pedido es:\n\n"+escogerCena+" = " +precioCena+ " Euros");     
} 
}
}
else {
  throw new Error('Escoge una opcion valida');
  //alert("Escoge una opcion valida");
}
  } 
}
catch (err) {
alert(err.message);
console.error(err.message);
}