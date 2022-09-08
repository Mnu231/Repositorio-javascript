
/*

    LISTA DE JUGADORES

*/




//Objetos
const jugador1 = new jugador("ricky"     , 1800 )
const jugador2 = new jugador("Martin"    , 1600 )
const jugador3 = new jugador("Chayane" , 1300)
const jugador4 = new jugador("Luis" , 1200 )
const jugador5 = new jugador("Miguel" , 800)


//ARRAY de palabras
const jugadores = [] 
jugadores.push(jugador1)
jugadores.push(jugador2)
jugadores.push(jugador3)
jugadores.push(jugador4)
jugadores.push(jugador5)

//local Storage
localStorage.setItem('jugadoresJson', JSON.stringify([jugadores]))



//Variables
let ContadorPistas = 3;
let i;
let respuestaUser
let exit = 0
let seleccion 
let palabraActual = []

//Codigo



/*

    CRONÓMETRO

*/

 let tiempoRef = Date.now()
 let acumulado = 0
 let cronometrar = true
 setInterval(() => {
    let tiempo = document.getElementById("tiempo")
    if(cronometrar){
        acumulado += Date.now() - tiempoRef
    }
    tiempoRef = Date.now()
    tiempo.innerHTML = formatearMS(acumulado) 
 }, 1000/60 )

 function formatearMS(tiempo_ms){
    let MS = tiempo_ms % 1000

    let St = Math.floor(((tiempo_ms - MS) / 1000))

    let S = St % 60
    let M = Math.floor((St / 60) % 60)
    let H = Math.floor((St / 60/60))
    Number.prototype.ceros = function(n){
        return (this+"").padStart(n,0)
    }
    return H.ceros(2) + ":" + M.ceros(2) + ":" + S.ceros(2) 
 }

/*

 Clima

*/ 
const API_KEY = "c577dd7021ff563fb4f3ed2a24f3bf8b";
const divClima = document.getElementById("clima")
fetch(`http://api.openweathermap.org/geo/1.0/direct?q=BuenosAires,CABA,arg&limit=1&appid=${API_KEY}`)
.then(response => response.json())
.then(data => {
    const {lat , lon , name : nombre , state : provincia , country : pais} = data[0]
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=sp&units=metric&appid=${API_KEY}`)
    .then(response => response.json())
    .then(({weather , main}) =>{
        console.log(weather, main)

        divClima.innerHTML = `
        <div>
        <img src="https://img.icons8.com/office/40/000000/windy-weather--v1.png"/>
        <h2>${main.temp}º</h2>
        <h3>Buenos Aires</h3>
        <p>Sensación Termica: ${main.feels_like}º</p>
        <p>Humedad: ${main.humidity}%</p>
        </div>
        
        `
    })
    })





/*

    Tablero
     
*/

function despejar(){
    for (let i = 1; i < 9; i++) {
        document.getElementById(`pista${i}`).style.display = "none"
    }
    
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
        document.getElementById("del1").style.display = 'none'
        document.getElementById("del2").style.display = 'none'
        document.getElementById("del3").style.display = 'none'
        document.getElementById("del4").style.display = 'none'
        document.getElementById("del5").style.display = 'none'
        document.getElementById("del6").style.display = 'none'
        document.getElementById("del7").style.display = 'none'
        document.getElementById("del9").style.display = 'none'
        document.getElementById("del10").style.display = 'none'
        document.getElementById("del11").style.display = 'none'
        document.getElementById("del12").style.display = 'none'
        document.getElementById("enviar").style.display = 'none'
}

function cuadrado(numero){
    
    if (numero == 2 || numero == 11) {
        despejar()
        document.getElementById("e").style.display = 'inline'
        document.getElementById("v").style.display = 'inline'
        document.getElementById("del1").style.display = 'inline'
        document.getElementById("enviar").style.display = 'inline'
        document.getElementById("pista1").style.display = 'inline' 
        teclaS1()
    }

    if (numero == 20 || numero == 29 || numero == 30 || numero == 38) {
        despejar()
        document.getElementById("n").style.display = 'inline'
        document.getElementById("t3").style.display = 'inline'
        document.getElementById("e3").style.display = 'inline'
        document.getElementById("del2").style.display = 'inline'
        document.getElementById("enviar").style.display = 'inline'
        document.getElementById("pista2").style.display = 'inline'
        teclaS2()
    }

    if (numero == 37 || numero == 46) {
        despejar()
        document.getElementById("i").style.display = 'inline'
        document.getElementById("d").style.display = 'inline'
        document.getElementById("del3").style.display = 'inline'
        document.getElementById("enviar").style.display = 'inline'
        document.getElementById("pista3").style.display = 'inline'
        teclaS3()
        
    }
    
    if (numero == 47 || numero == 48) {
        despejar()
        document.getElementById("o").style.display = 'inline'
        document.getElementById("m").style.display = 'inline'
        document.getElementById("del4").style.display = 'inline'
        document.getElementById("enviar").style.display = 'inline'
        document.getElementById("pista4").style.display = 'inline'
        teclaS4()
    }
    
    if (numero == 31 || numero == 32 || numero == 33 || numero == 41) {
        despejar()
        document.getElementById("t").style.display = 'inline'
        document.getElementById("s").style.display = 'inline'
        document.getElementById("c").style.display = 'inline'
        document.getElementById("del5").style.display = 'inline'
        document.getElementById("enviar").style.display = 'inline'
        document.getElementById("pista2").style.display = 'inline'
        teclaS5()
    }

    if (numero == 34 || numero == 35 || numero == 36 || numero == 43) {
        despejar()
        document.getElementById("e4").style.display = 'inline'
        document.getElementById("p2").style.display = 'inline'
        document.getElementById("a2").style.display = 'inline'
        document.getElementById("r").style.display = 'inline'
        document.getElementById("del6").style.display = 'inline'
        document.getElementById("enviar").style.display = 'inline'
        document.getElementById("pista5").style.display = 'inline'
        teclaS6()
    }
    
    if (numero == 17 || numero == 26) {
        despejar()
        document.getElementById("o2").style.display = 'inline'
        document.getElementById("p").style.display = 'inline'
        document.getElementById("del7").style.display = 'inline'
        document.getElementById("enviar").style.display = 'inline'
        document.getElementById("pista6").style.display = 'inline'
        teclaS7()
    }

    if (numero == 61 || numero == 70 || numero == 52) {
        despejar()
        document.getElementById("r4").style.display = 'inline'
        document.getElementById("a").style.display = 'inline'
        document.getElementById("y").style.display = 'inline'
        document.getElementById("del9").style.display = 'inline'
        document.getElementById("enviar").style.display = 'inline'
        document.getElementById("pista5").style.display = 'inline'
        teclaS9()
    }
    if (numero == 50 || numero == 59 || numero == 68 || numero == 77) {
        despejar()
        document.getElementById("n2").style.display = 'inline'
        document.getElementById("i2").style.display = 'inline'
        document.getElementById("g").style.display = 'inline'
        document.getElementById("r3").style.display = 'inline'
        document.getElementById("del10").style.display = 'inline'
        document.getElementById("enviar").style.display = 'inline'
        document.getElementById("pista7").style.display = 'inline'
        teclaS10()
    }
    if (numero == 84 || numero == 85 || numero == 86 || numero == 95 || numero == 104) {
        despejar()
        document.getElementById("w").style.display = 'inline'
        document.getElementById("h").style.display = 'inline'
        document.getElementById("i3").style.display = 'inline'
        document.getElementById("f2").style.display = 'inline'
        document.getElementById("y3").style.display = 'inline'
        document.getElementById("del11").style.display = 'inline'
        document.getElementById("enviar").style.display = 'inline'
        document.getElementById("pista8").style.display = 'inline'
        teclaS11()
    }
    if (numero == 87 || numero == 88) {
        despejar()
        document.getElementById("e2").style.display = 'inline'
        document.getElementById("l").style.display = 'inline'
        document.getElementById("del12").style.display = 'inline'
        document.getElementById("enviar").style.display = 'inline'
        document.getElementById("pista8").style.display = 'inline'
        teclaS12()
    }
}


/*
FUNCIONES TECLADO

*/

//FunciónSeccion1
function teclaS1(letra){
    if(letra != undefined){

        if (letra != "del") {
            (document.getElementById("2").textContent != "e" && document.getElementById("2").textContent != "v")?  document.getElementById("2").textContent = `${letra}` : document.getElementById("11").textContent = `${letra}`  
        } else {
            if (document.getElementById("11").textContent == " " ) {
                document.getElementById("2").textContent = " "
            } else {
                document.getElementById("11").textContent = " "
            }
        }
        
    }
   
    
    enviar()
}

//FunciónSeccion2
function teclaS2(letra){
    
    if(letra != undefined){
        if (letra != "del") {
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
        }else{
            if(document.getElementById("38").textContent == " "){
                if(document.getElementById("30").textContent == " "){
                    if(document.getElementById("29").textContent == " "){
                        document.getElementById("20").textContent = " "
                    }else{
                        document.getElementById("29").textContent = " "
                    }
                }else{
                    document.getElementById("30").textContent = " "
                }
            }else{
                document.getElementById("38").textContent = " "
            }
        }
    }
    
    enviar()
}

//FunciónSeccion3
function teclaS3(letra){
    
    if(letra != undefined){

        if (letra != "del") {
            (document.getElementById("37").textContent != "i" && document.getElementById("37").textContent != "d")?  document.getElementById("37").textContent = `${letra}` : document.getElementById("46").textContent = `${letra}`  
        } else {
            if (document.getElementById("46").textContent == " " ) {
                document.getElementById("37").textContent = " "
            } else {
                document.getElementById("46").textContent = " "
            }
        }
        
    }
    
    enviar()
}
//FunciónSeccion4
function teclaS4(letra){
    
    if(letra != undefined){

        if (letra != "del") {
            (document.getElementById("47").textContent != "o" && document.getElementById("47").textContent != "m")?  document.getElementById("47").textContent = `${letra}` : document.getElementById("48").textContent = `${letra}`  
        } else {
            if (document.getElementById("48").textContent == " " ) {
                document.getElementById("47").textContent = " "
            } else {
                document.getElementById("48").textContent = " "
            }
        }

    }
    
    enviar()
}

//FunciónSeccion5
function teclaS5(letra){
    
    if(letra != undefined){
        if (letra != "del") {
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
        } else {
            if(document.getElementById("41").textContent == " "){
                if(document.getElementById("33").textContent == " "){
                    if(document.getElementById("32").textContent == " "){
                        document.getElementById("31").textContent = " "
                    }else{
                        document.getElementById("32").textContent = " "
                    }
                }else{
                    document.getElementById("33").textContent = " "
                }
            }else{
                document.getElementById("41").textContent = " "
            }
        }
    }
    enviar()
}

//FunciónSeccion6
function teclaS6(letra){
    
    if(letra != undefined){
        if (letra != "del") {
            if(document.getElementById("34").textContent != "a" && document.getElementById("34").textContent != "p" && document.getElementById("34").textContent != "e" && document.getElementById("34").textContent != "r"){
                document.getElementById("34").textContent = `${letra}`
            }else{
                if(document.getElementById("35").textContent != "a" && document.getElementById("35").textContent != "p" && document.getElementById("35").textContent != "e" && document.getElementById("35").textContent != "r"){
                    document.getElementById("35").textContent = `${letra}`
                }else{
                    if(document.getElementById("36").textContent != "a" && document.getElementById("36").textContent != "p" && document.getElementById("36").textContent != "e" && document.getElementById("36").textContent != "r"){
                        document.getElementById("36").textContent = `${letra}`
                    }else{
                        document.getElementById("43").textContent = `${letra}`
                    }
                }
            }     
        } else {
            if(document.getElementById("43").textContent == " "){
                if(document.getElementById("36").textContent == " "){
                    if(document.getElementById("35").textContent == " "){
                        document.getElementById("34").textContent = " "
                    }else{
                        document.getElementById("35").textContent = " "
                    }
                }else{
                    document.getElementById("36").textContent = " "
                }
            }else{
                document.getElementById("43").textContent = " "
            }
        }
    }
    enviar()
}

//FunciónSeccion7
function teclaS7(letra){
    
    if(letra != undefined){
        if (letra != "del") {
            (document.getElementById("17").textContent != "o" && document.getElementById("17").textContent != "p")?  document.getElementById("17").textContent = `${letra}` : document.getElementById("26").textContent = `${letra}`
        } else {
            if (document.getElementById("26").textContent == " " ) {
                document.getElementById("17").textContent = " "
            } else {
                document.getElementById("26").textContent = " "
            }
        }
    }
    
    enviar()
}

//FunciónSeccion9
function teclaS9(letra){
    
    if(letra != undefined){
        if (letra != "del") {
            if(document.getElementById("52").textContent != "a" && document.getElementById("52").textContent != "y" && document.getElementById("52").textContent != "r"){
                document.getElementById("52").textContent = `${letra}`
            }else{
                if(document.getElementById("61").textContent != "a" && document.getElementById("61").textContent != "y" && document.getElementById("61").textContent != "r"){
                    document.getElementById("61").textContent = `${letra}`
                }else{
                    document.getElementById("70").textContent = `${letra}`
                } 
            } 
            
        } else {
            if(document.getElementById("70").textContent == " "){
                if(document.getElementById("61").textContent == " "){
                    document.getElementById("52").textContent = " "
                }else{
                    document.getElementById("61").textContent = " "
                }
            }else{
                document.getElementById("70").textContent = " "
            }
        }
    }
    
    enviar()
}

//FunciónSeccion10
function teclaS10(letra){
    
    if(letra != undefined){
        if (letra != "del") {
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
        } else {
            if(document.getElementById("77").textContent == " "){
                if(document.getElementById("68").textContent == " "){
                    if(document.getElementById("59").textContent == " "){
                        document.getElementById("50").textContent = " "
                    }else{
                        document.getElementById("59").textContent = " "
                    }
                }else{
                    document.getElementById("68").textContent = " "
                }
            }else{
                document.getElementById("77").textContent = " "
            }
        }
        }
    enviar()
}

//FunciónSeccion11
function teclaS11(letra){
    
    if(letra != undefined){
        if (letra != "del") {
            if(document.getElementById("84").textContent != "w" && document.getElementById("84").textContent != "i" && document.getElementById("84").textContent != "h" && document.getElementById("84").textContent != "f" && document.getElementById("84").textContent != "y"){
                document.getElementById("84").textContent = `${letra}`
            }else{
                if(document.getElementById("85").textContent != "w" && document.getElementById("85").textContent != "i" && document.getElementById("85").textContent != "h" && document.getElementById("85").textContent != "f" && document.getElementById("85").textContent != "y"){
                    document.getElementById("85").textContent = `${letra}`
                }else{
                    if(document.getElementById("86").textContent != "w" && document.getElementById("86").textContent != "i" && document.getElementById("86").textContent != "h" && document.getElementById("86").textContent != "f" && document.getElementById("86").textContent != "y"){
                        document.getElementById("86").textContent = `${letra}`
                    }else{
                        if(document.getElementById("95").textContent != "w" && document.getElementById("95").textContent != "i" && document.getElementById("95").textContent != "h" && document.getElementById("95").textContent != "f" && document.getElementById("95").textContent != "y"){
                            document.getElementById("95").textContent = `${letra}`
                        }else{
                            document.getElementById("104").textContent = `${letra}`
                        }
                    }
                }
            } 
        } else {
            if(document.getElementById("104").textContent == " "){
                if(document.getElementById("95").textContent == " "){
                    if(document.getElementById("86").textContent == " "){
                        if(document.getElementById("85").textContent == " "){
                            document.getElementById("84").textContent = " "
                        }else{
                            document.getElementById("85").textContent = " "
                        }
                    }else{
                        document.getElementById("86").textContent = " "
                    }
                }else{
                    document.getElementById("95").textContent = " "
                }
            }else{
                document.getElementById("104").textContent = " "
            }
        }
        }

    enviar()
}

//FunciónSeccion12
function teclaS12(letra){
    
    if(letra != undefined){
        if (letra != "del") {
            (document.getElementById("87").textContent != "l" && document.getElementById("87").textContent != "e")? document.getElementById("87").textContent = `${letra}` : document.getElementById("88").textContent = `${letra}`
            
        } else {
            if (document.getElementById("88").textContent == " " ) {
                document.getElementById("87").textContent = " "
            } else {
                document.getElementById("88").textContent = " "
            }
        }
    }
    
    enviar()
}
function enviar(tecla)
{
    let ganar = 0
    if(tecla == "enviar"){
        despejar()
        ganar = ganar + validarRespuesta1()
        ganar = ganar + validarRespuesta2()
        ganar = ganar + validarRespuesta3()
        ganar = ganar + validarRespuesta4()
        ganar = ganar + validarRespuesta5()
        ganar = ganar + validarRespuesta6()
        ganar = ganar + validarRespuesta7()
        ganar = ganar + validarRespuesta8()
        ganar = ganar + validarRespuesta9()
        
        if(ganar == 9){
            document.getElementById("contenedorPosiciones").style.display = 'inline'
            const array= JSON.parse(localStorage.getItem('jugadoresJson'))
            let puntosUser = 1500
            console.log(array[0])
            const divTabla = document.getElementById("contenedorPosiciones")
            divTabla.innerHTML = `
            <div>
            <h2>TOP 5</h2>
            <p>Nombre : Puntaje</p>
            <p>${array[0][0].nombre} : ${array[0][0].puntaje}</p>
            <p>${array[0][1].nombre} : ${array[0][1].puntaje}</p>
            <p>${array[0][2].nombre} : ${array[0][2].puntaje}</p>
            <p>${array[0][3].nombre} : ${array[0][3].puntaje}</p>
            <p>${array[0][4].nombre} : ${array[0][4].puntaje}</p>

            </div>       
        `
            cronometrar = false
            Swal.fire(
                `Puntos = ${puntosUser}`,
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
    let p = c1 + c2 + c3 + c4 + c5 + c6 + c7 + c8
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

/*

    FUNCIONES PISTAS

*/

//Pista2
function pista1(){
    document.getElementById("parrafoPista").textContent = "Manera en la que javascript controla las acciones de un usuario"
    for (let i = 2; i <= 47; i+= 9){
        if (document.getElementById(i).style.backgroundColor == "white") {
            document.getElementById(i).style.backgroundColor = "yellow"    
        } 
        
    }
    setTimeout( () =>{
        document.getElementById("parrafoPista").textContent = " "
    for (let i = 2; i <= 47; i+= 9){
        if (document.getElementById(i).style.backgroundColor == "yellow") {
            document.getElementById(i).style.backgroundColor = "white"    
        }
        document.getElementById("pista1").style.display = 'none'    
    }
    }, 10000)
}

function pista2(){
    document.getElementById("parrafoPista").textContent = "Empresa creadora de Javascript"
    for (let i = 29; i <= 36; i++){
        if (document.getElementById(i).style.backgroundColor == "white") {
            document.getElementById(i).style.backgroundColor = "yellow"    
        } 
        
    }
    setTimeout( () =>{
        document.getElementById("parrafoPista").textContent = " "
    for (let i = 29; i <= 36; i++){
        if (document.getElementById(i).style.backgroundColor == "yellow") {
            document.getElementById(i).style.backgroundColor = "white"    
        }
        document.getElementById("pista2").style.display = 'none'    
    }
    }, 10000)
}

function pista3(){
    document.getElementById("parrafoPista").textContent = "Un ** de usuario es un identificador único de cliente mediante el cual un anunciante elige identificar a un usuario que visita su sitio web"
    for (let i = 37; i <= 46; i+= 9){
        if (document.getElementById(i).style.backgroundColor == "white") {
            document.getElementById(i).style.backgroundColor = "yellow"    
        } 
        
    }
    setTimeout( () =>{
        document.getElementById("parrafoPista").textContent = " "
    for (let i = 37; i <= 46; i+= 9){
        if (document.getElementById(i).style.backgroundColor == "yellow") {
            document.getElementById(i).style.backgroundColor = "white"    
        }
        document.getElementById("pista3").style.display = 'none'    
    }
    }, 10000)
}

function pista4(){
    document.getElementById("parrafoPista").textContent = "Estructura de objetos que representa una página HTML"
    for (let i = 46; i <= 48; i++){
        if (document.getElementById(i).style.backgroundColor == "white") {
            document.getElementById(i).style.backgroundColor = "yellow"    
        } 
        
    }
    setTimeout( () =>{
        document.getElementById("parrafoPista").textContent = " "
    for (let i = 46; i <= 48; i++){
        if (document.getElementById(i).style.backgroundColor == "yellow") {
            document.getElementById(i).style.backgroundColor = "white"    
        }
        document.getElementById("pista4").style.display = 'none'    
    }
    }, 10000)
}

function pista5(){
    document.getElementById("parrafoPista").textContent = "Tipo de dato que sirve para almacenar valores en forma de línea"
    for (let i = 34; i <= 70; i+= 9){
        if (document.getElementById(i).style.backgroundColor == "white") {
            document.getElementById(i).style.backgroundColor = "yellow"    
        } 
        
    }
    setTimeout( () =>{
        document.getElementById("parrafoPista").textContent = " "
    for (let i = 34; i <= 70; i+= 9){
        if (document.getElementById(i).style.backgroundColor == "yellow") {
            document.getElementById(i).style.backgroundColor = "white"    
        }
        document.getElementById("pista5").style.display = 'none'    
    }
    }, 10000)
}

function pista6(){
    document.getElementById("parrafoPista").textContent = "Metodo que aparta el ultimo elemento de un array"
    for (let i = 17; i <= 35; i+= 9){
        if (document.getElementById(i).style.backgroundColor == "white") {
            document.getElementById(i).style.backgroundColor = "yellow"    
        } 
        
    }
    setTimeout( () =>{
        document.getElementById("parrafoPista").textContent = " "
    for (let i = 17; i <= 35; i+= 9){
        if (document.getElementById(i).style.backgroundColor == "yellow") {
            document.getElementById(i).style.backgroundColor = "white"    
        }
        document.getElementById("pista6").style.display = 'none'    
    }
    }, 10000)
}

function pista7(){
    document.getElementById("parrafoPista").textContent = "Método que recibe un objeto y devuelve un JSON"
    for (let i = 32; i <= 104; i+= 9){
        if (document.getElementById(i).style.backgroundColor == "white") {
            document.getElementById(i).style.backgroundColor = "yellow"    
        } 
        
    }
    setTimeout( () =>{
        document.getElementById("parrafoPista").textContent = " "
    for (let i = 32; i <= 104; i+= 9){
        if (document.getElementById(i).style.backgroundColor == "yellow") {
            document.getElementById(i).style.backgroundColor = "white"    
        }
        document.getElementById("pista7").style.display = 'none'    
    }
    }, 10000)
}

function pista8(){
    document.getElementById("parrafoPista").textContent = "Ciclo que puede ejecutarse 0 o más veces dependiendo de la condición"
    for (let i = 84; i <= 88; i++){
        if (document.getElementById(i).style.backgroundColor == "white") {
            document.getElementById(i).style.backgroundColor = "yellow"    
        } 
        
    }
    setTimeout( () =>{
        document.getElementById("parrafoPista").textContent = " "
    for (let i = 84; i <= 88; i++){
        if (document.getElementById(i).style.backgroundColor == "yellow") {
            document.getElementById(i).style.backgroundColor = "white"    
        }
        document.getElementById("pista8").style.display = 'none'    
    }
    }, 10000)
}