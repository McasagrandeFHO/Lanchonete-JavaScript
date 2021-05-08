$(document).ready(function () {
   $("#salgado").change(function () { 
       var escolhaSalgado = $("#salgado option:selected").val();
       })

    $("#botao").click(function(){
        alert(escolhaSalgado);
    })
       
   });


    
