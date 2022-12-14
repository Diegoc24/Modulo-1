function Nodo(data){

    this.data = data;
    this.next = null;


}
function List(){

    this.head = null;
    this._length = 0;

}

var lista = new List();

List.prototype.add = function(data){
    var nodo = new Nodo(data);
    var current = this.head;
  

    if(!current){

        this.head = nodo;
        this._length++;
        
        return nodo;
        

    }
    while(current.next){
        current = current.next;
        
    }
    
    current.next = nodo;
    this._length++;
    
    return nodo;
    



}

List.prototype.getAll = function(){

    var current = this.head;

    if(!current){

        console.log("esta lista esta vacia");
        return current;

    }
    while(current){

        console.log(current.data);
        current = current.next;


    }
    return;

}

lista.add("diego");
lista.add("juan");
lista.add("jose");
lista.add("nico");
lista.getAll();