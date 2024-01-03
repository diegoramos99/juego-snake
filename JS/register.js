const listaDeGusanos=JSON.parse(localStorage.getItem("gusanos"))|| [];

function almacenarNuevoGusano() {
    const usuario=document.querySelector("#nombre").value
    const contraceña=document.querySelector("#contraceña").value
    const repetirContraceña=document.querySelector("#repetirContraceña").value
  console.log(contraceña);
  console.log(repetirContraceña);

    if (contraceña!=repetirContraceña) {
        alert("las contraceñas nop son identicas")
    }else{
        const usuarioNuevo={
            usuario:usuario,
            contraceña:contraceña,
            repetirContraceña:repetirContraceña,
            bestScore:0,
            enLinea:false
          }
        
           
  
                listaDeGusanos.push(usuarioNuevo)
                location.href="../index.html"
                alert("se registro correctamente el usuario")
                localStorage.setItem("gusanos",JSON.stringify(listaDeGusanos))
            
          
    }
}
const registrarse=document.querySelector("#registrarse")

registrarse.addEventListener("click",almacenarNuevoGusano)