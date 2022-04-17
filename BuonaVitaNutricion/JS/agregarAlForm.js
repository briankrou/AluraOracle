
var botonAgregar = document.querySelector("#botonAgregarPaciente")//<---Capturar el evento del boton agregar paciente
    
    botonAgregar.addEventListener("click",function(event){  //<---------Abrimos la funciom que tendra el evento al hacer click
    event.preventDefault();/**<-----------------------------------------prevenir que carge de nuevo cuando se hace clic  */

    var paciente;

    var form = document.querySelector("#form-Adicoonar");//<------------Capturamos el formulario

    var paciente= capturarDatosPaciente(form);//<-----------------------funcion que crea una instancia de la clase paciente

    var tabla=document.querySelector("#tabla-pacientes"); //<-----------Captura la tabla 

    var pacienteTr=contruirUnTr(paciente);//<---------------------------contruir un paciente
      
    tabla.appendChild(pacienteTr);//<-----------------------------------asignamos dentro de la tabla  el pacienteTr

    form.reset();//<--reseta el formulario
});
function capturarDatosPaciente(form){
    //capctura los datos del formulario//
    var paciente = {
        nombre:form.nombre.value,
        peso:form.peso.value,
        altura:form.altura.value,
        gordura:form.gordura.value,
        imc: calcularImc(form.peso.value,form.altura.value)//<<---calcularImc es funciomn de otro archivo
    }
    return paciente;
}


function CrearTd(dato,clase){
    var td=document.createElement("td");//<--creamos los TD//
    td.classList.add(clase) //<---Agregamos las clases a los TD///
    td.textContent=dato; //<------Asignamos los valores a los TD //

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

    return pacienteTr;
}
