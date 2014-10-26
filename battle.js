$.fn.divBattle = function(options){
  //essentially creating a new jquery function with the above statement

  var settings = $.extend({
    battle1: '#battle1',
    battle2: '#battle2',
    convergePoint: '#conv'
  },options);

  b1 = $(settings.battle1);
  b1c = $(settings.battle1).offset();

  b2 = $(settings.battle2);
  b2c = $(settings.battle2).offset();
  //Converge point for the 2 divs to clash
  conv = $(settings.convergePoint);
  convc = $(settings.convergePoint).offset();

  
  //variables 
  prepTime = 4;
  prepSpeed = 60;
  rushSpeed = 250;

  $(this).on('click', function(){
    addCss();
    sequence();
  });

  //add position relative to the divs
  addCss = function(){
    b1.css('position','relative');
    b2.css('position','relative');
  };

  // sequence();
  sequence = function(){
    prep();
    rush();
    prep();
    rush();
    prep();
    rush();
  };

  prep = function(direction){
    for (i=0;i<prepTime;i++) {
      b1.animate({'left':5},prepSpeed);
      b1.animate({'left':-10},prepSpeed);
      b1.animate({'left':10},prepSpeed);
      b1.animate({'left':-5},prepSpeed);
    }
    for (i=0;i<prepTime;i++) {
      b2.animate({'left':-5},prepSpeed);
      b2.animate({'left':10},prepSpeed);
      b2.animate({'left':-10},prepSpeed);
      b2.animate({'left':5},prepSpeed);
    }
  };

  rush = function(){
    //The exact middle points of the anchor elem
    var convx = convc.left + conv.width()/2;
    var convy = convc.top + conv.height()/2;
    //The coord of the first/left battle div - located at the middle right side
    var b1x = b1c.left + b1.width();
    var b1y = b1c.top + b1.height()/2;
    //The amount the first battle div has to move to the anchor
    var b1xm = convx - b1x;
    var b1ym = convy - b1y;
    //The coord of the second/right battle div - located at the middle left side
    var b2x = b2c.left;
    var b2y = b2c.top + b2.height()/2;
    //The amount the second battle div has to move to the anchor
    var b2xm = convx - b2x;
    var b2ym = convy - b2y;
    
    //Move divs to converge point and then back
    b1.animate({'left': b1xm,'top':b1ym},rushSpeed);
    b2.animate({'left': b2xm, 'top':b2ym},rushSpeed);

    b1.animate({'left':0,'top':0},rushSpeed);
    b2.animate({'left':0,'top':0},rushSpeed);
  };
};