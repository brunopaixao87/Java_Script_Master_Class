/**
 * Saiu no ES8 de modo oficial
 * O async/await facilita a interação com chamadas assíncronas,
 * aguardando o retorno de uma determinada promise
 */

 function sum(a, b){
     return new Promise((resolve, reject) => {
         if(!a || !b) reject("erro input");
         setTimeout(function(){
             resolve(a + b);
         }, 100);
     });
 }

 sum(2, 2).then(function(a){
     sum(4, 4).then(function(b){
         sum(a, b).then(function(result){
             console.log(result);
         });
     });
 });

 (async function() {
   try {
     const a = sum(2, 2);
     const b = sum(4, 4);
     const result = sum(a, b);
     console.log(result);
   } catch (e) {
       console.log(e);
   }
 })();
