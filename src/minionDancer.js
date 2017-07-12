var makeMinionDancer = function(top, left, timeBetweenSteps) {
   makeDancer.call(this, top, left, timeBetweenSteps);
   this.$node = $('<span class="minionDancer"></span>');
}

makeMinionDancer.prototype = Object.create(makeDancer.prototype);
makeMinionDancer.prototype.constructor = makeMinionDancer;
makeMinionDancer.prototype.oddStep = makeDancer.prototype.step;

makeMinionDancer.prototype.step = function() {
   this.oddStep();
   this.setPosition(this.top, this.left);
}