let helper = require('./helper');

function LinkedList(){

  this.head = null;
  this.length = 0;

  function Node(key){
    this.key = key;
    this.next = null;
  }

  this.append = function(key){
    let newNode = new Node(key);
    let node = this.head;

    if(node == null){
      node = newNode;
    } else {
      while(node.next){
        node.next = node;
      }

      node.next = newNode;
    }

    this.length++;
  }

  this.print(){
    if(!head){
      console.log("Empty List");
    } else {

      let head = this.head;

      while(){

      }
    }
  }
}
