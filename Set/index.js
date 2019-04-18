/**
 * Um Set é objeto que armazena elementos ÚNICOS, que podem ser de qualquer tipo de dados.
 * size: Retorna a quantidade de elementos
 * add: adiciona um elemento
 * forEach: itera sobre o set
 * has: Retorna true se o elemento existir
 * delete: Remove um elemento
 * clear: Remove todos os elementos
 */

 const charsets = new Set(["ASCII", "ISO-8859-1", "UTF-8"]);
 //Voltando para um array
 console.log(Array.from(charsets));

 const array = [];
 array.push(10);
 array.push(10);
 array.push(10);
 console.log(array);

 const set = new Set();
 set.add(10);
 set.add(10);
 set.add(10);
 console.log(set);

 let array2 = [10, 10, 10];
 const set2 = new Set(array2);
 array2 = Array.from(set2);
 console.log(array2);
 
 

