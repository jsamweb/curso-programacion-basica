var vs = document.getElementById("villaSebas");
var papel = vs.getContext("2d");


var fondo = {
    url: "tile.png",
    cargaOk: false
}
var vaca = {
    url: "vaca.png",
    cargaOk: false
};
var cerdo = {
    url: "cerdo.png",
    cargaOk: false
};
var pollo = {
    url: "pollo.png",
    cargaOk: false
};
var sebas = {
    url: "sebas.png",
    cargaOk: false
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

sebas.imagen = new Image();
sebas.imagen.src = sebas.url;
sebas.imagen.addEventListener("load", cargarSebas);

var xLobo = 150
var yLobo = 150

function moverLobo(mover){
    var movimiento = 64;
    var teclas = {
        LEFT: 37,
		UP: 38,
		RIGHT: 39,
		DOWN: 40
    }
    switch(mover.keyCode)
	{
		case teclas.LEFT:
			xLobo = xLobo - movimiento;
			dibujar(xLobo, yLobo);
		break;
		case teclas.UP:
			yLobo = yLobo - movimiento;
			dibujar(xLobo, yLobo);
		break;
		case teclas.RIGHT:
			xLobo = xLobo + movimiento;
			dibujar(xLobo, yLobo);
		break;
		case teclas.DOWN:
			yLobo = yLobo + movimiento;
			dibujar(xLobo, yLobo);
		break;
	}
}


function dibujar(){

    if(fondo.cargaOk == true){
        papel.drawImage(fondo.imagen, 0, 0);
    }

    if(vaca.cargaOk == true){
        for(var a=0; a < cantidad; a++){

            var x = aleatorio(0, 8);
            var y = aleatorio(0, 8);
            var x = x * 50;
            var y = y * 50;
            papel.drawImage(vaca.imagen, x, y);
        }

    }
    if(cerdo.cargaOk == true){
        for(var a=0; a < cantidad; a++){

            var x = aleatorio(0, 8);
            var y = aleatorio(0, 8);
            var x = x * 50;
            var y = y * 50;
            papel.drawImage(cerdo.imagen, x, y);
        }
    }
    if(pollo.cargaOk == true){
        for(var a=0; a < cantidad; a++){

            var x = aleatorio(0, 8);
            var y = aleatorio(0, 8);
            var x = x * 50;
            var y = y * 50;
            papel.drawImage(pollo.imagen, x, y);
        }

    }
    if(sebas.cargaOk == true){
            papel.drawImage(sebas.imagen, xLobo, yLobo);

    }

}
var cantidad = aleatorio(1, 13);

function cargarFondo(){
    fondo.cargaOk = true;
    dibujar();
}
function cargarVaca(){
    vaca.cargaOk = true;
    dibujar();
}
function cargarCerdo(){
    cerdo.cargaOk = true;
    dibujar();
}
function cargarPollo(){
    pollo.cargaOk = true;
    dibujar();
}
function cargarSebas(){
    sebas.cargaOk = true;
    dibujar();
}

function aleatorio(min, maxi){
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
} 




//FUNCIONES PARA MOSTRAR IMAGENES A TRAVES DE CANVAS
// function dibujarVaca(){
//     papel.drawImage(vaca, 40, 40);
// }

// function dibujarCerdo(){
//     papel.drawImage(cerdo, 10, 10);
// }

// function dibujarPollo(){
//     papel.drawImage(pollo, 20, 20);
// }

// function dibujarSebas(){
//     papel.drawImage(sebas, 30, 30);
// }
//FUNCIONES PARA MOSTRAR IMAGENES A TRAVES DE CANVAS


//COMO CREAR NUMERO ALEATORIO
// var z;

// for(var i=0; i<10; i++){
//     document.write(z + ", ");
//     z = aleatorio(0, 5);
// }
//COMO CREAR NUMERO ALEATORIO

//COMO SUBIR IMAGENES CON CANVAS
// var cerdo = new Image();
// cerdo.src = "cerdo.png";
// cerdo.addEventListener("load", cargarCerdo);
// var pollo = new Image();
// pollo.src = "pollo.png";
// pollo.addEventListener("load", cargarPollo);
// var sebas = new Image();
// sebas.src = "sebas.png";
// sebas.addEventListener("load", cargarSebas);
//COMO SUBIR IMAGENES CON CANVAS