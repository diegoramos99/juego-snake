
const btn=document.querySelector("#ingresar")

function registrarUsuario() {
  console.log("asd");
  const usuario=document.querySelector("#nombre").value
  const usuarioNuevo={
    usuario:usuario,
    bestScore:0
  }
  localStorage.setItem("usuario",JSON.stringify(usuarioNuevo));
  location.href="../views/diego.html"
}

btn.addEventListener("click",registrarUsuario)

  // localStorage.clear()     
