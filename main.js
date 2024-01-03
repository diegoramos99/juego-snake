const listaDeGusanos=JSON.parse(localStorage.getItem("gusanos"));
const btn=document.querySelector("#ingresar")
 
function sacarElEnLineaDeLosUsuarios() {
  listaDeGusanos.forEach(gusano => {
    if (gusano.enLinea) {
      
      gusano.enLinea=false
      console.log(gusano);
    }
  });
}
function buscarUsuario() {
  
  const usuario=document.querySelector("#nombre").value
  const contraceña=document.querySelector("#contraceña").value
  var numero=0;
  for (const gusano of listaDeGusanos) {
    if (gusano.usuario==usuario&&gusano.contraceña==contraceña) {
      gusano.enLinea=true
      console.log("asd");
      localStorage.setItem("gusanos",JSON.stringify(listaDeGusanos))
      window.location.href="../views/juego.html"
      break
    }
  }
}

btn.addEventListener("click",function(){
  if(listaDeGusanos==null){
    alert("debes registrarte primero")
  }else{
    buscarUsuario()
    
  }
  
})
sacarElEnLineaDeLosUsuarios()
  // localStorage.clear()    
