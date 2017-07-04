describe("Airport", function() {
  var airport;
  var fakePlane;

  beforeEach(function() {
    airport = new Airport();
    fakePlane = jasmine.createSpy()
  });

  it("has an empty hangar", function() {
    expect(airport.hangar).toEqual([])
  });

  it("can instruct a plane to land", function() {
    airport.instruct_land(fakePlane)
    expect(airport.hangar.pop()).toEqual(fakePlane)
  });
})
