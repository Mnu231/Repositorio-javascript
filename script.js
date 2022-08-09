/*
class palbra{
    constructor (respuesta, longitud, pista, puntos ){
        this.respuesta = respuesta
        this.longitud = longitud
        this.pista  = pista
        this.puntos = puntos    
    }
}
*/
//Botones
const boton1 = document.getElementById("botonPista")
let parrafo = document.getElementById ("parrafoPista")
boton1.addEventListener("click", () => {
    console.log("diste click en add Event")
    parrafo.innerText =  palabras[0].pista
})

//Objetos
const palabra1 = new palbra("netscape" , 8 , "Empresa creadora de javascript" , 10)
const palabra2 = new palbra("pop" , 3 , "Metodo que aparta el ultimo elemento de un array" , 10)
const palabra3 = new palbra("dom" , 3 , "Estructura de objetos que representa una página HTML" , 10)
const palabra4 = new palbra("booleano" , 8 , "Empieza con B, tipo de dato que solo puede obtener 2 valores" , 10)
const palabra5 = new palbra("Objetos" , 6 , "Palabra en plural, colección de datos relacionados como una entidad" , 10)
const palabra6 = new palbra("Array" , 5 , "Tipo de dato que sirve para almacenar valores en forma de línea" , 10)
const palabra7 = new palbra("while" , 5 , "Ciclo que puede ejecutarse 0 o más veces dependiendo de la condición" , 10)
const palabra8 = new palbra("stringify" , 9 , "Método que recibe un objeto y devuelve un JSON" , 10)
const palabra9 = new palbra("parse" , 5 , "Método que recibe un JSON y devuelve un objeto" , 10)
const palabra10 = new palbra("evento" , 6 , "Manera en la que javascript controla las acciones de un usuario" , 10)

//ARRAY de palabras
const palabras = [] 
palabras.push(palabra1)
palabras.push(palabra2)
palabras.push(palabra3)
palabras.push(palabra4)
palabras.push(palabra5)
palabras.push(palabra6)
palabras.push(palabra7)
palabras.push(palabra8)
palabras.push(palabra9)
palabras.push(palabra10)

//Preguntas
const pregunta1 = '¿Qué empresa creo java script?'
const pregunta2 = 'Metodo que aparta el ultimo elemento de un array'
const pregunta3 = 'Estructura de objetos que representa una página HTML'

//Variables

let ContadorPistas = 3;
let i;
let respuestaUser
let exit = 0
let seleccion 

//Menú
/*
    while (exit == 0) {
        seleccion =  prompt("Eliga la dificultad (3: Dificil 2: Medio 1:facil)")

            switch (seleccion) {
        
                
                case "1": 
                    i = 0
                    pregunta ( palabras[i] ) 
                break;
        
                case "2":
                    i = 1 
                    pregunta ( palabras[i]) 
                break;
        
                case "3": 
                    i = 2
                    pregunta ( palabras[i]) 
                break;
            }

    } 
    */

    
    //Función Que crea los cuadrados
    
    document.addEventListener("DOMContentLoaded", ()=>{
        crearCuadrados()
        function crearCuadrados () {
            const tableroJuego = document.getElementById("tablero")
            for (let i = 0; i < 81; i++) {
                let cuadrado = document.createElement("div")
                cuadrado.classList.add("cuadrado")
                cuadrado.setAttribute("id", i +  1)
                tableroJuego.appendChild(cuadrado)
                
            }
        }
    })
    
    //Función pregunta
    function pregunta( palabra) {
        console.log(palabra)
        
        respUse =  prompt(palabra.pista).toLowerCase()
        
        
        if (palabra.respuesta == respUse ) {
            
            alert ('correcto')
                exit = 1

        }
        else{
            alert('vuelva a intentarlo') 
        }
       
    }
 
