let peca = "bISPO";


switch (peca.toLowerCase()) {
  case "rei":
    console.log("Peça - Rei:\n" + "Pode mover-se em qualquer direção, porém apenas uma casa por vez, como indicam os pontos vermelhos na figura abaixo.");
    break;

  case "dama":
    console.log("Peça - Dama:\n" + "Assim como o Rei, pode mover-se em qualquer direção (vertical, horizontal e diagonal), porém quantas casas quiser, desde que estejam livres.");
    break;

  case "torre":
    console.log("Peça - Torre:\n" + "Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.");
    break;

  case "bispo":
    console.log("Peça - Bispo:\n" + "Move-se na diagonal, quantas casas quiser. O Bispo que iniciar a partida em uma casa branca somente poderá transitar pelas brancas, enquanto o Bispo que inicia em uma casa preta somente poderá transitar pelas casas pretas.");
    break;

  case "cavalo":
    console.log("Peça - Cavalo:\n" + "É a única peça que pode saltar sobre as outras peças do tabuleiro, sejam elas amigas ou inimigas. O movimento executado pelo Cavalo é conhecido por “um-dois” ou “em L”. Ele pode andar duas casas na horizontal e uma na vertical, ou duas na vertical e uma na horizontal, uma na horizontal e duas na vertical, e assim por diante. Quando a casa de saída do Cavalo for escura, a casa de chegada será clara, e vice-versa.");
    break;

  case "peão":
    console.log("Peça - Peão:\n" + "Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas. O peão é a única peça que não pode retroceder, e também a única que efetua a captura com um movimento diferente do utilizado para avançar no tabuleiro. O peão pode capturar as peças que estejam uma fileira acima, mas nas colunas adjacentes a sua.");
    break;

  default: console.log("Peça não encontrada.")
}


//Informações das peças
//https://www.soxadrez.com.br/conteudos/movimentos/
