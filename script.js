

const pregunta1 = '¿Qué empresa creo java script?'
const pregunta2 = 'Metodo que aparta el ultimo elemento de un array'
const pregunta3 = '¿Cuál es el operador de igualdad estricta?'
const respuesta1 = 'netscape'
const respuesta2 = 'pop'
const respuesta3 = '==='

let respuestaUser
let exit = 0
let seleccion 

    while (exit == 0) {
        seleccion =  prompt("Eliga la dificultad (3: Dificil 2: Medio 1:facil)")

            switch (seleccion) {
        

                case "1": 
                    pregunta ( pregunta1 , respuesta1 , respuestaUser ) 
                break;
        
                case "2": 
                    pregunta ( pregunta2 , respuesta2 , respuestaUser ) 
                break;
        
                case "3": 
                    pregunta ( pregunta3 , respuesta3 , respuestaUser ) 
                break;
            }


    } 

    function pregunta( preg , resp, respUse ) {
    
        respUse =  prompt(preg).toLowerCase()
        
        
        if (resp == respUse ) {
            
            alert ('correcto')
                exit = 1

        }
        else{

            alert ('incorrecto, vuelva a intentarlo')
            
        }
    }