

//Objetos
const palabra1 = new palbra("netscape" , 8 , "Empresa creadora de javascript" , 10)
let palabra2 = structuredClone(palabra1)
palabra2.respuesta = "pop"
palabra2.longitud = 3 
palabra2.pista = "Metodo que aparta el ultimo elemento de un array"

const palabra3 = new palbra("dom" , 3 , "Estructura de objetos que representa una página HTML" , 10)
const palabra4 = new palbra("id" , 2 , "Empieza con B, tipo de dato que solo puede obtener 2 valores" , 10)
const palabra5 = new palbra("it" , 2, "Palabra en plural, colección de datos relacionados como una entidad" , 10)
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
   
   //Función Que crea los cuadrados
   
   document.addEventListener("DOMContentLoaded", ()=>{
    //Teclas
    const teclas = document.querySelectorAll(".filaTeclado Button")
    
    for (let i = 0; i < teclas.length; i++) {
        teclas[i].onclick = ({ target }) =>{
            const tecla = target.getAttribute("data-key")
             localStorage.setItem('mensaje' ,  tecla)
            
            console.log(tecla)
        }
    }
    
       crearCuadrados()
       //Funciones de Pintar cuadrados
       pintarCuadrados()
    })
    function pintarCuadrados () {
        pintar1Cuadrado(2)
        pintar1Cuadrado(77)
        pintar1Cuadrado(95)
        pintar1Cuadrado(104)
        pintar2cuadrados(11,17)
        pintar2cuadrados(20,26)
        pintar2cuadrados(59,61)
        pintar2cuadrados(68,70)
        pintar2cuadrados(37,38)
        pintar2cuadrados(41,43)
        pintarFila(29,36)
        pintarFila(46, 48)
        pintarFila(50, 54)
        pintarFila(84, 88)
    }
    function crearCuadrados () {
        const tableroJuego = document.getElementById("tablero")
        for (let i = 0; i < 108; i++) {
            let cuadrado = document.createElement("button")
            cuadrado.classList.add("cuadrado")
            cuadrado.setAttribute("id", i +  1)
            tableroJuego.appendChild(cuadrado)
            
         }
     }
    function pintar1Cuadrado(index){
        document.getElementById(index).style.backgroundColor = "white"
        document.getElementById(index).style.cursor = "pointer"
        document.getElementById(index).classList.add("pintado")
        

    }
    function pintar2cuadrados(a,b){
        document.getElementById(a).style.backgroundColor = "white"
        document.getElementById(a).style.cursor = "pointer"
        document.getElementById(a).classList.add("pintado")
        document.getElementById(b).style.backgroundColor = "white"
        document.getElementById(b).style.cursor = "pointer"
        document.getElementById(b).classList.add("pintado")
      
    }
    function pintarFila(c,d){
        for ( ; c <= d; c++) {
            document.getElementById(c).style.backgroundColor = "white"
            document.getElementById(c).style.cursor = "pointer"
            document.getElementById(c).classList.add("pintado")
            
        }
    }
    
    //Función pregunta



    function pregunta( palabra) {
        console.log(palabra)
        
        respUse =  prompt(palabra.pista).toLowerCase()
        
        (palabra.respuesta == respUse ) ? alert('Correcto') : alert('Vuelva a intentarlo')
       
    }
 
