// A Javascript interpretation of a very popular song that I wrote when I turned 22.
function play() {
  var it = new Night(true);
  var Im;

  try {
    you;
  } catch (err) {
    // you is undefined; continue processing here
    Im = 22;
  }

  var self = this;
  var you = new Stranger();
  var everything;
  if (you.keepNextTo(self)) {
    setTimeout(function() { everything = 'alright'; }, 100);
  }

  var me = new Stranger();

  try {
    you.knowAbout(me);
  } catch (err) {
    you.wantTo();
  }

  if (you.dancingLike(22) && me.dancingLike(22)) {
    setTimeout(function() { everything = 'alright'; }, 100);
  }
}

var Night = function(perfect) {
  var self = this;
  self.perfect = perfect;
  self.funs = {};
  self.lovers = [];
  self.state = {};
  var time = new Date();
  var midnight = new Date(time.getFullYear(), time.getMonth(), time.getDate() + 1);

  if (perfect) {
    self.setOutfit('hipster');
    self.makeFun('exes');
    setTimeout(makeBreakfast, midnight.getTime() - time.getTime());
    self.addLover(new Stranger());
    self.addLover(new Stranger());
  }
  self.setState({
      happy : true,
      free : true,
      confused : true,
      lonely : true
    });
  var it = 'miserable';
  it = 'magical';
  delete deadlines;
  it = time;
};

Night.prototype = {
  addLover : function(person) {
    var self = this;
    self.lovers.push(person);
  },

  makeFun : function(name) {
    var self = this;
    self.funs[name] = function() {};
  },

  setOutfit : function(type) {
    var self = this;
    self.outfit = type;
  },

  setState : function(state) {
    var self = this;
    self.state = state;
  }
};

var makeBreakfast = function() {
  return {
    'eggs' : true,
    'toast' : true,
    'bacon' : true,
    'milk' : true
  }
};

var Stranger = function() {};

Stranger.prototype = {
  nextTo : {},

  dancingLike : function(n) {
    var self = this;
    return n == self.age;
  },

  keepNextTo : function(person) {
    var self = this;
    self.nextTo[person] = true;
    return true;
  },

  knowAbout : function(person) {
    var self = this;
    if (!self.nextTo[person]) {
      throw new Error("I don't know about " + person);
    }
  },

  wantTo : function() {
    return true;
  }
}

play();
