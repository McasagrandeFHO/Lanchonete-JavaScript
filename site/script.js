$(document).ready(function () {  

    $("#botao").click(function(){
        $valorSalgado = $("#salgado").val();
        if($valorSalgado == "coxinha") {
            $valorSalgado = 4.00;
        }
        else if($valorSalgado == "hamburger") {
            $valorSalgado = 5.0;
        }
        else if($valorSalgado == "esfirra") {
            $valorSalgado = 4.50;
        }    
        else if($valorSalgado == "churrasco") {
            $valorSalgado = 4.50;
        }    
        

        $valorBebida = $("#bebida").val();
        if($valorSalgado == "coca") {
            $valorSalgado = 5.00;
        }
        else if($valorSalgado == "pepsi") {
            $valorSalgado = 5.0;
        }
        else if($valorSalgado == "guarana") {
            $valorSalgado = 5.50;
        }    
        else if($valorSalgado == "suco") {
            $valorSalgado = 4.00;
        }    


    });
        
   });


    
