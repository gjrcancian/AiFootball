function processarEtapas(){
  
    const a_cada_segundo = 1000;

    setInterval(() => {

        atualizarCronometro();
    
        if (status_game === 1) {
            iaJogar();
        }
        
        if (status_game === 0) {
            recuperarJogo();  
        }
        
        atualizaPlacar();
    }, a_cada_segundo);
    

}



  function executarEtapa(){
    let encontrou_inimigo = posicao[jogada] == 2;
    
    if(encontrou_inimigo){
        animarExplosao();
        aplicarRegrasExplosao();
    }
  
  
    if(posicao[jogada] == 0){
      avancar(jogada);
  
      console.log("sucesso");
    }
    
    
  }
