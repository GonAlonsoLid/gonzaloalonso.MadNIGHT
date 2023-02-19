var pestañas = document.querySelectorAll('.pestañas .pestaña');

for (var i = 0; i < enlaces.length; i++) {
  enlaces[i].addEventListener('click', function(e) {
    abrirPestana(e.target.hash);
  });
}



function abrirPestana(evt, nombrePestana) {
    var i, contenidoPestana, linksPestana;
    contenidoPestana = document.getElementsByClassName("pestaña");
    for (i = 0; i < contenidoPestana.length; i++) {
      contenidoPestana[i].style.display = "none";
    }
    linksPestana = document.getElementsByClassName("linkPestana");
    for (i = 0; i < linksPestana.length; i++) {
      linksPestana[i].className = linksPestana[i].className.replace(" activo", "");
    }
    document.getElementById(nombrePestana).style.display = "block";
    evt.currentTarget.className += " activo";
  }
  

