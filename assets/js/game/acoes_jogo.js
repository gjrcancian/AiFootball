
function recuperarJogo(){
    console.log("posicao"+posicao_atual_player);
  
    posicao_atual_player = posicao_inicial_player;
    $("#jogador_" + posicao_atual_player).show();
  status_game =1;
  }
  
  function gol(){
    pontos = pontos +20;
    atualizaPlacar();
    status_game=2;
   
    $("#jogador_" + posicao_atual_player).hide();
   
    if(pontos >= 0){
      $("#goleiro_82").hide();
      $("#gol_82").show(); 
      $("#comemorando_" + posicao_atual_player).show();
  
    }else{
    $("#derrotado_" + posicao_atual_player).show();
  
    }
  
    
  }
  function atualizarCronometro() {
    segundos++;
    if (segundos === 60) {
      segundos = 0;
      minutos++;
    }
    const minutosFormatados = minutos.toString().padStart(2, '0');
    const segundosFormatados = segundos.toString().padStart(2, '0');
    document.getElementById('timer').textContent = `${minutosFormatados}:${segundosFormatados}`;
  
  
  
  }
  function atualizaPlacar(){
    if(pontos < 0){
      ponto_invertido  = Math.abs(pontos);
      $("#resultado_placar").html('<span style="color:brown;">'+ponto_invertido+'</span>');
  
    }else{
      $("#resultado_placar").html('<span style="color:green;">'+pontos+'</span>');
    }
  }
function iniciarJogadorAi(casa){
    posicao_inicial_player =0+""+casa;
    posicao_atual_player =posicao_inicial_player;
    posicao[`1${casa}`] = 1;
console.log('sads1'+casa);
  }
  
function iniciarContagemEncerramentoPorTempo(){
  setTimeout(() => {
      clearInterval(intervalId);
    }, 60000);
}

function iniciarPosicoes(){

  for (let etapa = 0; etapa < 8; etapa++) {
    for (let casa = 0; casa < 5; casa++) {
      posicao[`${etapa}${casa}`] = 0;
    }
  }
  memorizarCampo(posicao);
  etapa = 0;
  casa = sortearCasa();
  exibirJogadorAi(etapa,casa);
  exibirChaveGol();
  iniciarJogadorAi(casa);
  
  sortearPosicoesRival();
  }