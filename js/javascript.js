$("cuadrado-blanco").on("click",function(){
  if ($("cuadrado-blanco").hasClass("cuadrado-blanco")) {
    $("cuadrado-blanco").removeClass("cuadrado-blanco").addClass("cuadrado-negro");
    $("cuadrado-negro").removeClass("cuadrado-negro").addClass("cuadrado-blanco");

  }
  else if ($("cuadrado-negro").hasClass("cuadrado-negro")){
    $("cuadrado-negro").removeClass("cuadrado-negro").addClass("cuadrado-blanco");
    $("cuadrado-blanco").removeClass("cuadrado-blanco").addClass("cuadrado-negro");
  }
});
