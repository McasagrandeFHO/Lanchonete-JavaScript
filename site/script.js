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
        if($valorBebida == "coca") {
            $valorBebida = 5.00;
        }
        else if($valorBebida == "pepsi") {
            $valorBebida = 5.0;
        }
        else if($valorBebida == "guarana") {
            $valorBebida = 5.50;
        }    
        else if($valorBebida == "suco") {
            $valorBebida = 4.00;
        } 
        
        $valorTotal = $valorSalgado + $valorBebida;

        if($("#flexRadioDefault1").is(":checked")){
            $desconto = $valorTotal * 0.05;
            $valorTotal = $valorTotal - $desconto;
        }
        
        if($("#checkViagem").is(":checked")) {
            $valorTotal = $valorTotal + 1.50;
        }

        alert("Total da compra: R$" + $valorTotal);
        
    });
        
   });


    
