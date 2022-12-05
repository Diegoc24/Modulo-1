'use strict';

function BinarioADecimal(num) {
   let it = 0;
   let decimal = 0;
   let suma = 0;
   for(i = num.length -1; i > -1;i--){

      decimal = (num[i] * (2 ** it));

      it += 1;

      suma = suma += decimal;

   }

    return suma;
}

function DecimalABinario(num) {
   let numero = num;
      let boo = false;
      let resto = 0;
      let bin = [];
   for(i = 0;numero > i;i++){
  
     
  
    
      
      resto = numero % 2;
      numero = numero / 2;
      numero =  Math.round(numero);
      console.log(resto);
   

   bin.push(resto);
   }
   return bin;
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
