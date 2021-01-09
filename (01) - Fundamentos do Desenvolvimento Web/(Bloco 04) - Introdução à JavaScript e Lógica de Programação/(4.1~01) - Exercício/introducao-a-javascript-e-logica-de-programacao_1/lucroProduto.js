//Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.


let custoProduto = 800;
let vendaProduto = 1000;
let valorCustoTotal;
let semImpostoSobreCusto;
let comImpostoSobreCusto;
let lucro;

comImpostoSobreCusto = custoProduto * 0.2; //20% de acréscimo
semImpostoSobreCusto = custoProduto * 0.2; //20% de desconto

console.log("Valor Total do Produto com 20% : " + (custoProduto + comImpostoSobreCusto));
console.log("Valor Total do Produto sem 20% : " + (custoProduto - semImpostoSobreCusto));

valorCustoTotal = custoProduto + comImpostoSobreCusto

lucro = vendaProduto - valorCustoTotal

console.log("Lucro Total= " + (lucro * 1000) )
