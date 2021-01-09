// - Agora inverta o lado do triângulo. Por exemplo:
//
// n = 5
//
//     *
//    **
//   ***
//  ****
// *****

let n = 5;
let asteriscos = ``;

for (let i = 0; n >= i; n -= 1) {

    for (let j = 0; j >= i; j += 1) {
      if (asteriscos.length === n) {
        break;
  
      } else {
        asteriscos += `*`;
  
      }
  
      console.log(asteriscos)
    }
  }