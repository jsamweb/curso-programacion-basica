var vs = document.getElementById("villaSebas");
var papel = vs.getContext("2d");
var mapa = "tile.png";

var fondo = new Image();
fondo.src = mapa;
fondo.addEventListener("load", dibujar);

var vaca = new Image();
vaca.src = "vaca.png";
vaca.addEventListener("load", dibujarVaca);
var cerdo = new Image();
cerdo.src = "cerdo.png";
cerdo.addEventListener("load", dibujarCerdo);
var pollo = new Image();
pollo.src = "pollo.png";
pollo.addEventListener("load", dibujarPollo);
var sebas = new Image();
sebas.src = "sebas.png";
sebas.addEventListener("load", dibujarSebas);


function dibujar(){
    papel.drawImage(fondo, 0, 0);
}

function dibujarVaca(){
    papel.drawImage(vaca, 40, 40);
}

function dibujarCerdo(){
    papel.drawImage(cerdo, 10, 10);
}

function dibujarPollo(){
    papel.drawImage(pollo, 20, 20);
}

function dibujarSebas(){
    papel.drawImage(sebas, 30, 30);
}


function aleatorio(min, maxi){
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
} 

//COMO CREAR NUMERO ALEATORIO
// var z;

// for(var i=0; i<10; i++){
//     document.write(z + ", ");
//     z = aleatorio(0, 5);
// }
//COMO CREAR NUMERO ALEATORIO