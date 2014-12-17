$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    $("body").on("click", "button",function(){
      var interval = ($("body").height() - 35) / (dancers.length + 1);
      for (var i = 0; i < window.dancers.length; i++) {
        dancers[i].css("left", "0px");
        var top = (interval * i) + 35;
        dancers[i].css("top", top + "px");
      }
    });


    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    console.log(dancerMakerFunctionName);

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    window.check = dancerMakerFunction;
    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    dancer.$node.on('mouseover',function(){
      $(this).css('top',"-1000px");
    });
    window.dancers.push(dancer.$node);
    $('body').append(dancer.$node);
  });
});

var getDistanceTo = function(node1, node2) {
  var x1 = parseInt(node1.css('left'), 10);
  var y1 = parseInt(node1.css('top'), 10);
  var x2 = parseInt(node2.css('left'), 10);
  var y2 = parseInt(node2.css('top'), 10);
  var l1 = (x1 - x2);
  var l2 = (y1 - y2);
  var distance = Math.sqrt((l1*l1)+(l2*l2));
  return distance;
}

