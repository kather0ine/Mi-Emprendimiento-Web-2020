$(function(){

    //popover
    
        $('[data-toggle="popover"]').popover()
    });
    
    

    //tooltip
    $('[data-toggle="tooltip"]').tooltip();    
      
    
    $("#enviar").click(function () {
        alert("¡Ya estás suscrit@! Revisa tu correo con la información ;)");
      })
    
     //habilitar tooltip 
      var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
          var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
              return new bootstrap.Tooltip(tooltipTriggerEl)
      
          })
    