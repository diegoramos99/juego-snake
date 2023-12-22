const input = document.getElementById("input");
const tablero = document.getElementById("tablero");
const boton=document.getElementById("btn-iniciar")

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
var matriz = [];
// preparamos el tablero
function crearArr() {
    let a = "a", b = "b", c = "c", d = "d", e = "e", f = "f", g = "g", h = "h", I = "i", j = "j";
    for (let i = 0; i < 10; i++) {
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
    }
    matriz = [
        arra, arrb,
        arrc, arrd,
        arre, arrf,
        arrg, arrh,
        arri, arrj
    ];
}
    crearArr();
var arr = 0;
var indice = 0;
    // creamos una id para cada asilla
function id_casillas() {
    if (indice >= 10) {
        indice = 0;
        arr++;
    }
    var valor_de_cada_indice = matriz[arr][indice];
    indice++;
    return valor_de_cada_indice;
};
// creamos en el DOM el tablero con casillas y sus id correspondiente
boton.addEventListener('click', ()=>{
    
    for (let i = 0; i < 100; i++) {
        var DIV = document.createElement('DIV');
        DIV.textContent = "";
        DIV.setAttribute('id', `${id_casillas()}`),
            DIV.classList.add("casilla");
        tablero.insertAdjacentElement("beforeend", DIV);
    }
    
    // creamos la casilla aleatoria apenas comenzamos el juego-------------------------------
    function primerCasillaAleatoriaDelJuego(){
        let numeroRandom1=Math.round(Math.random()*9)
        let numeroRandom2=Math.round(Math.random()*9)
        const casilla_aleatoria=document.getElementById(matriz[numeroRandom1][numeroRandom2])
        setTimeout(() => {
            casilla_aleatoria.classList.add("rojo")
           console.log(`la casilla aleatoria es: ${casilla_aleatoria.id}`)}, 500)
           return casilla_aleatoria
    }

    // funcion para las demas casillas que vayan apareciendo durante el juego--------------------
    
    function casillaAleatoriaDelJuego(){
        let numeroRandom1=Math.round(Math.random()*9)
        let numeroRandom2=Math.round(Math.random()*9)
        const casilla_aleatoria=document.getElementById(matriz[numeroRandom1][numeroRandom2])
        setTimeout(() => {
            casilla_aleatoria.classList.add("rojo")
            console.log(`la casilla aleatoria es: ${casilla_aleatoria.id}`)}, 500)
            return casilla_aleatoria
        }
        var CasillaAleatoriaDelJuego=casillaAleatoriaDelJuego()
    
    var contador_casillas = 0;
    var fila = 0;
            // ojeto del gusano--------------------------------------------------------------------------


    var Gusano={
       nombre:"pepito",
       pocisionActual:matriz[fila][contador_casillas],
       largoDelGusano:1
    }


    var idCabezaVibora=Gusano.pocisionActual
    var cabezaViborita=document.querySelector("#"+idCabezaVibora)
    cabezaViborita.classList.add("marron")

    function eliminarColor(){
        matriz.forEach((fila)=>{
            fila.forEach(casilla=>{
                const CASILLA=document.querySelector("#"+casilla)
                CASILLA.classList.remove("marron")
          
            })
        })
        return false
    }
// controles del gusano--------------------------------------------------------------

    boton.addEventListener('keydown',(e)=>{
        if (e.key=='ArrowRight') {
            contador_casillas++
            eliminarColor()
            cabezaViborita=document.querySelector("#"+matriz[fila][contador_casillas])
            cabezaViborita.classList.add("marron")
            console.log(cabezaViborita);
        }
        if (e.key=='ArrowLeft') {
            contador_casillas--
            eliminarColor()
            cabezaViborita=document.querySelector("#"+matriz[fila][contador_casillas])
            console.log(cabezaViborita);
           cabezaViborita.classList.add("marron")
        }
        if (e.key=='ArrowDown') {
            fila++
            eliminarColor()
            cabezaViborita=document.querySelector("#"+matriz[fila][contador_casillas])
            console.log(cabezaViborita);
           cabezaViborita.classList.add("marron")
        }
        if (e.key=='ArrowUp') {
            fila--
            eliminarColor()
            cabezaViborita=document.querySelector("#"+matriz[fila][contador_casillas])
            console.log(cabezaViborita);
           cabezaViborita.classList.add("marron")
        }
        if (cabezaViborita==CasillaAleatoriaDelJuego) {
            console.log("se la come");
            Gusano.largoDelGusano++
            console.log("el gusano ahora mide: "+Gusano.largoDelGusano);
            CasillaAleatoriaDelJuego.classList.remove("rojo")
            CasillaAleatoriaDelJuego=casillaAleatoriaDelJuego()
        }
    })
})



 
 
 
 

 
 



