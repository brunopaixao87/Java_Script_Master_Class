//Os mutator methods quando invocados modificam o array
/**
 * push: adiciona um elemento no final
 * pop: Remove um elemento do final
 * shift: adiciona um elemento do início
 * shift: Remove um elemento do início
 * splice: Remove, substitui ou adiciona um ou mais elementos em uma determinada posição
 * sort: Ordena os elementos de acordo com um funcção de ordenação
 * reverse: Inverte a ordem dos elementos
 * fill: Preenche os elementos de acordo com a posição de incício e fim
 */

let languages = ["Python", "C", "Java"];
console.log(languages);
console.log(languages.push("Ruby"));
console.log(languages.push("Go"));
console.log(languages.pop());

languages = ["Python", "C", "Java"];
console.log(languages);
console.log(languages.unshift("Ruby"));
console.log(languages.unshift("Go"));
console.log(languages);
console.log(languages.shift());
console.log(languages.shift());
console.log(languages);

languages = ["Python", "C", "Java"];
console.log(languages);
//Adiciona a posição que iniciar a remover e quantos vão remover
console.log(languages.splice(1, 1));
//splice -> Remove, substitui ou adiciona um ou mais elementos em uma determinada posição
languages.splice(1, 0, "C++", "C#");
console.log(languages);

languages.splice(1, 2, "C");
console.log(languages);

languages = [
  {
    name: "Python",
    year: 1991
  },
  {
    name: "C",
    year: 1972
  },
  {
    name: "Java",
    year: 1995
  }
];
// -1 e 0 fica como está, 1 inverte
languages.sort((a,b) => a.name.localeCompare(b.name));
console.log(languages);

console.log("   ");
languages.reverse();
console.log(languages);

console.log("   ");
languages = ["Python", "C", "Java"];
languages.fill("JavaScritp");
console.log(languages);
console.log("   ");
languages = ["Python", "C", "Java"];
languages.fill("JavaScritp", 1);
console.log(languages);
