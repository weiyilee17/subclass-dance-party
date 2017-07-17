var makeCoolDancer = function(top, left, timeBetweenSteps) {
   makeDancer.call(this, top, left, timeBetweenSteps);
   this.$node.addClass('coolDancer');
}

makeCoolDancer.prototype = Object.create(makeDancer.prototype);
makeCoolDancer.prototype.constructor = makeCoolDancer;
makeCoolDancer.prototype.oddStep = makeDancer.prototype.step;

makeCoolDancer.prototype.step = function() {
   this.oddStep();
   this.setPosition(this.top, this.left);
}