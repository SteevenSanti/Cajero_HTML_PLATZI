class Billete{
    constructor(v, c){
        this.valor = v;
        this.cantidad = c; 
    }
    set reingresocantidad( cant ){
        this.cantidad=cant;
    }
}
var dinero = document.getElementById("dinero");
var retiro =document.getElementById("valor");
var resultado = document.getElementById("resultado");
var newcambio = document.getElementById("cambio");
retiro.addEventListener("click",asignar);
var new_img = [];

var caja=[];
    caja.push(new Billete(50,30));
    caja.push(new Billete(20,20));
    caja.push(new Billete(10,20));
console.log(dinero.value);
function asignar(){
    var i=0,j=0;
    var cantidad = parseInt( dinero.value);
    resultado.innerHTML=null;
    newcambio.innerHTML=null;
    var total = 0;
    for(var i in caja){
        total=total+caja[i].cantidad*caja[i].valor;

    }
    var aux =0; 
    var aux2=0;
    var diferencia;
    var cambio=[];

    if(total>=cantidad){
        
        for(var sucre of caja){
            aux = parseInt( cantidad/sucre.valor);
            if(aux>0){
                if(aux>=sucre.cantidad){
                    aux = sucre.cantidad;
                }
                diferencia = cantidad-sucre.valor*aux;
                cantidad =diferencia;
                cambio.push(new Billete(sucre.valor,aux));
                
                
            }
            
        }
        if(cantidad>0){
            resultado.innerHTML="Ingrese un valor aceptable <br>" ;
        }else{
            for(var cam of cambio){
                resultado.innerHTML=resultado.innerHTML+"Valor:"+cam.valor+" Cantidad:" +cam.cantidad +"<br>" ;
                for(var k=1;k<=cam.cantidad;k++){
                    if(cam.valor==50){
                        resultado.innerHTML+="<img src="+"1.png"+">";
                    }
                    if(cam.valor==20){
                        resultado.innerHTML+="<img src="+"2.png"+">";
                    }
                    if(cam.valor==10){
                        resultado.innerHTML+="<img src="+"3.png"+">";
                    }
                    
                }
            }
            i=0;
            for(var asignar of caja){
                for(var cab of cambio){
                    if(cab.valor==asignar.valor){
                        aux2=asignar.cantidad-cab.cantidad;
                        asignar.reingresocantidad=aux2;
                    }
                }
                newcambio.innerHTML=newcambio.innerHTML+"Valor"+caja[i].valor + "  Cantidad"+ caja[i].cantidad+"<br>";
                //newcambio.innerHTML=newcambio.innerHTML + "<img src="+"1.png"+ ">" +""+"";
                i++;
                for(var j=1 ;j<=cambio[0].cantidad;j++){
                    console.log("valor de:  "+cambio[0].cantidad);

                    //mostrarimg();
                }
            }

            
        }

    }else{
        resultado.innerHTML="Fondos insuficientes <br>";
        alert("Fondos insuficientes");
    }
    
    console.log(caja);
    console.log(cambio);
    console.log(new_img);
}

//console.log(caja[0].cantidad);