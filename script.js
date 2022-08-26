

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
let palabraActual = []

//Codigo
cuadrado()

function cuadrado(numero){
    
    if (numero == 2 || numero == 11) {
        document.getElementById("e").style.display = 'inline'
        document.getElementById("v").style.display = 'inline'
        document.getElementById("del").style.display = 'inline'
        document.getElementById("enviar").style.display = 'inline' 
        teclaS1()
    }

    if (numero == 20 || numero == 29 || numero == 30 || numero == 38) {
        document.getElementById("n").style.display = 'inline'
        document.getElementById("t3").style.display = 'inline'
        document.getElementById("e3").style.display = 'inline'
        document.getElementById("del").style.display = 'inline'
        document.getElementById("enviar").style.display = 'inline'
        
        teclaS2()
    }

    if (numero == 37 || numero == 46) {
        document.getElementById("i").style.display = 'inline'
        document.getElementById("d").style.display = 'inline'
        document.getElementById("del").style.display = 'inline'
        document.getElementById("enviar").style.display = 'inline'
        
        teclaS3()
        
    }
    
    if (numero == 47 || numero == 48) {
        document.getElementById("o").style.display = 'inline'
        document.getElementById("m").style.display = 'inline'
        document.getElementById("del").style.display = 'inline'
        document.getElementById("enviar").style.display = 'inline'
        
        teclaS4()
    }
    
    if (numero == 31 || numero == 32 || numero == 33 || numero == 41) {
        document.getElementById("t").style.display = 'inline'
        document.getElementById("s").style.display = 'inline'
        document.getElementById("c").style.display = 'inline'
        document.getElementById("del").style.display = 'inline'
        document.getElementById("enviar").style.display = 'inline'
        
        teclaS5()
    }

    if (numero == 34 || numero == 35 || numero == 36 || numero == 43) {
        document.getElementById("e4").style.display = 'inline'
        document.getElementById("p2").style.display = 'inline'
        document.getElementById("a2").style.display = 'inline'
        document.getElementById("r").style.display = 'inline'
        document.getElementById("del").style.display = 'inline'
        document.getElementById("enviar").style.display = 'inline'
        
        teclaS6()
    }
    
    if (numero == 17 || numero == 26) {
        document.getElementById("o2").style.display = 'inline'
        document.getElementById("p").style.display = 'inline'
        document.getElementById("del").style.display = 'inline'
        document.getElementById("enviar").style.display = 'inline'
        
        teclaS7()
    }

    if (numero == 61 || numero == 70 || numero == 52) {
        document.getElementById("r4").style.display = 'inline'
        document.getElementById("a").style.display = 'inline'
        document.getElementById("y").style.display = 'inline'
        document.getElementById("del").style.display = 'inline'
        document.getElementById("enviar").style.display = 'inline'
        
        teclaS9()
    }
    if (numero == 50 || numero == 59 || numero == 68 || numero == 77) {
        document.getElementById("n2").style.display = 'inline'
        document.getElementById("i2").style.display = 'inline'
        document.getElementById("g").style.display = 'inline'
        document.getElementById("r3").style.display = 'inline'
        document.getElementById("del").style.display = 'inline'
        document.getElementById("enviar").style.display = 'inline'
        
        teclaS10()
    }
    if (numero == 84 || numero == 85 || numero == 86 || numero == 95 || numero == 104) {
        document.getElementById("w").style.display = 'inline'
        document.getElementById("h").style.display = 'inline'
        document.getElementById("i3").style.display = 'inline'
        document.getElementById("f2").style.display = 'inline'
        document.getElementById("y3").style.display = 'inline'
        document.getElementById("del").style.display = 'inline'
        document.getElementById("enviar").style.display = 'inline'
        
        teclaS11()
    }
    if (numero == 87 || numero == 88) {
        document.getElementById("e2").style.display = 'inline'
        document.getElementById("l").style.display = 'inline'
        document.getElementById("del").style.display = 'inline'
        document.getElementById("enviar").style.display = 'inline'
        
        teclaS12()
    }
}


/*
FUNCIONES TECLADO

*/

//FunciónSeccion1
function teclaS1(letra){
    
    if(letra != undefined){
        if(document.getElementById("2").textContent != "e" && document.getElementById("2").textContent != "v"){
            document.getElementById("2").textContent = `${letra}`
        }else{
            document.getElementById("11").textContent = `${letra}`
        } 
    }
    
    enviar()
}

//FunciónSeccion2
function teclaS2(letra){
    
    if(letra != undefined){
        if(document.getElementById("20").textContent != "t" && document.getElementById("20").textContent != "n" && document.getElementById("20").textContent != "e"){
            document.getElementById("20").textContent = `${letra}`
        }else{
            if(document.getElementById("29").textContent != "t" && document.getElementById("29").textContent != "n" && document.getElementById("29").textContent != "e"){
                document.getElementById("29").textContent = `${letra}`
            }else{
                if(document.getElementById("30").textContent != "t" && document.getElementById("30").textContent != "n" && document.getElementById("30").textContent != "e"){
                    document.getElementById("30").textContent = `${letra}`
                }else{
                    document.getElementById("38").textContent = `${letra}`
                }
            }
        } 
    }
    
    enviar()
}

//FunciónSeccion3
function teclaS3(letra){
    
    if(letra != undefined){


        (document.getElementById("37").textContent != "i" && document.getElementById("37").textContent != "d")?  document.getElementById("37").textContent = `${letra}` : document.getElementById("46").textContent = `${letra}`
        
    }
    
    enviar()
}
//FunciónSeccion4
function teclaS4(letra){
    
    if(letra != undefined){

        (document.getElementById("47").textContent != "o" && document.getElementById("47").textContent != "m")? document.getElementById("47").textContent = `${letra}` : document.getElementById("48").textContent = `${letra}`
   
    }
    
    enviar()
}

//FunciónSeccion5
function teclaS5(letra){
    
    if(letra != undefined){
        if(document.getElementById("31").textContent != "t" && document.getElementById("31").textContent != "s" && document.getElementById("31").textContent != "c"){
            document.getElementById("31").textContent = `${letra}`
        }else{
            if(document.getElementById("32").textContent != "t" && document.getElementById("32").textContent != "s" && document.getElementById("32").textContent != "c"){
                document.getElementById("32").textContent = `${letra}`
            }else{
                if(document.getElementById("33").textContent != "t" && document.getElementById("33").textContent != "s" && document.getElementById("33").textContent != "c"){
                    document.getElementById("33").textContent = `${letra}`
                }else{
                    document.getElementById("41").textContent = `${letra}`
                }
            }
        } 
    }
    
    enviar()
}

//FunciónSeccion6
function teclaS6(letra){
    
    if(letra != undefined){
        if(document.getElementById("34").textContent != "a" && document.getElementById("34").textContent != "p" && document.getElementById("34").textContent != "e" && document.getElementById("34").textContent != "r"){
            document.getElementById("34").textContent = `${letra}`
        }else{
            if(document.getElementById("35").textContent != "a" && document.getElementById("35").textContent != "p" && document.getElementById("35").textContent != "e" && document.getElementById("34").textContent != "r"){
                document.getElementById("35").textContent = `${letra}`
            }else{
                if(document.getElementById("36").textContent != "a" && document.getElementById("36").textContent != "p" && document.getElementById("36").textContent != "e" && document.getElementById("34").textContent != "r"){
                    document.getElementById("36").textContent = `${letra}`
                }else{
                    document.getElementById("43").textContent = `${letra}`
                }
            }
        } 
    }
    
    enviar()
}

//FunciónSeccion7
function teclaS7(letra){
    
    if(letra != undefined){

        (document.getElementById("17").textContent != "o" && document.getElementById("17").textContent != "p")?  document.getElementById("17").textContent = `${letra}` : document.getElementById("26").textContent = `${letra}`
        
    }
    
    enviar()
}

//FunciónSeccion9
function teclaS9(letra){
    
    if(letra != undefined){
        if(document.getElementById("52").textContent != "a" && document.getElementById("52").textContent != "y" && document.getElementById("52").textContent != "r"){
            document.getElementById("52").textContent = `${letra}`
        }else{
            if(document.getElementById("61").textContent != "a" && document.getElementById("61").textContent != "y" && document.getElementById("61").textContent != "r"){
                document.getElementById("61").textContent = `${letra}`
            }else{
                document.getElementById("70").textContent = `${letra}`
            } 
        } 
    }
    
    enviar()
}

//FunciónSeccion10
function teclaS10(letra){
    
    if(letra != undefined){
        if(document.getElementById("50").textContent != "n" && document.getElementById("50").textContent != "i" && document.getElementById("50").textContent != "g" && document.getElementById("50").textContent != "r"){
            document.getElementById("50").textContent = `${letra}`
        }else{
            if(document.getElementById("59").textContent != "n" && document.getElementById("59").textContent != "i" && document.getElementById("59").textContent != "g" && document.getElementById("59").textContent != "r"){
                document.getElementById("59").textContent = `${letra}`
            }else{
                if(document.getElementById("68").textContent != "n" && document.getElementById("68").textContent != "i" && document.getElementById("68").textContent != "g" && document.getElementById("68").textContent != "r"){
                    document.getElementById("68").textContent = `${letra}`
                }else{
                    document.getElementById("77").textContent = `${letra}`
                }
            }
        } 
    }
    
    enviar()
}

//FunciónSeccion11
function teclaS11(letra){
    
    if(letra != undefined){
        if(document.getElementById("84").textContent != "w" && document.getElementById("84").textContent != "i" && document.getElementById("84").textContent != "h" && document.getElementById("84").textContent != "f" && document.getElementById("84").textContent != "y"){
            document.getElementById("84").textContent = `${letra}`
        }else{
            if(document.getElementById("85").textContent != "w" && document.getElementById("85").textContent != "i" && document.getElementById("85").textContent != "h" && document.getElementById("85").textContent != "f" && document.getElementById("85").textContent != "y"){
                document.getElementById("85").textContent = `${letra}`
            }else{
                if(document.getElementById("86").textContent != "w" && document.getElementById("86").textContent != "i" && document.getElementById("86").textContent != "h" && document.getElementById("86").textContent != "f" && document.getElementById("86").textContent != "y"){
                    document.getElementById("86").textContent = `${letra}`
                }else{95
                    if(document.getElementById("95").textContent != "w" && document.getElementById("95").textContent != "i" && document.getElementById("95").textContent != "h" && document.getElementById("95").textContent != "f" && document.getElementById("95").textContent != "y"){
                        document.getElementById("95").textContent = `${letra}`
                    }else{
                        document.getElementById("104").textContent = `${letra}`
                    }
                }
            }95
        } 
    }86
    
    enviar()
}

//FunciónSeccion9
function teclaS12(letra){
    
    if(letra != undefined){
        (document.getElementById("87").textContent != "l" && document.getElementById("87").textContent != "e")? document.getElementById("87").textContent = `${letra}` : document.getElementById("88").textContent = `${letra}`
    }
    
    enviar()
}
function enviar(tecla)
{
    let ganar = 0
    if(tecla == "enviar"){
        document.getElementById("r4").style.display = 'none'
        document.getElementById("w").style.display = 'none'
        document.getElementById("h").style.display = 'none'
        document.getElementById("i3").style.display = 'none'
        document.getElementById("f2").style.display = 'none'
        document.getElementById("y3").style.display = 'none'
        document.getElementById("n2").style.display = 'none'
        document.getElementById("i2").style.display = 'none'
        document.getElementById("g").style.display = 'none'
        document.getElementById("r3").style.display = 'none'
        document.getElementById("e4").style.display = 'none'
        document.getElementById("p2").style.display = 'none'
        document.getElementById("a2").style.display = 'none'
        document.getElementById("r").style.display = 'none'
        document.getElementById("n").style.display = 'none'
        document.getElementById("t3").style.display = 'none'
        document.getElementById("e3").style.display = 'none'
        document.getElementById("t").style.display = 'none'
        document.getElementById("s").style.display = 'none'
        document.getElementById("c").style.display = 'none'
        document.getElementById("e2").style.display = 'none'
        document.getElementById("l").style.display = 'none'
        document.getElementById("f").style.display = 'none'
        document.getElementById("y2").style.display = 'none'
        document.getElementById("a").style.display = 'none'
        document.getElementById("y").style.display = 'none'
        document.getElementById("o2").style.display = 'none'
        document.getElementById("p").style.display = 'none'
        document.getElementById("o").style.display = 'none'
        document.getElementById("m").style.display = 'none'
        document.getElementById("e").style.display = 'none'
        document.getElementById("v").style.display = 'none'
        document.getElementById("i").style.display = 'none'
        document.getElementById("d").style.display = 'none'
        document.getElementById("del").style.display = 'none'
        document.getElementById("enviar").style.display = 'none'
        ganar = ganar + validarRespuesta1()
        ganar = ganar + validarRespuesta2()
        ganar = ganar + validarRespuesta3()
        ganar = ganar + validarRespuesta4()
        ganar = ganar + validarRespuesta5()
        ganar = ganar + validarRespuesta6()
        ganar = ganar + validarRespuesta7()
        ganar = ganar + validarRespuesta8()
        ganar = ganar + validarRespuesta9()
        console.log(ganar)
        if(ganar == 9){
            Swal.fire(
                '¡Felicidades!',
                '¡Ganaste!',
                'success'
            )
        }
    }
}

/*

    Validar Respuestas

*/

//ValidarRespuesta1
function validarRespuesta1(){
    let valor = 0
    let c1 = document.getElementById("37").textContent
    let c2 = document.getElementById("46").textContent
    let b = c1 + c2

   
    if (b == "id"){
        document.getElementById("37").style.backgroundColor = "green"
        document.getElementById("46").style.backgroundColor = "green"
        valor = 1
        return valor
    }else{
        valor = 0 
        return valor
    }
    
}

//ValidarRespuesta2
function validarRespuesta2(){
    let valor = 0
    let c1 = document.getElementById("46").textContent
    let c2 = document.getElementById("47").textContent
    let c3 = document.getElementById("48").textContent
    let p = c1 + c2 +c3
    if (p == "dom"){
        document.getElementById("46").style.backgroundColor = "green"
        document.getElementById("47").style.backgroundColor = "green"
        document.getElementById("48").style.backgroundColor = "green"
        valor = 1
        return valor
    }else{
        valor = 0 
        return valor
    }
    
}

//ValidarRespuesta3
function validarRespuesta3(){
    let valor = 0
    let c1 = document.getElementById("37").textContent
    let c2 = document.getElementById("38").textContent
    let b = c1 + c2
    if (b == "it"){
        document.getElementById("37").style.backgroundColor = "green"
        document.getElementById("38").style.backgroundColor = "green"
        valor = 1
        return valor
    }else{
        valor = 0 
        return valor
    }
    
}

//ValidarRespuesta4
function validarRespuesta4(){
    let valor = 0
    let c1 = document.getElementById("2").textContent
    let c2 = document.getElementById("11").textContent
    let c3 = document.getElementById("20").textContent
    let c4 = document.getElementById("29").textContent
    let c5 = document.getElementById("38").textContent
    let c6 = document.getElementById("47").textContent
    let p = c1 + c2 +c3 + c4 + c5 + c6
    console.log(p)
    if (p == "evento"){
        document.getElementById("2").style.backgroundColor = "green"
        c2 = document.getElementById("11").style.backgroundColor = "green"
        c3 = document.getElementById("20").style.backgroundColor = "green"
        c4 = document.getElementById("29").style.backgroundColor = "green"
        c5 = document.getElementById("38").style.backgroundColor = "green"
        c6 = document.getElementById("47").style.backgroundColor = "green"
        valor = 1
        return valor
    }else{
        valor = 0 
        return valor
    }
    
}

//ValidarRespuesta5
function validarRespuesta5(){
    let valor = 0
    let c1 = document.getElementById("29").textContent
    let c2 = document.getElementById("30").textContent
    let c3 = document.getElementById("31").textContent
    let c4 = document.getElementById("32").textContent
    let c5 = document.getElementById("33").textContent
    let c6 = document.getElementById("34").textContent
    let c7 = document.getElementById("35").textContent
    let c8 = document.getElementById("36").textContent
    let p = c1 + c2 +c3 + c4 + c5 + c6 + c7 + c8
    console.log(p)
    if (p == "netscape"){
        document.getElementById("29").style.backgroundColor = "green"
        document.getElementById("30").style.backgroundColor = "green"
        document.getElementById("31").style.backgroundColor = "green"
        document.getElementById("32").style.backgroundColor = "green"
        document.getElementById("33").style.backgroundColor = "green"
        document.getElementById("34").style.backgroundColor = "green"
        document.getElementById("35").style.backgroundColor = "green"
        document.getElementById("36").style.backgroundColor = "green"
        valor = 1
        return valor
    }else{
        valor = 0 
        return valor
    }
    
}

//ValidarRespuesta6
function validarRespuesta6(){
    let valor = 0
    let c1 = document.getElementById("34").textContent
    let c2 = document.getElementById("43").textContent
    let c3 = document.getElementById("52").textContent
    let c4 = document.getElementById("61").textContent
    let c5 = document.getElementById("70").textContent
    
    let p = c1 + c2 +c3 + c4 + c5

    console.log(p)
    if (p == "array"){
        document.getElementById("34").style.backgroundColor = "green"
        document.getElementById("43").style.backgroundColor = "green"
        document.getElementById("52").style.backgroundColor = "green"
        document.getElementById("61").style.backgroundColor = "green"
        document.getElementById("70").style.backgroundColor = "green"
        valor = 1
        return valor
    }else{
        valor = 0 
        return valor
    }
    
}

//ValidarRespuesta7
function validarRespuesta7(){
    let valor = 0
    let c1 = document.getElementById("17").textContent
    let c2 = document.getElementById("26").textContent
    let c3 = document.getElementById("35").textContent
    let p = c1 + c2 +c3
    if (p == "pop"){
        document.getElementById("17").style.backgroundColor = "green"
        document.getElementById("26").style.backgroundColor = "green"
        document.getElementById("35").style.backgroundColor = "green"
        valor = 1
        return valor
    }else{
        valor = 0 
        return valor
    }
    
}

//ValidarRespuesta8
function validarRespuesta8(){
    let valor = 0
    let c1 = document.getElementById("32").textContent
    let c2 = document.getElementById("41").textContent
    let c3 = document.getElementById("50").textContent
    let c4 = document.getElementById("59").textContent
    let c5 = document.getElementById("68").textContent
    let c6 = document.getElementById("77").textContent
    let c7 = document.getElementById("86").textContent
    let c8 = document.getElementById("95").textContent
    let c9 = document.getElementById("104").textContent
    let p = c1 + c2 + c3 + c4 + c5 + c6 + c7 + c8 + c9
    if (p == "stringify"){
        document.getElementById("32").style.backgroundColor = "green"
        document.getElementById("41").style.backgroundColor = "green"
        document.getElementById("50").style.backgroundColor = "green"
        document.getElementById("59").style.backgroundColor = "green"
        document.getElementById("68").style.backgroundColor = "green"
        document.getElementById("77").style.backgroundColor = "green"
        document.getElementById("86").style.backgroundColor = "green"
        document.getElementById("95").style.backgroundColor = "green"
        document.getElementById("104").style.backgroundColor = "green"
        valor = 1
        return valor
    }else{
        valor = 0 
        return valor
    }
    
}

//ValidarRespuesta9
function validarRespuesta9(){
    let valor = 0
    let c1 = document.getElementById("84").textContent
    let c2 = document.getElementById("85").textContent
    let c3 = document.getElementById("86").textContent
    let c4 = document.getElementById("87").textContent
    let c5 = document.getElementById("88").textContent
    
    let p = c1 + c2 +c3 + c4 + c5

    console.log(p)
    if (p == "while"){
        document.getElementById("84").style.backgroundColor = "green"
        document.getElementById("85").style.backgroundColor = "green"
        document.getElementById("86").style.backgroundColor = "green"
        document.getElementById("87").style.backgroundColor = "green"
        document.getElementById("88").style.backgroundColor = "green"
        valor = 1
        return valor
    }else{
        valor = 0 
        return valor
    }
    
}