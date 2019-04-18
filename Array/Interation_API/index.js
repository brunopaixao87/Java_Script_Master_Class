/**
 * forEach: Executa a função passada por parâmetro para cada elemento
 * filter: Retorna um novo array contendo somente os elementos que retornaram true na função passada por parâmetro
 * find: Retorna o primeiro elemento que retornou true na função passada por parâmetro
 * some: Retorna true se um ou mais elementos retornaram true na função passada por parâmetro
 * every: Retorna true passada por parâmetro
 * map: Retorna um novo array com base no retorno de funçã passada por parâmetro
 * reduce Retorna um valor com base no retorno da função passada por parâmetro
 */

let frameworks = ["Angular", "Vuejs", "React"];
frameworks.forEach(framework => console.log(framework));

frameworks = [
  {
    name: "Angular.js",
    contributors: 1548
  },
  {
    name: "Ember.js",
    contributors: 746
  },
  {
    name: "Vue.js",
    contributors: 248
  }
];

const result2 = frameworks.filter(function(framework) {
    return framework.contributors < 1000;
});

//ArrowFunction
const result = frameworks.filter(framework => framework.contributors < 1000);
console.log("   ");
console.log(result);


const resultFind = frameworks.find(framework => framework.name === "Angular.js");
console.log("   ");
console.log(resultFind);

//retorna true se pelo menos um elemento corresponde a regra da função passada por parametro
const resultSome =  frameworks.some(framework => framework.name.includes("js"));
console.log("   ");
console.log(resultSome);

//retorna true se todos elementos correspondem a regra da função passada por parametro
const resultEvery = frameworks.every(framework => framework.name.includes("js"));
console.log("   ");
console.log(resultEvery);

//retorna um novo array com base na regra passada na function
const resultMap = frameworks.map(framework => framework.name);
console.log("   ");
console.log(resultMap);

//reduce com arrowFuction
const resultReduce = frameworks.reduce(((total, framework) => total + framework.contributors), 0);
console.log("   ");
console.log(resultReduce);

const resultReduce2 = frameworks.reduce(function(total, framework){
    return total + framework.contributors;
}, 0);

console.log("   ");
console.log(resultReduce2);