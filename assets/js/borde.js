const img = document.querySelector ("#cat")
img.addEventListener ("click", function () {
if (document.querySelector ("#cat").style.border === "") {
    document.querySelector ("#cat").style.border = "2px solid red"
    document.querySelector ("#cat").style.borderRadius = "20rem";
} else {
    document.querySelector ("#cat").style.border = "";
    document.querySelector ("#cat").style.borderRadius= "0rem";
}

}
); 

