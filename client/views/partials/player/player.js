Template.player.events({
  'click [data-play]': function () {
      console.log('@#!@#!@#');

        var uri = $('input').val();

        if(uri.length == 0) return;


        var uri = $('input').val();
        Session.set('currentSong', uri);

        SongPlayer.play(uri, function(err){
          console.log(err);
          console.log('1336 1336');
        });
   },
   'input [data-crossfade]': function (event) {
      var sliderValue = parseInt(event.currentTarget.value) / 100;
      console.log(sliderValue);
      Session.set('crossfade', sliderValue.toString());
   },
   'click [add-listener]': function (event) {
     /*var listenerAttributes = {
      radioId: "1337"
    };*/
      Meteor.call("addListener");
   },
   'click [add-broadcaster]': function (event) {
     /*var broadcaster = {
      radioId: "1337"
    };*/
      Meteor.call("addBroadcaster");
   }
});


