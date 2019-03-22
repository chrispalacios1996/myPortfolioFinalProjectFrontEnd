"use strict";
var images = ["badminton.jpg", "baseball.jpg", "cricket.jpg", "golf.jpg", "nascar.jpg", "pingPong.jpg", "rugby.jpg", "skate.jpg", "soccer.jpg", "surfing.jpg"];

$(document).ready(function() {
  // $("#img1").click(function(){
  //
  //   $("#lightbox").css("width", "100%");
  //   $("#lightbox").css("height", "100%");
  //   $("#lightbox").css("background-color", "rgba(0, 0, 0, .75)");
  //   $("#lightbox").css("display", "block");
  //
  // })
  //
  // $("#click").click(function(){
  //   $("#lightbox").css("display", "none");
  //
  // })
  // $("#carrr").click(function(){
  //   $("#lightbox").css("display", "none");
  // })
  // var image;

  for (let i = 0; i < images.length; i++) {

    let currentImage = images[i];
    var imageID = "image" + i;

    // $("body").append("<img id='" + imageID + "'class='gallery' src='images/" +
    // currentImage + "' alt='Image'/>");
    $("body").append(`<img id='${imageID}' class='gallery'
   src='images/${currentImage}' alt='Image' />`);

    $("#" + imageID).click(function() {

      $("body").append(`<div id="lightbox"></div>`)
      $("#lightbox").css({
        
        "position": "fixed",
        "top": "0",
        "left": "0",
        "text-align": "center",
        "width": "100%",
        "height": "100%",
        "background-color": "rgba(0, 0, 0, .75)",
        "display": "block",
      });

      $("#lighbox").append(`<img src='images/${currentImage}' alt='Image' />`);

      $("#lightbox img").css("height", "100%");

      $("#lightbox").click(function() {
        $("#lightbox").remove();
      });
    });

};



      $(".gallery").css("width", "200px");
      $(".gallery").css("margin-right", "10px");




});
