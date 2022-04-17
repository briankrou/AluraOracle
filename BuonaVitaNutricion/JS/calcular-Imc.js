



    var pacientes= document.querySelectorAll(".paciente")

    for(var i=0;i<pacientes.length;i++){
        var paciente=pacientes[i];
        var peso=paciente.querySelector(".info-peso").textContent;
        var altura=paciente.querySelector(".info-altura").textContent;
        var imctotal=paciente.querySelector(".info-imc")
        pesoEsValido= true;
        alturaEsValida=true;

        if((peso<0)||(peso>300)){
            imctotal.textContent="Peso incorrecto";
            pesoEsValido=false;
            paciente.classList.add("error")

        }
        if((altura<0)||(altura>2.5)){
            imctotal.textContent="Altura incorrecto";
            alturaEsValida=false;
            paciente.classList.add("error")

        }
        if(pesoEsValido&&alturaEsValida){
         /** <---toFixed(numero decimales)*/   
           imctotal.textContent= calcularImc(peso,altura)
        }
    }

    
    function calcularImc(peso,altura){
        var cal=peso/(altura*altura)
        return cal.toFixed(2); 
    }
