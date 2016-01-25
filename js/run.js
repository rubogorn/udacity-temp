var Car = function(loc){
  this.loc = loc;
};
Car.prototype.move = function(){
  this.loc++
};

var amy = new Car(1);
/*amy.loc++;
var ben = {loc:9};
ben.loc++;*/
console.log(amy.loc);
amy.move();
console.log(amy.loc);