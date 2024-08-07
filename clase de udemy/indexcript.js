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

// ejemplo de promise o promesa (sirve para dar un valor que podria o no podria estar o existir, y luego se le agrega un 
// if else para que reaccione al valor que tiene o que no llega a tener)
// en los Promises existen 3 valores
// 
//      Pending : No se ha cumplido pero tampoco se ha rechazado ( te sale cuando no hay codigo que resolver como el if else no existiera)
//      Fulfilled : Ya se cumplio
//      Rejected :  Se ha rechazado o no se pudo cumplir
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

// clase 140 notificación API (boton)----------------------------------------------------------
// 
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

// clase 141 async / await---------------------------------------------------------------------
// async / await es una forma de escribir codigo asincrono de forma mas limpia, si se usa async es obligatorio poner await
//  --poner delante de la funcion async esta diciendo que la funcion se va a resolver sin importar el orden
//  --poner await significa que la funcion esperara a que se ejecute el await antes de ejecutar lo que sigue
//  --await sirve para bloquear la ejecucion cuando tenes mas de un llamado de una funcion, por que esta la 
// opcion de no poner await y que se ejecuten las dos al mismo tiempo, pero si quieres que se ejecute una 
// primero y vaya por partes ahi si agrega un await a cada funcion que queres que espere.
//  Async / Await

function descargarNuevosClientes() {
    return new Promise( (resolve) => {
        console.log('Descargarndo clientes... espere...');
            // existe "setInterval" que repite y ejecuta la funcion fijando un temporalizador
        setTimeout( () => {   // setTimeout es un temporlizador para ejecutar o terminar de ejecutar una funcion
            resolve('Clientes descargados');
        }, 5000 );   // el tiempo se pone en milisegundos por lo que 1000 seran un segundo

    });


}

async function app() {
    try {    // try significa que lo intentara una vez si o si
        const resultado = await descargarNuevosClientes();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }


}

app();


// como resultado final quedara asi:
// descargando clientes... espere... 
// este codigo no se bloquea (este mensaje saldra instantaneamente, sin esperar los 5 segundos)
// Los clientes fueron descargados (este mensaje saldra despues de 5 segundos)

// vamos a repetir la ultima parte con un cambio del console.log dentro del try

async function app() {
    try {    // try significa que lo intentara una vez si o si
        const resultado = await descargarNuevosClientes();
        console.log ('este código si se bloquea se bloquea')
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }


}

app();


// como resultado final quedara asi:
// descargando clientes... espere...
// Este código si se bloquea (aparecera luego de 5 segundos con el codigo de abajo)
// Los clientes fueron descargados (aparece en conjunto con el de arriba)

// clase 142 como trabajar con dos consultas async await?------------------------------------------------------------------------

//  --await sirve para bloquear la ejecucion cuando tenes mas de un llamado de una funcion, por que esta la 
// opcion de no poner await y que se ejecuten las dos al mismo tiempo, pero si quieres que se ejecute una 
// primero y vaya por partes ahi si agrega un await a cada funcion que queres que espere.

// ejemplo:

function descargarNuevosClientes() {
    return new Promise( (resolve) => {
        console.log('Descargarndo clientes... espere...');
            // existe "setInterval" que repite y ejecuta la funcion fijando un temporalizador
        setTimeout( () => {   // setTimeout es un temporlizador para ejecutar o terminar de ejecutar una funcion
            resolve('Clientes descargados');
        }, 5000 );   // el tiempo se pone en milisegundos por lo que 1000 seran un segundo

    });

}

function descargarUltimosPedidos() {
    return new Promise( resolve => {
        console.log ('descargando pedidos... espere...');

        setTimeout( () => {
            resolve('Pedidos descargados');
        }, 3000  );
    })
}

async function app() {
    try {    // try significa que lo intentara una vez si o si
        const clientes = await descargarNuevosClientes();  // si ponemos await en los dos, ambos esperaran para ejecutarse
        const pedidos = await descargarUltimosPedidos();  // y asi tardara el doble de tiempo
        console.log(clientes);
        console.log(pedidos);
    } catch (error) {
        console.log(error);
    }


}

// aremos otro ejemplo para solucionar eso, copiamos solo la ultima parte donde dice async

async function app() {
    try {    // try significa que lo intentara una vez si o si
        // const clientes = await descargarNuevosClientes();
        // const pedidos = await descargarUltimosPedidos();
        // console.log(clientes);
        // console.log(pedidos);

        const resultado = await Promise.all([ descargarNuevosClientes(), descargarUltimosPedidos() ]);
        // usando Promise.all crearemos un arreglo donde uniremos ambas funciones de clientes y pedidos, y haran que se ejecuten al mismo tiempo,
        // colocaremos await porque es obligatorio ponerlo cuando usamos async

        // ahora podemos colocar el console.log de "resultado"
        console.log(resultado[0]); // se le agrega [] por que al ser un arreglo se convierte en una lista y puede cambiar el orden
        console.log(resultado[1]);
    } catch (error) {
        console.log(error);
    }
// ¡¡NOTA IMPORTANTE!! te pueden pedir en una entrevista si sabes como hacer mas eficiente un llamado async / await
// para eso se debe aprender el await Promise.all( [ blabla(), ponerLoQueHagaFalta() ])

}

// clase 143 "fetch api" ----------------------------------------------------------------------------------------------------
// para conectar con una base de datos

function obtenerEmpleados() {
// el nombre del json es empleados, pero lo cambie a "clase143"
    const archivo = 'clase143.json';
//  paso a paso
    fetch(archivo)// lo que hacemos aqui es fetch a este "archivo"
    .then( resultado => {   // entonces el resultado va a ser un json, y lo va a retornar al siguiente .then "datos" 
        return resultado.json();  // (pensara, clase de respuesta es esta, es un json o un texto) si le ponemos texto lo pondra en texto, si lo ponemos en json se vera mas ordenado y lo mostrara como si fuera un arreglo y le dara formato
    })
    .then( datos => {
        console.log(datos);  // ahora si accedemos a los datos
    })
}
obtenerEmpleados();

// version resumida de arriba
    fetch(archivo)
    .then(  resultado => resultados.json())
    .then( datos => { console.log(datos.clase143)  })  // se le agrega a "datos" un ".clase143" (empleados en el ejemplo del profe), de esta forma se pueden acceder a los datos

    //    tambien se le puede agregar:-------- se le llama distructuring
    const { clase143 } = datos;  // con lo cual se podria comentar la linea de "datos.clase143", con esto seria lo mismo
    console.log(clase143)  // (empleados en el ejemplo del profe)

    // en le proximo ejemplo se agregan los resultados de forma individual:
    empleados.forEach( empleado => {  // esta opcion para mostrar todo
        console.log(empleado); // al poner "empleado" se mostrara todo lo que contenga el arreglo

    //  si queremos agregar una opcion individual para cada uno tendremos que ponerlo asi; sin olvidar que hay que usar el -"empleados.forEach()"- 
        console.log(empleado.id);
        console.log(empleado.nombre);
        console.log(empleado.puesto);

    //existe otra forma de separar de la lista, y sean mas de uno, por ejemplo, "ID" y "Nombre" (no queremos profesion) al mismo tiempo:
    // la tecnica se llama "distructuring"
        const { empleados } = datos;  // si no tenemos nada creado, al poner empleados se crea automatico para poder ejecutarse
        console.log(empleados);  // se usa lo que recien se creo, en este caso "empleados"

    // este es un ejemplo de la IA para explicar mejor como funciona "distructuring":


    // --------------------ejemplo de la IA----------------------
    const persona = {
        nombre: 'Juan',
        edad: 30,
        profesion: 'Desarrollador Web'
    };
    
    // Usando destructuring para extraer propiedades específicas
    const { nombre, edad } = persona;
    
    console.log(nombre); // Resultado: 'Juan'
    console.log(edad); // Resultado: 30
    // ----------------------------------------------------------


    // si queremos mostrarlo en el HTML haremos esto:
        document.querySelector('.contenido')  // poniendo document hacemos referencia a todo el archivo o documento HTML, el querySelector es para seleccionar algo dentro del document
        // en el HTML tenemos un div llamado contenido,peor se puede elegir cualquier nombre o selector

        // hay otras formas de poder mostrarlo en el HTML, una de ella es eligiendo solo un detalle de la lista, en este caso seria "nombre"
        document.querySelector('.contenido').innerHTML = empleado.nombre;  // con esto se muestra el nombre, este es un ejemplo creado por la IA de vscode, Usa innerHTML cuando quieras agregar contenido que se convierta en un elemento DOM (por ejemplo, agregar un párrafo o una lista).
        document.querySelector('.contenido').textContent = empleado.nombre;  //-- este tambien muestra el nombre, es ejemplo del profesor, Usa textContent cuando quieras cambiar el contenido de un nodo de texto existente sin interpretar etiquetas HTML. Tambien intercambia el texto ya escrito si tenia un "raul" con esto lo cambia a "pedro".
        document.querySelector('.contenido').textContent += empleado.nombre;  // agregando el signo mas va a sumar el texto anterior que estaba escrito y le suma lo nuevo.
        


    })
        // hay una forma de hacer fetch usando menos codigo (async / await)
        async function obtenerEmpleados() {  // de esta forma podemos hacer fetch con menos codigo y ademas con mas funciones, como usar el await para esperar que una funcion termine antes de continuar para que no se cometan errores
            const archivo = 'empleados.json'
            // para mostrar los datos, podemos hacerlo asi
            const resultado = await fetch(archivo);
            const datos = await resultado.json();
            console.log(datos);
        }
        obtenerEmpleados(); 

    // seccion 11: javascrip en el navegador y DOM Scripting--------------------------------------------------------
    
    // clase 144 "seleccionar elementos con query.selector"---------------------------------------------------------
    // tenemos 3 tipos de elegir o seleccionar los selectores, y sean ".clases" o "#ID"

    // querySelector------
    // querySelector te retorna 0 o 1 Elementos siempre
    const heading = doccument.querySelector('h2')   //se crea la variable heading con el selector "h2"
    console.log(heading);  // de esta forma se mostrara todos los "h2" que existan en la pagina
    
    const heading2 = documnet.querySelector('.header__texto h2')  // de esta forma se seleccionara los "h2" solo dentro de la clase / div ".header__texto"
    console.log(heading2);
   
    const heading3 = documnet.querySelector('#heading')  // de esta forma solo se seleccionaran el/los selectores de "ID"
    console.log(heading3);
        // si se quiere "CAMBIAR CONTENIDO EN EL HTML" se puede hacer de esta forma

    heading.textContent = 'Nuevo Heading';  // lo que hace esto es seleccionar de la variable creada heading y tomar solo el textContent, y lo que se ponga luego del "=" sera lo que se cambie en el HTML
    heading.classList.add('nueva-clase');  // esto le agregara una nueva clase a la variable "heading" que selecciona los "h2" como sale arriba en la primera, si ya contenia una clase, se le agregara otra, sino la creara y se lalmara "nueva-clase"
    
        // un punto a tener en cuenta es que como retorna solo 0 o 1 si hay muchos, por ejemplo, 3 "a (que son para links)" solo tomara el primero, y para eso tenemos el siguiente querySelector

    // querySelectorAll-------

    const enlaces = document.querySelectorAll('.navegacion a');  //esto va a seleccionar desde la clase padre "navegacion" todos los links "a", hay que recordar que los selectores son iguales a los de css las clases ".clases" y "#ID"
    console.log(enlaces);

        // se puede elegir un elemento en especial poniendo de esta forma
    console.log(enlaces[0])

        // de esta forma se puede cambiar las propiedades
    enlaces[0].textContent = 'nuevo texto para enlace'

        // hay otra forma mas corta de lograr lo primero, sacando la variable
    document.querySelectorAll('.navegacion a')[0].textContent = 'nuevo texto para enlace'

        // para modificar el link se puede usar tal cual sale en el HTML "href"
    enlaces[0].href = 'http://www.google.com';

        // para agregar una nueva clase se puede hacer de esta forma
    enlaces[0].classList.add('nueva-clase');

        /* Entonces se puede modificar cada cosa dentro del HTML creando una variable que 
         contenga el selector con "document.querySelector" o agregarle el "all" al final para elegir todas
         luego de crear la variable en este caso "enlaces" se puede ocupar para elegir lo que se desea cambiar, ya sea "textContent" o "href" o "classList.add",etc. */

    // getElementById


