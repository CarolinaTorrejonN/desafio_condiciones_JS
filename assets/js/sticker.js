let verificar = document.getElementById("button"); // boton verificador//
let texto = document.getElementById ("texto")

verificar.addEventListener("click", function () { //funcion al hacer click//
    let cantidad1= parseInt (document.getElementById ("input1").value); //cantidad del imput izquiero
    let cantidad2= parseInt (document.getElementById ("input2").value); //cantidad del imput del medio
    let cantidad3= parseInt (document.getElementById ("input3").value); //cantidad del imput derecho
    let sumar = cantidad1 + cantidad2 +cantidad3; // sumar los 3 input//
    if (sumar > 10) {
      texto.innerHTML = "llevas demasiados stickers"; // texto //
    } else if (sumar <=10) {
      texto.innerHTML= "llevas" + " " + sumar + " " + "stickers"; //texto que muestra la cantidad hasta 10//
    }

});


