


var botonAgregar = document.querySelector("#botonAgregarPaciente")//<---Capturar el evento del boton agregar paciente
    
    botonAgregar.addEventListener("click",function(event){  //<---------Abrimos la funciom que tendra el evento al hacer click
            event.preventDefault();/**<-----------------------------------------prevenir que carge de nuevo cuando se hace clic  */

            var paciente;

            var form = document.querySelector("#form-Adicoonar");//<------------Capturamos el formulario

            var paciente= capturarDatosPaciente(form);//<-----------------------funcion que crea una instancia de la clase paciente

            var tabla=document.querySelector("#tabla-pacientes"); //<-----------Captura la tabla 

            var pacienteTr=contruirUnTr(paciente);//<---------------------------contruir un paciente
            var queBusca = pacienteTr.querySelector(".info-nombre").textContent;

        //validar los datos para al final agregar

            var encontrado=BuscarUno(tabla,".paciente",".info-nombre",queBusca);//<---VALIDA SI ESTA EN LA BASE

                if(encontrado==true){
                    ventanaUna.showModal();
                    return;

                }else{
                        if((validarDatosDelFormulario(form))==true){
                            tabla.appendChild(pacienteTr),//<-- agregamos a la tabla
                            form.reset(),//<----Resetea el formulario   
                       
                            form.querySelector("#altura").classList.remove("error"),
                            document.querySelector("#errorAltura").classList.remove("errorLogo"),

                            form.querySelector("#peso").classList.remove("error"),
                            document.querySelector("#errorPeso").classList.remove("errorLogo"),

                            form.querySelector("#nombre").classList.remove("error"),
                            document.querySelector("#errorNombre").classList.remove("errorLogo")
                        
                            form.querySelector("#gordura").classList.remove("error"),
                            document.querySelector("#errorgordura").classList.remove("errorLogo")
                        }

                    
        
                }
            
    });

//---------FUNCIONES---------///


function capturarDatosPaciente(form){
    //capctura los datos del formulario//
    var paciente = {
        nombre:form.nombre.value,
        peso:form.peso.value,
        altura:form.altura.value,
        gordura:form.gordura.value,
        imc: calcularImc(form.peso.value,form.altura.value),//<<---calcularImc es funciomn de otro archivo

    }
    return paciente;
}
/*--------------------------FUNCION PARA CREAR LOS TD--------------------*/

function CrearTd(dato,clase){
    var td=document.createElement("td");//<--creamos los TD//
    td.classList.add(clase) //<---Agregamos las clases a los TD///
    td.textContent=dato; //<------Asignamos los valores a los TD //

    return td;
}

/*------------------------FUNCION PARA CREAR BOTON DE TABLA ELIMINAR-----------------------------*/
var ventana = document.getElementById("ventanaError");
function CrearTdBoton(){
    var td=document.createElement("td");
    td.classList.add("eliminar_with")
    boton=document.createElement("button");
    boton.classList.add("elminar")
    boton.addEventListener("click",function(event){
        event.target.parentNode.parentNode.classList.add("animacionEliminar")
        ventana.showModal();
        Aceptar=document.querySelector("#si")
        Aceptar.addEventListener("click",function(Aceptar){
            ventana.close()
        cancelar=document.querySelector("#no")

            setTimeout(function(){
              event.target.parentNode.parentNode.remove();
            },1000)
        })
        cancelar=document.querySelector("#no")
        cancelar.addEventListener("click",function(cancelar){
            ventana.close()
        })     
    })
    td.appendChild(boton) 
    
    return td;
}

function  contruirUnTr(paciente){
    //creamos el tr para el HTML//
    var pacienteTr=document.createElement("tr")//<--creamos el TR
    pacienteTr.classList.add("paciente");//<----------------le agregamos la clase paciente

    //asignacion al TR los TD//
    pacienteTr.appendChild(CrearTd(paciente.nombre,"info-nombre"));
    pacienteTr.appendChild(CrearTd(paciente.peso,"info-peso"));
    pacienteTr.appendChild(CrearTd(paciente.altura,"info-altura"));
    pacienteTr.appendChild(CrearTd(paciente.gordura,"info-gordura"));
    pacienteTr.appendChild(CrearTd(paciente.imc,"info-imc"));
    pacienteTr.appendChild(CrearTdBoton())
   
    return pacienteTr;
}

/**---------------VENTANA INFORMATIVA--------------------------- */

var ventanaUna=document.getElementById("ventaUnaopcion");

var botonVentanaUna=document.querySelector("#Aceptar");
botonVentanaUna.addEventListener("click",function(botonVentanaUna){
    ventanaUna.close()
})
