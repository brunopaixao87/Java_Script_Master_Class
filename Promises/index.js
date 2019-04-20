/**
 * As promises são objetos responsáveis por modelar
 * comportamento assíncrono, permitindo o seu tratamento 
 * de uma forma mais fácil e direta
 * 
 * Para criar uma promise basta instaciá-la,
 * executando a função resolve em caso de sucesso,
 * sendo tratado por meio de then
 */

 function sum(a, b){
     return new Promise(function(resolve, reject){
         if(!a || !b) return reject("Invalid input");
        setTimeout(function(){
            resolve(a+b);
        }, 1000);
     });
 }

sum(2).then(result =>  console.log(result)).catch(err => console.log(err));
/*
Encadeando Promisse com unico tratamento de exceções
sum(2, 2).then(function(a){
    return sum(4, 4).then(function(b){
        return sum(a).then(function(result){
            console.log(result);
        })
    })
}).catch(function(err){
    console.log(err);
});*/

//Primises assicronas
console.time("performed");
Promise.all([
    sum(2, 2),
    sum(4, 4)
]).then(function(values){
    const [a, b] = values;
    return sum(a, b).then(function(result){
        console.log(result);
        console.timeEnd("performed")
    });
}).catch(function(err){
    console.log(err);
});

//Promice.race retorna a primeira com sucesso
