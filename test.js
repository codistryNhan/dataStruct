function Outside(){

  this.head = "hello";

  let inner = function(){
    this.head = "HELLOOO";
  }

  inner();

  return this.head;
}

let out = new Outside();

console.log(out);

