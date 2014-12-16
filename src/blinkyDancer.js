var makeBlinkyDancer = function(top, left, timeBetweenSteps){

  makeDancer.call(this,top,left,timeBetweenSteps);

  this.step();
  this.setPosition(top,left,timeBetweenSteps);
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);

makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function(){
  var context=this;
  this.$node.toggle();
  var superAlwaysBoundStep=this.step.bind(this);
  setTimeout(superAlwaysBoundStep, context.timeBetweenSteps);
};

makeBlinkyDancer.prototype.setPosition = function(top, left){
    var styleSettings = {
      top: top,
      left: left,
      "border-color":"#00ffff"
    };
    this.$node.css(styleSettings);
};
