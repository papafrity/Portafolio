// prueba para ver si se clono bien


// ejemplos de como usar las condicionales en javascript

const billetera = 999;

if (billetera <= 1000) {
    console.log ("tiene mas de mil pesos")
} else if (billetera >= 1000) {
    console.log ("no tiene  mas de mil pesos");
} else {
    console.log ("no hay billetera con plata... pobre")
}

// ------------------------------

const carro = azul;

switch (carro) {
    case azul:
        console.log ("el auto es azul")
        break;

    case rojo:
        console.log ("El auto es rojo");  
        break; 

    case amarillo:
        console.log ("El auto es amarillo");
        break;
    default:
        console.log ("No se que color tiene el coche");
}

//  ----------------------------

for (let i = 0; i < 10; i++) {
    // const element = 10  
    console.log(i);
}

// preguntas para los trainee como sacar numeros par o impar.
for (let i = 1; i <= 10; i++) {
    if ( i % 2 === 0 ) {
        console.log("El Número ${i} es PAR");
    } else {
        console.log("El Numero ${i} es IMPAR");
    }
}

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}

// ejemplo de "class" en javascript
class    Persona{
    constructor(nombre, apellido){
        this.Nombre = nombre;
        this.Apellido = apellido;
    }

    saludar(){
        console.log(`Hola soy ${this.Nombre} ${this.Apellido}`);
    }
}
const personaMike = new Persona('Michael', 'Ramirez');
personaMike.saludar();

// ejemplo de promise o promesa (sirve para dar un valor que podria o no podria estar o existir, y luego se le agrega un if else para que reaccione al valor que tiene o que no llega a tener)
// en los Promises existen 3 valores
// Pending : No se ha cumplido pero tampoco se ha rechazado ( te sale cuando no hay codigo que resolver como el if else no existiera)
// Fulfilled : Ya se cumplio
// Rejected :  Se ha rechazado o no se pudo cumplir
const usuarioAutenticado = new Promise((resolve, reject) => {
    const auth = true;

    if (auth) {
        resolve('Usuario Autenticado Correctamente!') //el promise se ejecuta
    } else {
        reject('no se pudo iniciar sesion'); //el promise no se cumple
    }

});

console.log(usuarioAutenticado); //promesa; resultado final en consola es un promise: (alguna de los 3 valores) "el Usuari se autentico correctamente"

// otra opcion para usar bien el promise (por que de la forma anterior solo se logra un mensaje
// logico de la maquina y nosotros queremos un mensaje limpio en la pantalla sin tanto detalle logico)
// entonces haremos lo siguiente
usuarioAutenticado
.then(response => console.log('desde el promise')) // esta es el ejemplo de vs code, no esta comprobado, es el auto completado

// este si es el del profe de Udemy
usuarioAutenticado
.then( function(){
    console.log ('Se autentico correctamente'); // el resultado sera "se autentico correctamente" y el mensaje saldra limpio
})

// segundo ejemplo del profe

usuarioAutenticado
.then(function(resultado){
    console.log(resultado); // esto  imprime "Usuario Autenticado Correctamente!" por que se dirige a el usuarioAutenticado
                            // y de ahi lo imprime limpiamente, de esta forma ya se puede poner en el HTML de forma facil
    })                        
    .catch(function(error) {
        console.log(error)
    })

// ejemplo simple con arrowfunction

usuarioAutenticado
.then(()=>console.log("Se autentico correctamente"))    
.catch(()=>console.log("No se autenticó"))  

// tambien se puede poner

usuarioAutenticado
.then((resultado)=>console.log(resultado))    
.catch((error)=>console.log(error)) //mas corto con el mismo resultado

// clase 140 notificación API (boton)
// es mejor poner un const boton = document.queryselector por que cuando tenes muchos se te hace dificil mantenerlos y de esta forma es mas facil que solo poner document.querySelector sin el const boton
// este ejemplo es el que auto relleno la maquina IA integrada
const botonn = document.querySelector( "#boton" ).addEventListener( "click   ", () =>{
    const usuario = document.querySelector("#usuario").value;
    const contrasena = document.querySelector("#contrasena").value;

    usuarioAutenticado(usuario, contrasena )
    .then(notificarExito)
    .catch(mostrarError);
});

// este es el verdadero ejemplo del profesor de Udemy
const boton =  document.querySelector("#boton");
boton.addEventListner("click", function () {
    console.log("diste click")
});

// si queremos hacer un ejemplo con arrowfunction y que en este caso pregunte en una notificación para pedir permiso para recibir notificaciones (tipo facebook, etc)

const boton2 = document.querySelector("#boton");
boton2.addEventListener("click", ()=>{
    notification.requestPermission() //pide permiso para activar notificaciones
    .then( resultado => console.log("El resultado es: ", resultado) );
    // tambien se puede  hacer de esta manera
    // .then(resultado => console.log("El resultado es ${resultado}"));   //(sacar el comentario para ver acción)
})