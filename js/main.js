document.getElementById('color').addEventListener('input', getColor)

function getColor(){

    let color = document.getElementById('color').value

    document.getElementById('visualizar').style.background = color
    document.getElementById('codigoHEX').innerHTML = color
    let root = document.documentElement;
    root.style.setProperty('--colorBase', color)
}


function copiar(){
   var copia = document.getElementById('codigoHEX').textContent
   copia = copia.toUpperCase()
    console.log(copia)

    controlC(copia)

    alert('COLOR COPIADO ' + copia)
    
}

function controlC(text) {
    var copiar = document.createElement("textarea");
    document.body.appendChild(copiar);
    copiar.value = text;
    copiar.select();
    document.execCommand("copy");
    document.body.removeChild(copiar);
}