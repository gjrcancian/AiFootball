function iaJogar(){
    let proxima_etapa = parseFloat(posicao_atual_player[0]) +1; 
  
    if(proxima_etapa < 8){
   
      casa = encontrarProximaEtapa(proxima_etapa); //this->cerebro.js
      jogada = proxima_etapa+''+casa;
      ultima_jogada = proxima_etapa+''+casa;
      situacao_atual= memoria_campo[proxima_etapa+''+casa];
  
  
        executarEtapa(); // game/controle_estado.js
  
      }else{
      gol();
     }
  }
  
