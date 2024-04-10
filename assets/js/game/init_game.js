let segundos = 0;
let minutos = 0;
let status_game= 1;
let jogada=0;
let ultima_jogada = 0;
let posicao = {};
let memoria_campo = {};
let posicao_atual_player;
let pontos = 0;
iniciarPosicoes();
function initGame(){
  
  processarEtapas();
  iniciarContagemEncerramentoPorTempo();

}
  