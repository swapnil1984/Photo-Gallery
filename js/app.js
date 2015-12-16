//Problem: User when clicks on an image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox

//Add overlay

var $overlay = $('<div id = "overlay"></div>');
var $image = $('<img>');
var $caption = $('<p></p>');

$overlay.append($image);
$overlay.append($caption);
$("body").append($overlay);
  //An image
  //A caption

var close = $('<a href="#" class="closeLightbox">X</a>');

//Capture the click event on a link to an image.
$("#thumbnails div div a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  $('body').css({'overflow': 'hidden'});
  $image.attr("src", imageLocation);
  $overlay.show();
  //Show the overlay
  //Update overlay with the image linked in the link
  //Get child's alt attribute and set caption
  
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
});
  
$overlay.click(function(){
  $(this).hide();
  $('body').css({'overflow': 'auto'});
});
//When overlay is clicked
  //Hide the overlay
  