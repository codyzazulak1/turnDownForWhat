$(document).ready(function() {
  var video = $("video#awesome_video")[0];
  var audio = $("audio#awesome_audio")[0];
  var bg    = $('div.black')

  $("div.sticker").click(function() {
    video.currentTime = 0;
    audio.currentTime = 0;
    bg.fadeOut('slow');
    video.play();
    audio.play();
  });
});