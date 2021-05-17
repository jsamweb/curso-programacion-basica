var texto = document.getElementById("line_text");
var boton = document.getElementById("button");

//OTHERS VARS
var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(x_inicial, y_inicial);
    lienzo.lineTo( x_final, y_final);
    lienzo.stroke();
    lienzo.closePath();
}

//FORMULARIO
function dibujoPorClick()
{
    var lineas = parseInt(texto.value);
    var l = 0;
    var yi, xf;
    
    // console.log(texto);



    for(l = 0; l < lineas; l++){
        yi = 10 *  l;
        xf = 10 * (l + 1);
        dibujarLinea( "blue", 0, yi, xf, 300);

        // yi = 10 *  l;
        // xf = 10 * (l + 1);
        // dibujarLinea( "red", 300, yi, xf, 0);

        // xi = 10 *  l;
        // yf = 10 * (l + 1);
        // nyf = 300 - yf;
        // dibujarLinea( "green", xi, 300, 300, nyf);

        // xf = 10 *  l;
        // yf = 10 * (l + 1);
        // nxf = 300 - xf;
        // dibujarLinea( "yellow", 0, xf, nxf, 0);
    }


    // alert("Epa Epa EEEEEEPAAAAAAAAAA " + texto.value);
}
boton.addEventListener("click", dibujoPorClick);












// while(l < lineas)
// {
//     yi = 20 *  l;
//     xf = 20 * (l + 1);
//     dibujarLinea( "red", 0, yi, xf, 300,)
//     l++;

// }