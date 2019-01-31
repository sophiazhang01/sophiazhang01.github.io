
$(document).ready(function() {

  var images = [
    "images/path01.jpg",
    "images/path02.jpg",
    "images/path03.jpg",
    "images/path04.jpg",
    "images/path05.jpg",
    "images/path06.jpg",
    "images/path07.jpg",
    "images/path08.jpg",
    "images/path09.jpg",
    "images/path10.jpg",
    "images/path11.jpg",
    "images/path12.jpg",
    "images/path13.jpg",
  ];

  var currentIndex = 0;

  $("#nextButton").click(function () {
    currentIndex += 1;
    if (currentIndex >= 12){
      currentIndex = 0;
    }
      $("#slideshowImage").attr("src", images[currentIndex]);
    });
  });
