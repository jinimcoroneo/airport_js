
function Airport() {
  this.hangar = [];
}

Airport.prototype.instruct_land = function(plane) {
  this.hangar.push(plane);
}

var airport = new Airport;

console.log(airport.planes);
