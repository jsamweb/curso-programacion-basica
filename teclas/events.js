var teclas = {
    UP: 38, DOWN: 40, LEFT: 37, RIGHT: 39
};
var estado = 0;
var colorLinea ="blue"
console.log(teclas);
// document.addEventListener("keydown", dibujarTeclado);
document.addEventListener("mousedown", presionarMouse);
document.addEventListener("mouseup",soltarMouse);
document.addEventListener("mousemove",dibujarMouse); 

//ESTO ES UN METODO PARA DETECTAR EVENTOS CON IF
// function dibujarTeclado(tecla)
//     {
//         if(tecla.keyCode == teclas.UP){
//             console.log("vamos pa Arriba");
//         }
//         // console.log("tecla oprimida");
//         // console.log(tecla);
//     }

//ESTO ES UN METODO PARA DETECTAR EVENTOS CON SWITCH(ES UN METODO QUE SE USA PARA CASOS MUY ESPECIFICOS)   
var cuadrito = document.getElementById ("draw_area");
var papel = cuadrito.getContext("2d");
var x;
var y;

dibujarLinea("red", 0, 0, 300, 0, papel);
dibujarLinea("red", 300, 0, 300, 300, papel);
dibujarLinea("red", 300, 300, 0, 300, papel);
dibujarLinea("red", 0, 300, 0, 0, papel);

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 2;
    lienzo.moveTo(x_inicial, y_inicial);
    lienzo.lineTo( x_final, y_final);
    lienzo.stroke();
    lienzo.closePath();
}

// function dibujarTeclado(tecla)
//     {
//         var colorcito = "orange;"
//         var movimiento = 1;
//         switch(tecla.keyCode){
//             case teclas.UP:
//                 dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
//                 y = y- movimiento;
//             break;
//             case teclas.DOWN:
//                 dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
//                 y = y + movimiento;
//             break;
//             case teclas.LEFT:
//                 dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
//                 x = x - movimiento;         
//                 break;
//             case teclas.RIGHT:
//                 dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
//                 x = x + movimiento;          
//                 break;

//         }
//     }
function dibujarMouse(mousemove){
    
    if (estado==1){
        dibujarLinea(colorLinea, x, y, mousemove.layerX, mousemove.layerY, papel);
    }
    x = mousemove.layerX;
    y = mousemove.layerY;
}
function presionarMouse(mousedown){
    estado = 1;
    x = mousedown.layerX;
    y = mousedown.layerY;
}
function soltarMouse(evento){
    estado = 0;
    x = evento.layerX;
    y = evento.layerY;
  }
