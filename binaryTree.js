function BinaryTree(){

  this.root = null;

  let Node = function(key){
    this.key = key;
    this.left = null;
    this.right = null;
  }

  this.insert = function(key){
    let newNode = new Node(key);

    if(this.root == null){
      this.root = newNode;
    } else {
      insertNode(this.root, newNode);
    }
  }

  let insertNode = function(node, newNode){
    if(node.key > newNode.key){
      if(node.left == null){
        node.left = newNode;
      } else {
        insertNode(node.left, newNode);
      }
    } else {
      if(node.right == null){
        node.right = newNode;
      } else {
        insertNode(node.right,newNode);
      }
    }
    
  }

  this.preorder = function(node){
    if(node == null){
      return;
    }

    console.log(node.key);
    this.preorder(node.left);
    this.preorder(node.right);

  }
}


let tree = new BinaryTree();

tree.insert(6);
tree.insert(2);
tree.insert(5);
tree.insert(10);
tree.insert(7);
tree.preorder(tree.root);
