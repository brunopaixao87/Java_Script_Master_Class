/**
 * São convenções implementadas por Arrays, Maps, Sets e Strinng que tornam
 * iteráveis por meio de um protocolo de iteração
 * Todo Iterable tem uma propriedade de chave Symbol.iterator que define o protocolo
 * de iteração para o objeto
 */
const languages = ["Fortran", "Lisp", "Cobol"]; //Três linguages do final da decada de 50
for (let i = 0; i < languages.length; i++) {
  console.log(languages[i]);
}

//itera sobre as chaves do array
for (let i in languages) {
  console.log(i, " - ", languages[i]);
}

languages.forEach(function(language) {
  console.log(language);
});
//Arrowfunction
languages.forEach(language => console.log(language));

//No ES5
for (let language of languages) {
  console.log(language);
}

const classicLanguages = ["Fortran", "Lisp", "Cobol"];
const modernLanguages = ["Python", "Ruby", "JavaScript"];

//spreadOperator
const languagesSpread = [...classicLanguages, ...modernLanguages];
console.log(languagesSpread);

const languagesMap = [["Fortran", 1957], ["Lisp", 1958], ["Cobol", 1959]];
console.log(...languagesMap);
for ([language, year] of languagesMap) {
  console.log(language, year);
}
/**
 * Todo Iterable tem uma propriedade de chave Symbol.iterator que define o protocolo
 * de iteração para o objeto
 */
const iterator = languages[Symbol.iterator]();
console.log(iterator);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

//Criando uma função fabrica Iterator
//Todo iterator tem a função Symbol.iterator
console.log("   ");
function createIterable(...array) {
  return {
    [Symbol.iterator]() {
      let index = 0;
      return {
        next() {
          if (index < array.length) {
            return {
              value: array[index++],
              done: false
            };
          }
          return {
            value: undefined,
            done: true
          };
        }
      };
    }
  };
}

const iterable = createIterable("Fortran", "Lisp", "Cobol");
const iteratorF = iterable[Symbol.iterator]();
console.log(iteratorF.next());
console.log(iteratorF.next());
console.log(iteratorF.next());
console.log(iteratorF.next());
console.log(... iterable);
