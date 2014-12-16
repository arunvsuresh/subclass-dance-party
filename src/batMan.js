var batMan = function(top, left, timeBetweenSteps){

  makeDancer.call(this,top,left,timeBetweenSteps);

  this.step();
  this.setPosition(top,left,timeBetweenSteps);
};

batMan.prototype = Object.create(makeDancer.prototype);

batMan.prototype.constructor = batMan;

batMan.prototype.step = function(){
  var context=this;
  this.$node.toggle();
  var superAlwaysBoundStep=this.step.bind(this);
  setTimeout(superAlwaysBoundStep, context.timeBetweenSteps);
};

batMan.prototype.setPosition = function(top, left){
    var styleSettings = {
      top: top,
      left: left,
      "border-color":"#333"
    };
    this.$node.css(styleSettings);
};
