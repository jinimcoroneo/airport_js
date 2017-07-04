function Plane() {

Plane.prototype.land = function(airport) {
  this.isFlying = false
  this.location = airport;
};

Plane.prototype.takeoff = function() {
  this.isFlying = true
  this.location = null
};

};
