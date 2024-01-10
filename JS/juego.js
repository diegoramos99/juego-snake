const tablero = document.getElementById("tablero");
const boton = document.getElementById("btn-iniciar")
const bestScore=document.querySelector("#bestScore")
var arra = []
var arrb = [];
var arrc = [];
var arrd = [];
var arre = [];
var arrf = [];
var arrg = [];
var arrh = [];
var arri = [];
var arrj = [];
var arrk = [];
var arrl = [];
var arrm = [];
var arrn = [];
var arro = [];
var arrp = [];
var arrq = [];
var arrr = [];
var arrs = [];
var arrt = [];
var matriz = [];
// preparamos el tablero
function crearArr() {
    let a = "a", b = "b", c = "c", d = "d", e = "e", f = "f", g = "g", h = "h", I = "i", j = "j", k = "k", l = "l", m = "m", n = "n", o = "o", p = "p", q = "q", r = "r", s = "s", t = "t"
    for (let i = 0; i < 20; i++) {
        arra.push(a + i);
        arrb.push(b + i);
        arrc.push(c + i);
        arrd.push(d + i);
        arre.push(e + i);
        arrf.push(f + i);
        arrg.push(g + i);
        arrh.push(h + i);
        arri.push(I + i);
        arrj.push(j + i);
        arrk.push(k + i);
        arrl.push(l + i);
        arrm.push(m + i);
        arrn.push(n + i);
        arro.push(o + i);
        arrp.push(p + i);
        arrq.push(q + i);
        arrr.push(r + i);
        arrs.push(s + i);
        arrt.push(t + i);


    }
    matriz = [
        arra, arrb,
        arrc, arrd,
        arre, arrf,
        arrg, arrh,
        arri, arrj,
        arrk, arrl,
        arrm, arrn,
        arro, arrp,
        arrq, arrr,
        arrs, arrt
    ];
}
crearArr();
var arr = 0;
var indice = 0;
// creamos una id para cada asilla
function id_casillas() {
    if (indice >= 20) {
        indice = 0;
        arr++;
    }
    var valor_de_cada_indice = matriz[arr][indice];
    indice++;
    return valor_de_cada_indice;
};

// creamos en el DOM el tablero con casillas y sus id correspondiente
boton.addEventListener('click', () => {
    var fila = 0;
    var contador_casillas = 0;
    var contador = 0
    var arrayGusano = []
    var nuevaposicion
    var score=0
    for (let i = 0; i < 400; i++) {
        var DIV = document.createElement('DIV');
        DIV.textContent = "";
        let IDCasilla = id_casillas()
        DIV.setAttribute('id', IDCasilla),

            DIV.classList.add("casilla");
        DIV.classList.add(IDCasilla);
        // DIV.textContent = DIV.getAttribute("id")

        tablero.insertAdjacentElement("beforeend", DIV);
    }
    const CASILLASPARED = document.querySelectorAll(".casilla")


    CASILLASPARED.forEach(casilla => {
        var clasesDelaCasilla = casilla.classList
        var arrayDeClasesDeLaCasilla = Array.from(clasesDelaCasilla)
        // console.log(arrayDeClasesDeLaCasilla);
        var letraCasilla = arrayDeClasesDeLaCasilla[1][0]
        var numeroCasilla = arrayDeClasesDeLaCasilla[1][1]
        var ultimos2numeros = arrayDeClasesDeLaCasilla[1].slice(-2)
        if (letraCasilla == "a" || letraCasilla == "t" || numeroCasilla == 0 || ultimos2numeros == 19) {
            casilla.classList.add("pared")
        }

    });





    // funcion para las demas casillas que vayan apareciendo durante el juego--------------------

    // ojeto del gusano--------------------------------------------------------------------------


    class FragmentoDeGusano {
        constructor(nombre, posicionActual, posicionAnterior) {
            this.nombre = nombre
            this.posicionActual = posicionActual
            this.posicionAnterior = posicionAnterior
            // this.posicionTrasAnterior=posicionTrasAnterior

        }
    }
    var fragmentoDegusano1 = new FragmentoDeGusano("fragmentoGusano1", matriz[5][(5)], matriz[5][(4)])
    var fragmentoDegusano2 = new FragmentoDeGusano("fragmentoGusano2", matriz[5][(4)], matriz[5][(3)])
    var fragmentoDegusano3 = new FragmentoDeGusano("fragmentoGusano3", matriz[5][(3)], matriz[5][(2)])
    arrayGusano.push(fragmentoDegusano1)
    arrayGusano.push(fragmentoDegusano2)
    arrayGusano.push(fragmentoDegusano3)



    for (let index = 0; index < arrayGusano.length; index++) {
        var idCabezaVibora = arrayGusano[index].posicionActual
        var cabezaViborita = document.querySelector("#" + idCabezaVibora)
        cabezaViborita.classList.add("marron")
    }
    contador_casillas += 5
    fila += 5




    function casillaAleatoriaDelJuego() {
        let numeroRandom1 = Math.round(Math.random() * 19)
        let numeroRandom2 = Math.round(Math.random() * 19)
        var casilla_aleatoria = document.getElementById(matriz[numeroRandom1][numeroRandom2])
        // en teoria evita que aparezca un punto rojo donde este el cuerpo de la lombriz
        for (let index = 0; index < arrayGusano.length; index++) {
            const element = arrayGusano[index].posicionActual;
            const cuerpoGusano = document.querySelector("#" + element)
            var letraCasillaAleatoria = casilla_aleatoria.getAttribute("id")[0]
            var numeroCasillaAleatoria=casilla_aleatoria.getAttribute("id").slice(-2)
            var numeroCasillaAleatoriaCero=casilla_aleatoria.getAttribute("id")[1]
            
           
            while (cuerpoGusano == casilla_aleatoria||letraCasillaAleatoria=="a"||letraCasillaAleatoria=="t"||numeroCasillaAleatoriaCero==0||numeroCasillaAleatoria==19) {
                numeroRandom1 = Math.round(Math.random() * 9)
                numeroRandom2 = Math.round(Math.random() * 9)
                casilla_aleatoria = document.getElementById(matriz[numeroRandom1][numeroRandom2])
                letraCasillaAleatoria = casilla_aleatoria.getAttribute("id")[0]
                numeroCasillaAleatoria=casilla_aleatoria.getAttribute("id").slice(-2)
                numeroCasillaAleatoriaCero=casilla_aleatoria.getAttribute("id")[1]
            }

        }
        setTimeout(() => {
            casilla_aleatoria.classList.add("rojo")
        }, 100)

        return casilla_aleatoria
    }


    var CasillaAleatoriaDelJuego = casillaAleatoriaDelJuego()


    function eliminarColor(arrayDeGusano) {
        var posicionDelGusano = arrayDeGusano[(arrayDeGusano.length - 1)].posicionAnterior
        var casillaAEliminar = document.querySelector("#" + posicionDelGusano)
        casillaAEliminar.classList.remove("marron")


    }
    // que el gusaon choque pierda la partida
    function queElGusanoCuandoChoquePierda() {
        let posicionActual=arrayGusano[0].posicionActual
        let arribaAbajo=posicionActual[0]
        let costadoDerecho=posicionActual.slice(-2)
        let costadoIzquierdp=posicionActual[1]
        if (arribaAbajo=="a"||arribaAbajo=="t"||costadoDerecho==19||costadoIzquierdp==0) {
            alert("perdiste,la serpiente choco!")
            location.reload()
           
        }
    }
    function queElGusanoPierdaSiTocaSuCuerpo() {
        let posicionActual=arrayGusano[0].posicionActual
        for (let index = 1; index < arrayGusano.length; index++) {
            const element = arrayGusano[index].posicionActual;
            if (posicionActual==element) {
                for (let index = 0; index < arrayGusano.length; index++) {
                    const element = arrayGusano[index];
                    arrayGusano.splice(index,1)
                    console.log("deberia borrarse el gusano y perder la partida");
                }
               
                
                location.reload()
                alert("perdiste,el gusano esta tocando alguna parte de su cuerpo")
               
                    
      

            }
        }
    }
    //funcion para que cada parte del gusano se mueva correctamente

    function queElCuerpoSeMuevaEnOrden(a, b) {
        arrayGusano[0].posicionActual = matriz[fila][(contador_casillas)]
        arrayGusano[0].posicionAnterior = matriz[fila + a][(contador_casillas + b)]
        var nuevaposicionGusanoPrincipal = arrayGusano[0].posicionActual
        cabezaViborita = document.querySelector("#" + nuevaposicionGusanoPrincipal)
        cabezaViborita.classList.add("marron")

        for (let index = 1; index < arrayGusano.length; index++) {
            arrayGusano[index].posicionAnterior = arrayGusano[index].posicionActual
            arrayGusano[index].posicionActual = arrayGusano[(index - 1)].posicionAnterior
            nuevaposicion = arrayGusano[index].posicionActual
            cabezaViborita = document.querySelector("#" + nuevaposicion)
            cabezaViborita.classList.add("marron")

        }



        eliminarColor(arrayGusano)

    }

    function laCabezaGusacnoTocaPuntoRojo() {
        var CabezaGusano = arrayGusano[0].posicionActual
        var cabezaGusanoPrincipal = document.querySelector("#" + CabezaGusano)
        if (cabezaGusanoPrincipal == CasillaAleatoriaDelJuego) {
            contador++
            CasillaAleatoriaDelJuego.classList.remove("rojo")
            CasillaAleatoriaDelJuego = casillaAleatoriaDelJuego()
            var posicionGusanoNuevo = arrayGusano[(arrayGusano.length - 1)].posicionAnterior
            var cuerpoGusano = new FragmentoDeGusano("fragmentoGusano" + contador, posicionGusanoNuevo, arrayGusano[(contador - 1)].posicionAnterior)
            arrayGusano.push(cuerpoGusano)
            var nuevaCasilla = document.querySelector("#" + posicionGusanoNuevo)
            nuevaCasilla.classList.add("marron")
            score+=100
            const SCORE=document.querySelector("#score")
            SCORE.textContent=score
        }

    }
    function cargarLosPuntajes() {
        var puntajeACtual=score
        const usuario=JSON.parse(localStorage.getItem("usuario"))

     
                if (score>usuario.bestScore) {
                    bestScore.textContent=score
                    usuario.bestScore=puntajeACtual
                    localStorage.setItem("usuario",JSON.stringify(usuario))
                }
            
    }


    function aumentarVelocidadDelGusano() {
        if (score>=4500) {
            return 50
        }else if (score>=4000) {
            return 100
        }else if(score>=3000){
            return 150
        }else if (score>=2000) {
            return 200
        }else if (score>=1000) {
            return 250
        }else{
            return 300
        }
            
        
    }
    
    // controles del gusano--------------------------------------------------------------



    document.addEventListener("keydown", (e) => {

        var teclaPresionada = e.key
        var setIntervalID
        var ultimaTeclaPresionada
        
        switch (teclaPresionada) {
            case 'ArrowRight':
                setIntervalID = setInterval(() => {
                    contador_casillas++
                    queElCuerpoSeMuevaEnOrden(0, -1)
                    laCabezaGusacnoTocaPuntoRojo()
                    queElGusanoCuandoChoquePierda()
                    cargarLosPuntajes()
                    document.addEventListener('keydown', (event) => {
             
                            if (event.key != 'ArrowRight') {
                                clearInterval(setIntervalID)
                            }
                          
                    })
                    queElGusanoPierdaSiTocaSuCuerpo()
                }, aumentarVelocidadDelGusano());


                break;
            case 'ArrowLeft':
                setIntervalID = setInterval(() => {
                    contador_casillas--
                    queElCuerpoSeMuevaEnOrden(0, 1)
                    laCabezaGusacnoTocaPuntoRojo()
                    queElGusanoCuandoChoquePierda()
                    queElGusanoPierdaSiTocaSuCuerpo()
                    cargarLosPuntajes()
                    document.addEventListener('keydown', (event) => {
                        // console.log("la tecla percionada en el DOM es: " + e.key);
                        if (event.key != 'ArrowLeft') {
                            clearInterval(setIntervalID)
                        }
                    })
                }, aumentarVelocidadDelGusano())

                break;
            case 'ArrowDown':
                setIntervalID = setInterval(() => {
                    fila++
                    queElCuerpoSeMuevaEnOrden(-1, 0)
                    laCabezaGusacnoTocaPuntoRojo()
                    queElGusanoCuandoChoquePierda()
                    queElGusanoPierdaSiTocaSuCuerpo()
                    cargarLosPuntajes()
                    document.addEventListener('keydown', (event) => {
                        // console.log("la tecla percionada en el DOM es: " + e.key);
                        if (event.key != 'ArrowDown') {
                            clearInterval(setIntervalID)
                        }
                    })
                }, aumentarVelocidadDelGusano());
                break;
            case 'ArrowUp':
                setIntervalID = setInterval(() => {
                    fila--
                    queElCuerpoSeMuevaEnOrden(1, 0)
                    laCabezaGusacnoTocaPuntoRojo()
                    queElGusanoCuandoChoquePierda()
                    queElGusanoPierdaSiTocaSuCuerpo()
                    cargarLosPuntajes()
                    document.addEventListener('keydown', (event) => {
                        if (event.key != 'ArrowUp') {
                            clearInterval(setIntervalID)
                        }
                    })
                }, aumentarVelocidadDelGusano());
                break;

            default:
                break;
        }


    })

})


const usuario=JSON.parse(localStorage.getItem("usuario"))
console.log(usuario);
bestScore.textContent=usuario.bestScore
// bestScore.textContent=usuario.bestScore

function cargarNombre() {
    const usuario=JSON.parse(localStorage.getItem("usuario"))
    const nombreUsuario=document.querySelector("#nombre")
    let nombre=usuario.usuario
    nombreUsuario.textContent=nombre.toUpperCase()
    console.log(usuario.usuario);
}
cargarNombre()













