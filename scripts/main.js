require([
  '$api/models',   
  'scripts/language-example',
  'scripts/cover-example',
  'scripts/button-example',
  'scripts/playlist-example',
  'scripts/timeodoro'
], function(models, languageExample, coverExample, buttonExample, playlistExample, timeodoro) {
  'use strict';
 
  /*languageExample.doHelloWorld();
  coverExample.doCoverForAlbum();
  buttonExample.doShareButtonForArtist();
  buttonExample.doPlayButtonForAlbum();
  playlistExample.doPlaylistForAlbum();          
*/
  timeodoro.initPomodoro();
   
});
