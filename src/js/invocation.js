var MyObject = {
 
  counter: 0,
  plus: function() {
    this.counter++;
    console.log(this.counter);
  }
};

MyObject.plus();
MyObject.plus();

