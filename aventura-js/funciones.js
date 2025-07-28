//Funciones




function saludar(nombre) {
  console.log(`¡Hola, ${nombre}!`);
}

saludar("Ball");





//// Default Values
function displayHello(name, salutation='Hello') {
  console.log(`${salutation}, ${name}`);
}

displayHello('Christopher');            // displays "Hello, Christopher"
displayHello('Christopher', 'Hi');      // displays "Hi, Christopher"





//// Return

function sumar(a, b) {
  return a + b;
}

console.log(sumar(5, 5));




//// Functions as parameters

const multiplicar = (a, b) => a * b;

console.log(multiplicar(4, 6)); // 24

