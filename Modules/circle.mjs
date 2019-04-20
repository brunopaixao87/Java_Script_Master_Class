import {PI, pow as POW} from './math';

 export default class Circle{
     constructor(radius){
         this.radius = radius;
     }

     get area(){
         return PI * POW(this.radius, 2);
     }
 }