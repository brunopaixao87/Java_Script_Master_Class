/**
 * As classes são um tipo especial de função
 * que atuam como um template para criação de objetos
 *
 * As classes não sofrem hoisting, não importando a forma como
 * foram declaradas - hoisting tipo não são pré inicializadas pode ser utilizadas antes da declaração tipo var
 *
 * Class são formadas por 3 tipo de membros: constructor, prototype methods e static methods
 *
 * Constructor é invocado no momento da instanciação de uma classe e serve
 * para inicializar um determinado objeto
 * 
 * Os prototypes methods dependem de uma instâcia para serem invocados
 * Os static methods não dependem de uma instância para serem invocados
 */

// outra forma é través expression
// const Square = class {}
class Square {
    constructor(side){
        this.side = side;
    }

    calculateArea(){
        return Math.pow(this.side, 2);
    }

    toString(){
        return `side: ${this.side}`;
    }

    static fromArea(area){
        return new Square(Math.sqrt(area));
    }
}
console.log(":: Classes ::");
const square = new Square(4);
console.log(square);
console.log(square.toString());
console.log(square.calculateArea());
const squareByArea = Square.fromArea(16);
console.log(squareByArea.toString());

/**
 * AS funcionam de forma similar as funções construtoras
 */
function SquareFucntion(side) {
    this.side = side;  
}

SquareFucntion.prototype.calculateArea = function(){
    return Math.pow(this.side, 2);
};

SquareFucntion.prototype.toString = function(){
    return `side: ${this.side} area: ${this.calculateArea()}`;
};

SquareFucntion.fromArea = function(area){
    return new SquareFucntion(Math.sqrt(area));
}

console.log(":: Funções Construtoras ::");
const squareFuction = new SquareFucntion(4);
console.log(squareFuction.toString());
console.log(SquareFucntion.fromArea(16));
 