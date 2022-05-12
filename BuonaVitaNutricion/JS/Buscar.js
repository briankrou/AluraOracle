

//(padredondeBuscar,claseHijo,clasehijo-hijjo,que busca,

function BuscarUno(tabla,hijo,hijo_hijo,queBusca){
    var n =tabla.querySelectorAll(hijo)
    var Buscado= queBusca;
    var valor=false;
        for(var i=0;i<n.length;i++){
            p= n[i].querySelector(hijo_hijo).textContent;
            if(p == Buscado){
                valor= true;
            }
        }
    return valor;
}


