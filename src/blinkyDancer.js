var makeBlinkyDancer = function(top, left, timeBetweenSteps){

  makeDancer.call(this,top,left,timeBetweenSteps);

  this.step();
  this.setPosition(top,left,timeBetweenSteps);
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);

makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function(){
  var context=this;
  //this.$node.toggle();
  var leastDistance = getDistanceTo(this.$node, dancers[0]);
  var target = [dancers[0].left, dancers[0].top];
  for (var i = 1; i < dancers.length; i++) {
    if (getDistanceTo(this.$node, dancers[i]) < leastDistance) {
      target = [dancers[i].left, dancers[i].top];
    }
  }
  var superAlwaysBoundStep=this.step.bind(this);
  setTimeout(superAlwaysBoundStep, context.timeBetweenSteps);
};

makeBlinkyDancer.prototype.setPosition = function(top, left){
    var styleSettings = {
      top: top,
      left: left,
      "border-color":"#00ffff",
      background: "url(css/marvel.gif) -250px 50px"
    };
    this.$node.css(styleSettings);
};
