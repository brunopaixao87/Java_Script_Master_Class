/**
 * WeakSet é um objeto, similar ao Set, que permite apenas chaves do tipo Object
 * a mantém as referências de forma fraca, sendo VOLÁTIL e não INTERÁVEL
 * 
 * set: Adiciona um par de chave e valor
 * has: Retorna true se a chave existir
 * delete: Remove um par de chave e valor
 */

 const weakSet = new WeakSet();
 const obj1 = {};
 const obj2 = {};

 weakSet.add(obj1);
 weakSet.add(obj2);

//Como não interavel não irá exibir nada
 console.log(weakSet)
 console.log(weakSet.has(obj1));

 //Utilização WeakSet - criar coleção sem se preocupar com memoryleaks - sem vazamento de memória
 const circles = new WeakSet()
 function Circle(radius){
     circles.add(this);
     this.radius = radius;
 }

 Circle.prototype.calculateArea = function(){
     if(!circles.has(this)) throw "Invalid object";
     return Math.PI * Math.pow(this.radius, 2);
 };

 const circle1 = new Circle(10);
 //Não utilizando função construtura
 const circle2 = {
     radius: 5
 };
 console.log("  ");
 console.log(circle1.calculateArea());
 //Somente cacular se for criado pela função construtora
 console.log(circle1.calculateArea.call(circle2));
