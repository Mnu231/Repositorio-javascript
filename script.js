

const respuesta = 'netscape'
let respuestaUser

let exit = 0


while (exit == 0) {
    
    respuestaUser =  prompt("¿Qué empresa creo javascript").toLowerCase()
    
    pregunta (respuesta , respuestaUser)
    
    

} 

function pregunta( respuesta, respuestaUser ) {
    if (respuesta == respuestaUser ) {
        
        console.log ('correcto')
        exit = 1
    }
    else{
        console.log ('incorrecto')
        
    }
}