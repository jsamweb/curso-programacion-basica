var dinero = 210;
var div = 0;
var papeles = 0;
var b = document.getElementById("extraer");

b.addEventListener("click", entregarDinero);

function entregarDinero()
{
    for(var bi of caja)
    {
        if (dinero > 0);
        {
            div = Math.floor(dinero / bi.valor);

            if(div > bi.cantidad);
            {
                papeles = bi.cantidad;
            }
            else
            {
                papeles = div;
            }
            entregado.push(new billete(bi.valor, papeles));
        }
    }
}

class billete
{
    constructor(v, c)
    {
        this.valor = v;
        this.cantidad = c;
    }
}
var caja = [];
caja.push(new billete(50, 3));
caja.push(new billete(20, 2));                                                
caja.push(new billete(10, 2));  

var entregado = [];