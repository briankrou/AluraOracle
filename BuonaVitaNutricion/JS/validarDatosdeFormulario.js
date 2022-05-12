function validarDatosDelFormulario(form,tabla){
                    peso=form.querySelector("#peso").value;
                    altura=form.querySelector("#altura").value;
                    nombre=form.querySelector("#nombre").value;
                    gordura=form.querySelector("#gordura").value;

                    pesoEsValido= false;
                    alturaEsValida=false;
                    gorduravalida=false;

                    if(gordura>1){
                        gorduravalida=true;
                    }
                    
                    if((peso>0)&&(peso<300)){
                        pesoEsValido=true;
                    }
                
                    if((altura>0)&&(altura<2.5)){
                        alturaEsValida=true;
                    }

                    if(nombre==""){
                        return( 

                            form.querySelector("#nombre").classList.add("error"),
                            document.querySelector("#errorNombre").classList.add("errorLogo"),

                            form.querySelector("#altura").classList.remove("error"),
                            document.querySelector("#errorAltura").classList.remove("errorLogo"),

                            form.querySelector("#peso").classList.remove("error"),
                            document.querySelector("#errorPeso").classList.remove("errorLogo"),
                        
                            form.querySelector("#gordura").classList.remove("error"),
                            document.querySelector("#errorgordura").classList.remove("errorLogo"))

                    }else{
                        if((alturaEsValida==true)&&(pesoEsValido==true)&&(gorduravalida==true)){
                            return(true)
                            

                        }else if((alturaEsValida==true)&&(pesoEsValido==true)&&(gorduravalida==false)){
                            return(                  
                            form.querySelector("#altura").classList.remove("error"),
                            document.querySelector("#errorAltura").classList.remove("errorLogo"),

                            form.querySelector("#peso").classList.remove("error"),
                            document.querySelector("#errorPeso").classList.remove("errorLogo"),

                            form.querySelector("#gordura").classList.add("error"),
                            document.querySelector("#errorgordura").classList.add("errorLogo"),

                            form.querySelector("#nombre").classList.remove("error"),
                            document.querySelector("#errorNombre").classList.remove("errorLogo"))
        
                        }else if((alturaEsValida==true)&&(pesoEsValido==false)&&(gorduravalida==false)){
                           return(
                            form.querySelector("#altura").classList.remove("error"),
                            document.querySelector("#errorAltura").classList.remove("errorLogo"),

                            form.querySelector("#peso").classList.add("error"),
                            document.querySelector("#errorPeso").classList.add("errorLogo"),

                            form.querySelector("#gordura").classList.add("error"),
                            document.querySelector("#errorgordura").classList.add("errorLogo"),

                            form.querySelector("#nombre").classList.remove("error"),
                            document.querySelector("#errorNombre").classList.remove("errorLogo"))


                        }else if((alturaEsValida==true)&&(pesoEsValido==false)&&(gorduravalida==true)){
                           return(
                            form.querySelector("#altura").classList.remove("error"),
                            document.querySelector("#errorAltura").classList.remove("errorLogo"),

                            form.querySelector("#peso").classList.add("error"),
                            document.querySelector("#errorPeso").classList.add("errorLogo"),

                            form.querySelector("#gordura").classList.remove("error"),
                            document.querySelector("#errorgordura").classList.remove("errorLogo"),

                            form.querySelector("#nombre").classList.remove("error"),
                            document.querySelector("#errorNombre").classList.remove("errorLogo"))

                        }else if((alturaEsValida==false)&&(pesoEsValido==true)&&(gorduravalida==false)){
                           return(
                            form.querySelector("#altura").classList.add("error"),
                            document.querySelector("#errorAltura").classList.add("errorLogo"),

                            form.querySelector("#peso").classList.remove("error"),
                            document.querySelector("#errorPeso").classList.remove("errorLogo"),

                            form.querySelector("#gordura").classList.add("error"),
                            document.querySelector("#errorgordura").classList.add("errorLogo"),

                            form.querySelector("#nombre").classList.remove("error"),
                            document.querySelector("#errorNombre").classList.remove("errorLogo"))

                        }else if((alturaEsValida==false)&&(pesoEsValido==true)&&(gorduravalida==true)){
                            return(
                            form.querySelector("#altura").classList.add("error"),
                            document.querySelector("#errorAltura").classList.add("errorLogo"),

                            form.querySelector("#peso").classList.remove("error"),
                            document.querySelector("#errorPeso").classList.remove("errorLogo"),

                            form.querySelector("#gordura").classList.remove("error"),
                            document.querySelector("#errorgordura").classList.remove("errorLogo"),

                            form.querySelector("#nombre").classList.remove("error"),
                            document.querySelector("#errorNombre").classList.remove("errorLogo"))

                        }else if((alturaEsValida==false)&&(pesoEsValido==false)&&(gorduravalida==true)){
                            return(
                            form.querySelector("#altura").classList.add("error"),
                            document.querySelector("#errorAltura").classList.add("errorLogo"),

                            form.querySelector("#peso").classList.add("error"),
                            document.querySelector("#errorPeso").classList.add("errorLogo"),

                            form.querySelector("#gordura").classList.remove("error"),
                            document.querySelector("#errorgordura").classList.remove("errorLogo"),

                            form.querySelector("#nombre").classList.remove("error"),
                            document.querySelector("#errorNombre").classList.remove("errorLogo"))
                        }else{
                            return(
                            form.querySelector("#altura").classList.add("error"),
                            document.querySelector("#errorAltura").classList.add("errorLogo"),

                            form.querySelector("#peso").classList.add("error"),
                            document.querySelector("#errorPeso").classList.add("errorLogo"),

                            form.querySelector("#gordura").classList.add("error"),
                            document.querySelector("#errorgordura").classList.add("errorLogo"),

                            form.querySelector("#nombre").classList.remove("error"),
                            document.querySelector("#errorNombre").classList.remove("errorLogo"))
                        }
                    }
                        
}