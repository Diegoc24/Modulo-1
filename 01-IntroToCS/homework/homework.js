'use strict';

function BinarioADecimal(num) {
 
   
   let it = 0;
   let decimal = 0;
   let suma = 0;
   for(let i = num.length -1; i > -1;i--){

      decimal = (num[i] * (2 ** it));

      suma = suma += decimal;
      
      it += 1;
   }

    return suma;
}

function DecimalABinario(num) {
   
   let v = num % 2;
   let bin = [v];
   
   
   let numero = num;
   let resto = 0;
   while(numero > 1) {  
   
   
   numero = (numero / 2);
   numero = Math.floor(numero);
  
   resto = numero % 2;
   bin.unshift(resto);
   
   }
   bin = bin.join("");
return bin;
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
