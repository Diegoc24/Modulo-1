'use strict';

const { queue } = require("@11ty/eleventy-cache-assets");

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   this.value = value; //9
   this.right = null;
   this.left = null;
}

BinarySearchTree.prototype.insert = function(value){

  if(value > this.value){
   if(this.right){
      this.right.insert(value);
   }else{
      this.right = new BinarySearchTree(value);
      return value;
   }
  }else{
   if(this.left){
      this.left.insert(value);
   }else{
      this.left = new BinarySearchTree(value);
      return value;
   }
  }

  
}

BinarySearchTree.prototype.contains = function(value){
   if(this.value === value) {
      return true;
   }
   if(this.right && this.right.contains(value)) {
      return true;
   }
   if(this.left && this.left.contains(value)) {
      return true;
   }
   return false;

}
BinarySearchTree.prototype.depthFirstForEach = function(cb, value){
  
   switch(value){

      case "pre-order":
         cb(this.value);
         if(this.left) this.left.depthFirstForEach(cb,value);
         if(this.right) this.right.depthFirstForEach(cb,value);
         
        
      break;
      case "post-order":
      

      if(this.left) this.left.depthFirstForEach(cb,value);
      if(this.right) this.right.depthFirstForEach(cb,value);
      cb(this.value);
      // izquierda
      // derecha
      // nodo
      break;
      default:
         if(this.left) this.left.depthFirstForEach(cb,value);
         cb(this.value);
         if(this.right) this.right.depthFirstForEach(cb,value);
         
      break;

   }

   

}
BinarySearchTree.prototype.size = function(){

   let count = 1;
   
   
   if(this.left){
      count += this.left.size();
      
   }
   if(this.right){
      count += this.right.size();
      
   }

   
      return count;
   
   
};
BinarySearchTree.prototype.breadthFirstForEach = function(cb){

   // if(!queue){
   //    var queue = [];
   // }
   cb(this.value);
   if(this.left){
      cola.push(this.left);
   }
   if(this.right){
      cola.push(this.right);
   }
   if(cola.length > 0){
   cola.shift().breadthFirstForEach(cb);
}
}
var newTree = new BinarySearchTree(8);
var cola = [];
BinarySearchTree.bind(cola);

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
