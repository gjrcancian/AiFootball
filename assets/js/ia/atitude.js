
      
function mudarPosicao(acao){
  if(acao =='avancar'){

    $("#jogador_" + posicao_atual_player).hide();
    $("#jogador_" + jogada).show();
  }

}
  function avancar(jogada_atual){
    mudarPosicao('avancar');
    posicao_atual_player= jogada_atual;
    pontos =pontos+queEtapaEstou()+1;
  }

  
function encontrarProximaEtapa(){
  
  let casa_escolhida = 0;
  var casas_a_evitar = [];
  let contador = 0;
  
  for(possivel_casa = 0; possivel_casa < 5; possivel_casa++){
    
      if(relembrarCaminho(queEtapaEstou()+1, possivel_casa) == 'boom'){
       
          casas_a_evitar[contador]= possivel_casa;
          contador++;
          
      }
  }
  do {
  
      casa_escolhida =sortearCasa(); // game/regras_jogo.js
 
  } while (
 
      casas_a_evitar.includes(casa_escolhida)

  );

  return(casa_escolhida);

}