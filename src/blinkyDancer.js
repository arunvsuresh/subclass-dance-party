var IronMan = function(top, left, timeBetweenSteps){

  makeDancer.call(this,top,left,timeBetweenSteps);
  this.top=top;
  this.left=left;
  this.dancing = true;
  this.step();
  this.setPosition(top,left,timeBetweenSteps);
};

IronMan.prototype = Object.create(makeDancer.prototype);

IronMan.prototype.constructor = IronMan;

IronMan.prototype.step = function(){
  var context=this;
  //this.$node.toggle();
  if (this.dancing) {
    if (dancers.length){
        var leastDistance = distanceBetween(this.$node, dancers[0]);
        var target = [parseInt(dancers[0].css('left'),10), parseInt(dancers[0].css('top'),10)];
        for (var i = 1; i < dancers.length; i++) {
          if (distanceBetween(this.$node, dancers[i]) < leastDistance) {
            target = [parseInt(dancers[i].css('left'),10), parseInt(dancers[i].css('top'),10)];
          }
        }
        //this.setPosition(((target[1] + this.$node.offsetTop) / 2) + "px", ((target[0] + this.$node.offsetLeft) / 2) + "px");
        //console.log(((target[1] + parseInt(this.$node.css('top'), 10)) / 2) + "px", ((target[0] + parseInt(this.$node.css('left'), 10)) / 2) + "px");

        //this.$node.css("left", ((target[0] + this.$node.offsetLeft) / 2) + "px");
        this.setPosition(((target[1] + parseInt(this.$node.css('top'), 10)) / 2) + "px", ((target[0] + parseInt(this.$node.css('left'), 10)) / 2) + "px");
    }
  }

  var superAlwaysBoundStep=this.step.bind(this);
  setTimeout(superAlwaysBoundStep, context.timeBetweenSteps);
};

IronMan.prototype.setPosition = function(top, left){
    this.top=top;
    this.left=left;
    var styleSettings = {
      top: this.top,
      left: this.left,
      "border-color":"#00ffff",
      background: "url(css/marvel.gif) -250px 50px"
    };
    this.$node.css(styleSettings);
};
