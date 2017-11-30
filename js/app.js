/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);
/*
window.addEventListener('load', function() {
  /*var pag = document.getElementsByTagName('globe');
  var divsecond = document.getElementsByTagName('info');
  pag.classList.add('divesecond');
  cli.innerHTML = 'New Heading';

  /*var boton = document.getElementById('cono5');
  boton.addEventListener('click', function(event) {
    event.preventDefault();
    var olddiv = document.getElementById('principal');
    var newdiv = document.getElementById('two');
    olddiv.classList.add('ocultar');
    newdiv.classList.add('mostrar');
    /*papa.appendChild('newdiv');
});
*/
window.addEventListener('load', function(){

 //variables por sede

var lima = data.LIM;
 var arequipa = data.AQP;
 var mexico = data.CDMX;
 var chile = data.SCL;

 //variables por Bootcamp

 var boot1lim = data.LIM['2016-2'];
 var boot2lim = data.LIM['2017-1'];
 var boot3lim = data.LIM['2017-2'];
 var boot1aqp = data.AQP['2016-2'];
 var boot2aqp = data.AQP['2017-1'];
 var boot1cdmx = data.CDMX['2016-2'];
 var boot2cdmx = data.CDMX['2017-1'];
 var boot1scl = data.SCL['2016-2'];
 var boot2scl = data.SCL['2017-1'];
 var boot3scl = data.SCL['2017-2'];

 //coders por Bootcamp
 var coder1lim = data.LIM['2016-2']['students'];
 var coder2lim = data.LIM['2017-1']['students'];
 var coder3lim = data.LIM['2017-2']['students'];
 var coder1aqp = data.AQP['2016-2']['students'];
 var coder2aqp = data.AQP['2017-1']['students'];
 var coder1cdmx = data.CDMX['2017-1']['students'];
 var coder2cdmx = data.CDMX['2017-2']['students'];
 var coder1scl = data.SCL['2016-2']['students'];
 var coder2scl = data.SCL['2017-1']['students'];
 var coder3scl = data.SCL['2017-2']['students'];

 var botonCoder = document.getElementById('coco');

botonCoder.addEventListener('click', function(event) {

}
}
