// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps){
  console.log(timeBetweenSteps);
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');

  // this.top=top;
  // this.left=left;
  // var top = top;
  // var left = left;
  // use jQuery to create an HTML <span> tag
  //this.$node = $('<span class="dancer"></span>');

  // now that we have defined the this object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
  //this.step();
};

makeDancer.prototype.constructor = makeDancer;
makeDancer.prototype.step = function(){
    // the basic this doesn't do anything interesting at all on each step,
    // it just schedules the next step
    //setTimeout(this.step, this.timeBetweenSteps);
};


makeDancer.prototype.setPosition = function(top, left){
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    /*
    var top, left;
    (top===undefined) ? (top=this.top) : null;
    (left===undefined) ? (left=this.left) : null;
    */
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
};

