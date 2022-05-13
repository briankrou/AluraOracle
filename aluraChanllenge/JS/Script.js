
  

  var textofinal2= document.querySelector("#resultadoFinal");
    var botonEncriptar= document.querySelector("#encriptar")
    botonEncriptar.addEventListener("click",function(event){
        var texto=(document.querySelector("#texaTraducir")).value;
        var textofinal=texto.replaceAll( "e","enter").replaceAll( "i","imes").replaceAll( "a","ai").replaceAll("o","ober").replaceAll("u","ufat")

        textofinal2.textContent= textofinal 
        vacio(textofinal2,".imagen")
})

    var botonDesencriptar=document.querySelector("#desencriptar")
    botonDesencriptar.addEventListener("click",function(event){
        var texto=(document.querySelector("#texaTraducir")).value;
        var textofinal=texto.replaceAll( "enter","e").replaceAll( "imes","i").replaceAll( "ai","a").replaceAll("ober","o").replaceAll("ufat","u")
         textofinal2.textContent= textofinal 
         vacio(textofinal2,".imagen")
         


})

function copiarbt() {
    var content = textofinal2;
    content.select();
    document.execCommand('copy');
}

function vacio(valor, quitar){
    if(valor.value!=""){
        var btncopiar=document.querySelector("#copiar");
        var img=document.querySelector(quitar)
        img.style.display="none"
        textofinal2.style.display="initial"
        btncopiar.style.display="initial"


    }else{
        var btncopiar=document.querySelector("#copiar");
        var img=document.querySelector(quitar)
        img.style.display="initial"
        textofinal2.style.display="none"
        btncopiar.style.display="none"
     
    }
}



