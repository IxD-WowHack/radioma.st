Listeneres = new Mongo.Collection('listeneres');

Listeneres.allow({
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
  addListener: function() {
   
    BroadCasterStream.on("1337", function(sURI) {
        Session.set('currentSong', sURI);

        SongPlayer.play(sURI, function(err){
          console.log(err);
          console.log('1336 1336');
    });
  });
    var user = Meteor.user();
    /*var listener = _.extend(listenerAttributes, {
      userId: user._id
    });*/

    //Listeneres.insert(listener);
  }

})