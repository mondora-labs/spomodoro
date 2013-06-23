require([
  '$api/models',
  '$views/list#List',
  'scripts/jquery-2.0.2.min'
], function(models, List, jquery) {
  'use strict';      

  var currentPomodoro = {
     running: false,
     minutes: 0,
     configuration: {
	      pomodoroSecondsHandle:0, 
	      pomodoroMinuteHandle:0, 
	      pomodoroLength : 25 
		},
	 remaining : function(){
		return this.configuration.pomodoroLength-this.minutes;
	}  
  }          


  var initPomodoro = function() {
     $("#start-pomodoro").click( startPomodoro );
  }
   
  var startPomodoro = function() {   
              
	if (! currentPomodoro.running ) {
		currentPomodoro.running = true;
		currentPomodoro.configuration.pomodoroSecondsHandle = setInterval(function(){ updatePomodoro()},1000);   
		currentPomodoro.configuration.pomodoroMinuteHandle = setInterval(function(){ updateTimerClock() }, 60000 );
		        
	}
	else {       
      currentPomodoro.running = false; 
      clearInterval( currentPomodoro.configuration.pomodoroSecondsHandle );    
      clearInterval( currentPomodoro.configuration.pomodoroMinuteHandle );
      
    } 

  }                                                                       

  var updateTimerClock = function() {        
	currentPomodoro.minutes ++;               
	$("#minutes").html( currentPomodoro.remaining() );
	
  }  

  var updatePomodoro = function() {
	console.log( "tick" );
  }
    
  /*
  var doPlaylistForAlbum = function() {
    var album = models.Album.fromURI('spotify:album:5rCCCernTo6IwFwEZM4H53');
    var list = List.forAlbum(album);
    document.getElementById('playlistContainer').appendChild(list.node);
    list.init();
  };
  */
  //exports.doPlaylistForAlbum = doPlaylistForAlbum;      
  exports.startPomodoro = startPomodoro;  
  exports.initPomodoro = initPomodoro;
});
