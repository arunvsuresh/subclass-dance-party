var wolverine = function(top, left, timeBetweenSteps){

  makeDancer.call(this,top,left,timeBetweenSteps);

  this.step();
  this.setPosition(top,left,timeBetweenSteps);
};

wolverine.prototype = Object.create(makeDancer.prototype);

wolverine.prototype.constructor = wolverine;

wolverine.prototype.step = function(){
  var context=this;
  this.$node.toggle();
  var superAlwaysBoundStep=this.step.bind(this);
  setTimeout(superAlwaysBoundStep, context.timeBetweenSteps);
};

wolverine.prototype.setPosition = function(top, left){
    var styleSettings = {
      top: top,
      left: left,
      "border-color":"#333",
      background: "url(css/marvel.gif) -50px 0"
    };

    this.$node.css(styleSettings);
};
