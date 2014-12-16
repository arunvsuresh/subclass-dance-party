var spiderMan = function(top, left, timeBetweenSteps){
  makeDancer.call(this,top,left,timeBetweenSteps);

  this.step();
};

spiderMan.prototype = Object.create(makeDancer.prototype);
spiderMan.prototype.constructor = spiderMan;

spiderMan.prototype.step = function(){
  var context=this;
  this.$node.toggle();
  var superAlwaysBoundStep=this.step.bind(this);

  setTimeout(superAlwaysBoundStep, context.timeBetweenSteps);
  // other effects you can use on a jQuery-wrapped html tag.
};



spiderMan.prototype.setPosition = function(top, left){
    var styleSettings = {
      top: top,
      left: left,
      "border-color":"#333",
      background: "url(css/marvel.gif) 0 0"
    };

    this.$node.css(styleSettings);
};
