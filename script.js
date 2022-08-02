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


const palabra1 = new palbra("netscape" , 8 , "Palabra de 8 letras que empieza con n" , 10)
const palabra2 = new palbra("pop" , 3 , "Palabra de 3 letras que empieza con p" , 10)
const palabra3 = new palbra("===" , 3 , "Símbolo de 3 caracteres" , 10)



const palabras = [] 
palabras.push(palabra1)
palabras.push(palabra2)
palabras.push(palabra3)


const pregunta1 = '¿Qué empresa creo java script?'
const pregunta2 = 'Metodo que aparta el ultimo elemento de un array'
const pregunta3 = '¿Cuál es el operador de igualdad estricta?'


let i;
let respuestaUser
let exit = 0
let seleccion 

    while (exit == 0) {
        seleccion =  prompt("Eliga la dificultad (3: Dificil 2: Medio 1:facil)")

            switch (seleccion) {
        
                
                case "1": 
                    i = 0
                    pregunta ( pregunta1 , palabras[i] ) 
                break;
        
                case "2":
                    i = 1 
                    pregunta ( pregunta2 , palabras[i]) 
                break;
        
                case "3": 
                    i = 2
                    pregunta ( pregunta3 , palabras[i]) 
                break;
            }

    } 

    function pregunta( preg , palabra) {
        console.log(palabra)
        
        respUse =  prompt(preg).toLowerCase()
        
        
        if (palabra.respuesta == respUse ) {
            
            alert ('correcto')
                exit = 1

        }
        else{
            alert('vuelva a intentarlo')
        }
       
    }
 
