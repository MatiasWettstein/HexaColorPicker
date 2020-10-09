document.getElementById('color').addEventListener('input', getColor)

function getColor(){

    let color = document.getElementById('color').value

    document.getElementById('visualizar').style.background = color
    document.getElementById('codigoHEX').innerHTML = color
    document.getElementById('codigoRGB').innerHTML = obtenerRGB(color)
    let root = document.documentElement;
    root.style.setProperty('--colorBase', color)
}


function copiarHEX(){
   var copia = document.getElementById('codigoHEX').textContent
   copia = copia.toUpperCase()
    console.log(copia)

    controlC(copia.toLowerCase())

    alert('COLOR COPIADO ' + copia)
    
}
function copiarRGB(){
    var copia = document.getElementById('codigoRGB').textContent
    copia = copia.toUpperCase()
     console.log(copia)
 
     controlC(copia.toLowerCase())
 
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

function hexToRgb(hex) {
 
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
      return r + r + g + g + b + b;
    });
  
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  function obtenerRGB(hex){
      return "rgb("+hexToRgb(hex).r + ", " + hexToRgb(hex).g + ", " + hexToRgb(hex).b +")"
  }