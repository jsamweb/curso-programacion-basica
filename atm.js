var imagenes = [];
imagenes["50"] = "50.jpg";
imagenes["20"] = "20.jpg";
imagenes["10"] = "10.jpg";
imagenes["5"] = "5.jpg";

class billete
{
    constructor(v, c)
    {
        this.valor = v;
        this.cantidad = c;
        this.imagen = new Image();
        this.imagen.src = imagenes[this.valor]
    }
}
var caja = [];
caja.push(new billete(50, 5));
caja.push(new billete(20, 5));                                                
caja.push(new billete(10, 20));  
caja.push(new billete(5, 20));  

contar();
// var dinero = 0;
var div = 0;
var papeles = 0;

var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);


function entregarDinero()
{
    var dibujado = [];
    var t = document.getElementById("dinero")
    dinero = parseInt(t.value);

    if(total >= dinero)
    {

        for(var bi of caja)
        {
            if (dinero > 0);
            {
                div = Math.floor(dinero / bi.valor);

                if(div > bi.cantidad)
                {
                    papeles = bi.cantidad;
                }
                else
                {
                    papeles = div;
                }
                bi.cantidad = bi.cantidad - papeles;
                for(var i = 0; i < papeles; i++)
                {
                dibujado.push(new billete(bi.valor, 1));
                }
                dinero = dinero - (bi.valor * papeles);
            }
        }
        
        if(dinero == 0)
        {
            
            resultado.innerHTML = resultado.innerHTML + "Se ha retirado: <br />";
            
            for(var e of dibujado)
            {
                resultado.innerHTML = resultado.innerHTML + "<img src=" + e.imagen.src + " />";
            }
            resultado.innerHTML  = resultado.innerHTML + "<hr>";

        contar();
        }
        
        else 
        {
            resultado.innerHTML = resultado.innerHTML + "No tengo los billetes para esa suma, intenta otro valor <hr />";
        }
    }    
    else
	{
		resultado.innerHTML += "Soy un cajero pobre y no tengo dinero :( <hr />";
	}	
}



function contar()
{
    total = 0

    for(var tot of caja)
    {
        total = total + tot.valor * tot.cantidad;
    }
    console.log(total);
   
}








