var imagenes = [];
imagenes["cauchin"] = "vaca.png";
imagenes["pokacho"] = "pollo.png";
imagenes["tocinauro"] = "cerdo.png";

class pakiman
{
    constructor(n, v, a)
    {
        this.imagen = new Image();
        this.nombre = n;
        this.vida = v;
        this.ataque = a;

        this.imagen.src = imagenes[this.nombre];
    }
    hablar()
    {
        alert(this.nombre);
    }
    mostrar()
    {
        document.body.appendChild(this.imagen);
        document.write("<br><strong>" + this.nombre + "</strong><br>");
        document.write("ataque:" + this.ataque + "<br>");
        document.write("vida:" + this.vida + "<hr>");
    }
}

var coleccion = [];
{
    coleccion.push(new pakiman("cauchin", 100, 30));
    coleccion.push(new pakiman("pokacho", 80, 50));
    coleccion.push(new pakiman("tocinauro", 120, 40));
}
for(var desplegar of coleccion)
{
    desplegar.mostrar();
}

