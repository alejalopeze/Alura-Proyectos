// Función para encriptar el texto ingresado.
//
function encriptarTexto() {
  //alert("Hola");
  var texto = document.getElementById("cifrarTexto").value;

  var cifrarTexto = texto.replace(/e/gm, "enter");
  var cifrarTexto = cifrarTexto.replace(/o/gm, "ober");
  var cifrarTexto = cifrarTexto.replace(/i/gm, "imes");
  var cifrarTexto = cifrarTexto.replace(/a/gm, "ai");
  var cifrarTexto = cifrarTexto.replace(/u/gm, "ufat");

//Mensaje de no ingresar texto.

  validarTexto(texto)
  
  document.getElementById("encriptadoTxt").innerHTML = cifrarTexto;
  // Ocultar y mostrar algunos elementos del encriptador. 

}

// Función desencriptar texto ingresado.
function desencriptarTexto() {
  //alert("asd");
  const texto = document.getElementById("cifrarTexto").value.toLowerCase();

  var cifrarTexto = texto.replace(/enter/gim, "e");
  var cifrarTexto = cifrarTexto.replace(/ober/gim, "o");
  var cifrarTexto = cifrarTexto.replace(/imes/gim, "i");
  var cifrarTexto = cifrarTexto.replace(/ai/gim, "a");
  var cifrarTexto = cifrarTexto.replace(/ufat/gim, "u");
  validarTexto(texto)
  //alert(cifrarTexto);
  document.getElementById("encriptadoTxt").innerHTML = cifrarTexto;
}

// Función para copiar contenido.
function copiarTexto() {
  var contenidoTxt = encriptadoTxt.value;
  navigator.clipboard.writeText(contenidoTxt);

//Mostrar notificación de boton copiar.
  Swal.fire({
   
    icon: "success",
    title: "Texto copiado!"
    
  });
}

function validarTexto(texto) {
  
  if (texto === "") {
     Swal.fire({
      icon: "error",
      title: "No se encontró ningún texto."    
    });
  }else{
    document.getElementById("imagen").style.display = "none";
    document.getElementById("msj-entrada").style.display = "none";
    document.getElementById("descripcion").style.display = "none";
  
    document.getElementById("btn-copiar").style.display = "show";
    document.getElementById("btn-copiar").style.display = "inherit";
    document.getElementById("areams").style.display = "block";
  } 
  return ;
  
}
