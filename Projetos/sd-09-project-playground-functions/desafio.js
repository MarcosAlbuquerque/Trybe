// Desafio 6
function highestCount(param) {
  let ultimoNumero = param.sort((a, b) => a - b)[param.length - 1]
  let qtdNumerosRepetidos = 0;

  for (let i = 0; i <= ultimoNumero; i++ ) {
    if (param[i] === ultimoNumero) {
      qtdNumerosRepetidos += 1

    }
  }

  console.log(qtdNumerosRepetidos)

  //return qtdNumerosRepetidos
  
}

highestCount([9, 1, 2, 3, 9, 5, 7, 5, 4, 6, 9, 2, 9, 12, 9])
