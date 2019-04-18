/**
 * Acessor methods quando invocados retornam informações especifica sobre o array
 * indexOd: Retorna a posição do primeiro elemento encontrado
 * lastIndexOf: Retorna a posição do último elemento encontrado
 * includes: Retorna true se o elemento existir no array
 * concat: Retorna um novo array resultante da concatenação de um ou mais arrays
 * slice: Retorna partes de um determinado array de acordo com a posição de início e fim
 * join: Converte o array para um String, juntando os elementos com base em um separador
 */

const languages = ["Python", "C", "Java"];
console.log(languages.indexOf("Python"));
console.log(languages.lastIndexOf("Python"));

console.log("  ");
console.log(languages.includes("Python"));
console.log(languages.includes("JavaScript"));

const ooLanguages = ["Java", "Smalltalk", "C++", "Simula"];
const functionLanguages = ["Haskell", "Scheme", "Erlang", "Elixir"];
const concatLanguagues = [].concat(ooLanguages, functionLanguages);
console.log("  ");
console.log(concatLanguagues);

//slice da posicao init até fim-1
console.log("  ");
console.log(concatLanguagues.slice(0, 3));
console.log(concatLanguagues.slice(2, 4));
console.log(concatLanguagues.slice(1));

console.log("  ");
console.log(concatLanguagues.join(";"));

