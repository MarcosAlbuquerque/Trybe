/*

2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
Copiar
n = 5

*
**
***
****
*****

*/

let n = 6;
let asteriscos = ``;

for (let i = 0; i <= n; i += 1) {

    for (let j = 0; j <= i; j += 1) {
      if (asteriscos.length === n) {
        break;
  
      } else {
        asteriscos += `*`;
  
      }
  
      console.log(asteriscos)
    }
  }