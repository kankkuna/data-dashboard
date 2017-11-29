/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);

window.addEventListener('load', function() {
  /*var pag = document.getElementsByTagName('globe');
  var divsecond = document.getElementsByTagName('info');
  pag.classList.add('divesecond');
  cli.innerHTML = 'New Heading';*/

  var boton = document.getElementById('cono1');
  boton.addEventListener('click', function(event) {
    event.preventDefault();
    var olddiv = document.getElementById('principal');
    var newdiv = document.getElementById('two');
    olddiv.classList.add('ocultar');
    newdiv.classList.add('mostrar');
    /*papa.appendChild('newdiv');
    NECESITO QUE LOS DIV SE INTERCAMBIEN*/

    
  });
});
