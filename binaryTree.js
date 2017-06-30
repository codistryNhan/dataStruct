//  Binary Tree Data Stucture

function BinaryTree(){
  //Entry point to tree
  this.root = null;

  //Node to hold key and link to other nodes
  let Node = function(key){
    this.key = key;
    this.left = null;
    this.right = null;
  }

  //Insert method inserts a key into a node
  //and then calls on insertNode method to insert
  //node into tree
  this.insert = function(key){
    let newNode = new Node(key);
    console.log("Insert: " + newNode.key);

    if(this.root == null){
      this.root = newNode;
    } else {
      insertNode(this.root, newNode);
    }
  }

  //Helper method to insert nodes into tree
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

  //Breadth First Traversal
  this.breadthFirst = function(root){
    if(root ==  null){
      return;
    }

    let queue = [];
    queue.push(root);

    while(queue.length != 0){

      let node = queue.shift();
      console.log(node.key);

      if(node.left != null){
        queue.push(node.left);
      }

      if(node.right != null){
        queue.push(node.right);
      }

    }

  }

  //Preorder Traversal
  this.preorder = function(node){
    if(node == null){
      return;
    }

    console.log(node.key);
    this.preorder(node.left);
    this.preorder(node.right);
  }

  //Inorder Traversal
  this.inorder = function(node){
    if(node == null){
      return;
    }

    this.inorder(node.left);
    console.log(node.key);
    this.inorder(node.right);
  }

  //Post-order Traversal
  this.postorder = function(node){
    if(node == null){
      return;
    }

    this.postorder(node.left);
    this.postorder(node.right);
    console.log(node.key);
  }
}


let tree = new BinaryTree();

tree.insert(6);
tree.insert(2);
tree.insert(5);
tree.insert(10);
tree.insert(7);
tree.insert(3);
tree.insert(1);
tree.insert(11);
tree.insert(8);
console.log("Preorder");
tree.preorder(tree.root);
console.log("Inorder");
tree.inorder(tree.root);
console.log("Postorder");
tree.postorder(tree.root);
console.log("Breadth First");
tree.breadthFirst(tree.root);
