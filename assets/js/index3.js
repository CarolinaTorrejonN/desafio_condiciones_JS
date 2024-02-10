const verificar = document.getElementById('button'); // boton verificador//
const texto = document.getElementById ('texto'); // variable que muestra el mensaje//

verificar.addEventListener("click", function () { //funcion al seleccionar//
    let selecta= document.getElementById ('columna_a').value //primer select
    let selectb= document.getElementById ('columna_b').value  //segundo select
    let selectc= document.getElementById ('columna_c').value  //tercer select
    let confirmar = selecta + selectb + selectc // confirmar los 3 select
    if (confirmar == 911) { 
      texto.innerHTML = "La contraseña 1 es correcta"; // texto para mostrar //
    } else if (confirmar == 714) {
      texto.innerHTML= "Contraseña 2 es correcta"; 
    } else {
        texto.innerHTML = "Contraseña incorrecta"; 
    }
})


