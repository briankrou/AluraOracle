var paciente = document.querySelectorAll("tabla-pacientes");

//paciente.forEach(function(paciente){
  //  paciente.addEventListener("dblclick",function(){
    //    this.remove();
    //});
//});
var tabla = document.querySelectorAll(".eliminar_with");
tabla.forEach(function(tabla){
    tabla.addEventListener("click",function(event){
  
         ventana.showModal();
        Aceptar=document.querySelector("#si")
  
        Aceptar.addEventListener("click",function(Aceptar){
          event.target.parentNode.parentNode.classList.add("animacionEliminar")
          ventana.close()
          setTimeout(function(){

            event.target.parentNode.parentNode.remove();
          },1000)

        })
        cancelar=document.querySelector("#no")
        
        cancelar.addEventListener("click",function(cancelar){
            ventana.close()
        })     
    
    
        })

})



//tabla.forEach(function(tabla){
//tabla.addEventListener("click",function(event){
  //      console.log( event.target)

//})

//})


