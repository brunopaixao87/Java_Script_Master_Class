/**
 * Os generators tornam possível pausar a execução
 * de uma determinada função, permitindo a utilização do
 * event loop de forma cooperativa
 */

//Para definir generator basta adicionar *
 function* forever(){
     let value = 1;
     while(true){
         yield value++;
     }
 }

 function toDay(){
     const date = new Date();
     console.log(date);
 }

 const foreverGenerator = forever();
 console.log(foreverGenerator);
 console.log(Object.getOwnPropertyNames(foreverGenerator.__proto__.__proto__));
 foreverGenerator.next();
 toDay();

function createIterable(...array){
    return {
        *[Symbol.iterator](){
            let index = 0;
            while(index < array.length){
                yield array[index++];
            }
        }
    }
}

const languages = createIterable("Fortran", "Lisp", "COBOL");
for(language of languages){
    console.log(language);
}


function sum(a, b) {
    return new Promise(function (resolve) {
        setTimeout(function() {
            resolve(a + b);
        }, 1000);
    });
}
function async(fn) {
    const gen = fn();
    asyncRercusiva(gen);
}
function asyncRercusiva(gen, value) {
    const obj = gen.next(value);
    if (obj.done) return;
    obj.value.then(function (result) {
        asyncRercusiva(gen, result);
    });
}
async(function* () {
    const a = yield sum(2, 2);
    const b = yield sum(4, 4)
    const result = yield sum(a, b);
    console.log(result);
});

