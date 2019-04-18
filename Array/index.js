const languages = ["Java", "Python"];
console.log(languages); 

console.log("Type Array -> ", typeof languages); // array em javascritp é Object

console.log(languages.length); 
delete languages[1]; //não aconselhável utilizar delete por causa que não tem impacto no legth;
console.log(languages.length); 