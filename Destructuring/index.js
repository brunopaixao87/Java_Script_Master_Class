const language = "C;Dannis Ritchie;1972";
const arrayLanguage = language.split(";");
console.log(arrayLanguage);

//Por meio do destructuring é possível extrair valores de um array criando váriaveis em ordem, de acordo com a posição de cada elemento;
const [name, author, year] = language.split(";");
console.log(name, author, year);
const [, author2, year2] = language.split(";");
console.log( author2, year2);

//No destructuring é possível definir valores padrões
const languageD = "C;Dannis Ritchie".split(";");
const [nameD = "-", authorD = "-", yearD="-"] = languageD;
console.log(nameD, authorD, yearD);

//No destructuring é possível tb extrai elementos de objetos
//Quando a variavel que irá receber tem que ter o mesmo nome da propriedades do objeto
let languageO = {
    nameO: "C",
    authorO: "Dannis Ritchie",
    yearO:"1972"
};

const {nameO, authorO, yearO} = languageO;
console.log(nameO, authorO, yearO);

//Quando a variavel não precisa ter o mesmo nome da propriedade do objeto
const {nameO: a, authorO: b, yearO: c} = languageO;
console.log(a, b, c);

//Referenciar propriedades de objetos que estão dentro de outros objetos
languageO = {... languageO, company:{name: "Bell Labs"}}
console.log(languageO);
const {nameO: a2, authorO: b2, yearO: c2, company:{name:d}} = languageO;
console.log(a, b, c, d);

//Aplicanto no parametros de uma função, tanto com arrays quanto com objetos
const sum = function({a1, b1}){
    return a1 + b1
};

console.log(sum({a1: 2, b1:2, c1:3}));