describe("Plane", function() {
  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  it("should land the plane", function() {
    plane.land
    expect(plane.isFlying).toBe(false)
  });
});
