describe('minionDancer', function() {

  var minionDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    minionDancer = new makeMinionDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(minionDancer.$node).to.be.an.instanceof(jQuery);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(minionDancer, 'step');
      expect(minionDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(minionDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(minionDancer.step.callCount).to.be.equal(2);
    });
  });
});
