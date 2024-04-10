function sortearPosicoesRival(){
    
    for (player = 0; player < 10; player++) {
     
            casa =sortearCasa();
            etapa = sortearEtapasPermitidasAosRivais();
            $("#rival_" + etapa + casa).show();
            
            if(posicao[`${etapa}${casa}`] != 2){
                posicao[`${etapa}${casa}`] = 2;
                pontos = pontos +2;
            }else{
                player--;
            }
    
        }

    }

  function sortearEtapasPermitidasAosRivais(){
    return Math.floor(Math.random() * 7) + 1;


  }

  function sortearCasa(){

    return  Math.floor(Math.random() * 5);
  }
