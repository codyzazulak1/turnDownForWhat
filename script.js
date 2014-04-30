$(document).ready(function() {
  var video = $("video#awesome_video")[0];
  var audio = $("audio#awesome_audio")[0];
  var bg    = $('div.black')

  $("div.sticker").click(function() {
    video.currentTime = 0;
    audio.currentTime = 0;
    bg.fadeOut('slow').delay(34000).fadeIn(1500);
    video.play();
    audio.play();
  });

  $('p.money').click(function() {
    alert("Disclamer: \n\nNo money is being made with this site. \nPlease do not sue me :)");
  });

});