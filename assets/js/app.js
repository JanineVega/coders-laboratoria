
// var peru=document.getElementById("peruan");
// var peru2=document.getElementById("peruac");
// //var contenedor=document.getElementById("contenedor");

var mostrar=document.getElementById("seleccion");

mostrar.onchange=function (){
  if(mostrar.value==1){
    document.getElementById("chilenas").style.display="inline-block";
    document.getElementById("peruan").style.display="none";
    document.getElementById("peruac").style.display="none";
  }

  if (mostrar.value==2) {
    document.getElementById("chilenas").style.display="none";
    document.getElementById("peruan").style.display="inline-block";
    document.getElementById("peruac").style.display="none";
  }

  if (mostrar.value==3) {
    document.getElementById("chilenas").style.display="none";
    document.getElementById("peruan").style.display="none";
    document.getElementById("peruac").style.display="inline-block";
  }
  if(mostrar.value==0){
    document.getElementsByTagName("img").style.display="inline-block";
  }

}
