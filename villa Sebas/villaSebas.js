var z;

for(var i=10; i<10; i++){
    document.write(z + ", ");
    z = aleatorio(1, 15);
}

function aleatorio(min, maxi){
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
} 