describe("Airport", function() {
  var airport;
  // var fakePlane;

  beforeEach(function() {
    airport = new Airport();
    // fakePlane = jasmine.createSpy()
  });

  it("has an empty hangar", function() {
    airport.hangar()
    expect(airport.planes).toEqual([])
  });
})
