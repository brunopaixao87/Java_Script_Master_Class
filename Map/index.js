/**
 * size: Retorna a quantidade de elementos
 * set: Adiciona um par de chave e valor
 * forEach: Itera sobre o mapa
 * has: Retorna true se a chave existir
 * get: Retorna o valor do elemento de uma determinada chave passada por parametro
 * delete: Remove um par de chace e valor
 * clear: Remove todos os elementos
 */
const timesUnits = new Map([["second", 1], ["minute", 60], ["hour", 3600]]);
console.log(timesUnits);
console.log(Array.from(timesUnits));

console.log(timesUnits.size);
console.log("   ");
timesUnits.set("2 minutes", 120);

timesUnits.forEach((value, key) => console.log(key, value));

console.log(timesUnits.has("hour"));
console.log(timesUnits.has("day"));

//diferença obj map = Objeto converte todas suas propriedades para string
console.log("   ");
const obj = {};
obj[10] = "Number";
obj["10"] = "String";
obj[true] = "Boolean";
obj["true"] = "String"
//Aparece tudo string
console.log(obj[10]);
console.log(obj["10"]);
console.log(obj[true]);
console.log(obj["true"]);
//Somente duas propriedades
console.log(obj);
console.log("   ");
//Diferença no map
const objMap = new Map();
objMap.set(10, "Sumber");
objMap.set("10", "String");
objMap.set(true, "boolean");
objMap.set("true", "String");
console.log(objMap.get(10));
console.log(objMap.get("10"));
console.log(objMap.get(true));
console.log(objMap.get("true"));
console.log(objMap);