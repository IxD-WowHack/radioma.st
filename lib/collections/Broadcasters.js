Broadcasters = new Mongo.Collection('broadcasters');
BroadCasterStream = new Meteor.Stream('broadcastStream');

Broadcasters.allow({
  insert: function(){
    return true;
  },
  update: function(){
    return false;
  },
  remove: function(){
    return false;
  }
});

Meteor.methods({
  addBroadcaster: function() {
    /*check(broadcaster, {
      radioId: String
    });*/
    var user = Meteor.user();
    BroadCasterStream.emit("1337", 'spotify:track:0tO1llEYxYDtGToOp9X7HH');
    /*var broadcasterEx = _.extend(listenerAttributes, {
      userId: user._id
    });*/

    //Broadcasters.insert(broadcasterEx);
  }

})