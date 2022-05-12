



        var pacientes= document.querySelectorAll(".paciente")

        for(var i=0;i<pacientes.length;i++){
            var paciente=pacientes[i];
            var peso=paciente.querySelector(".info-peso").textContent;
            var altura=paciente.querySelector(".info-altura").textContent;
            var imctotal=paciente.querySelector(".info-imc")
            pesoEsValido= true;
            alturaEsValida=true;
               imctotal.textContent= calcularImc(peso,altura)
        }
    
    function calcularImc(peso,altura){
        var cal=peso/(altura*altura)
        return cal.toFixed(2); 
    }
