function queEtapaEstou(){

    return(parseFloat(posicao_atual_player[0]));
}

function relembrarCaminho(proxima_etapa, casa_procurar){
    
    situacao = memoria_campo[proxima_etapa+''+casa_procurar];
    
    if(situacao == 1){
        return "boom";
    }else if(situacao == 0){
        return "desconhecido";
    }else if(situacao == 2){
        return "sucesso";
    }
}

  function memorizarCampo(posicao){

      memoria_campo = JSON.parse(JSON.stringify(posicao));

  }
  
  