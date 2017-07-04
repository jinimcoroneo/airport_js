describe("Plane", function() {
  var plane;
  var fakeAirport

  beforeEach(function() {
    plane = new Plane();
    fakeAirport = jasmine.createSpy()
    lhr = jasmine.createSpy()
  });

  it("can be instructed to land", function() {
    plane.land(fakeAirport)
    expect(plane.isFlying).toBe(false)
  });

  it("can be instructed to fly", function() {
    plane.takeoff()
    expect(plane.isFlying).toBe(true)
  });

  it("can confirm what airport it is at", function() {
    plane.land(fakeAirport)
    expect(plane.location).toBe(fakeAirport)
  });

  it("if plane is flying location should be nil", function() {
    plane.takeoff()
    expect(plane.location).toBeNull()
  });

});
