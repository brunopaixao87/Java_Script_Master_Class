/**
 * WeakMap é um objeto, similar ao Map, que permite apenas chaves do tipo Object
 * a mantém as referências de forma fraca, sendo VOLÁTIL e não INTERÁVEL
 * set: Adiciona um par de chave e valor
 * has: Retorna true se a chave existir
 * get: Retorna o valor de uma determinada chave
 * delete: Remove um par de chave e valor
 */

 const weekMap = new WeakMap(); 
 const obj1 = {};
 const obj2 = {};
 console.log(obj1, obj2);
 weekMap.set(obj1, "obj1");
 weekMap.set(obj2, "obj2");
 console.log(weekMap)
 console.log(weekMap.has(obj1));
 console.log(weekMap.has(obj2));

 console.log(weekMap.get(obj1));
 console.log(weekMap.get(obj2));

 //Quando utilizar
 const areas = new WeakMap();
 const rectangle1 = {
     x: 10,
     y: 2
 };

 const rectangle2 = {
    x: 5,
    y: 3
};


function calculateArea(rectangle) {
    if(areas.has(rectangle)){
        return areas.get(rectangle);
    }
    const area = rectangle.x * rectangle.y;
    areas.set(rectangle, area);
    return area;
}
console.log("   ");
console.log(calculateArea(rectangle1));
console.log(calculateArea(rectangle1));
console.log(calculateArea(rectangle2));

//Pq utilizar weekMap em vez da map, pq se setar null ao objeto key fica elegivel para garbache(referências de forma fraca)
rectangle1 = null;
rectangle2 = null;
