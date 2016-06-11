/* global photos, jQuery */

(function($){
    'use strict';

    var $gallery = $("#photo-gallery");
    var output = '';

    for (var i = 0; i < photos.length; i++) {
      output += "<figure class='photo'>";
      output += "<a href=./img/photos/" + photos[i].name + ">";
      output += "<img src=./img/thumbnails/" + photos[i].name + "></img>";
      output += "</a>";
      output += "</figure>";
    }

    $gallery.append(output);
    
    var lightboxPhoto  = "<div id='lightbox-container>"
        lightboxPhoto += "<a href=''>&lsaquo;</a>";
        lightboxPhoto += "<figure id='lightboxPhoto'>";
        lightboxPhoto += "<img src='./img/photos/01.jpg'></img>";
        lightboxPhoto += "<figcaption>Hello World</figcaption>";
        lightboxPhoto += "</figure>";
        lightboxPhoto += "<a href=''>&rsaquo;</a>";
        lightboxPhoto += "</div>"
    
    $("figure").on("click", function(e){
      e.preventDefault();

      if (!$("#overlay").length) {
        $(".container").prepend("<div id='overlay'></div>");
      }

      $("#overlay").addClass("overlay");

      var photoURL = ($(this).children('a')).attr("href");

      var lightboxPhoto  = "<div id='lightbox-container'>"
          lightboxPhoto += "<a href=''>&lsaquo;</a>";
          lightboxPhoto += "<figure id='lightboxPhoto'>";
          lightboxPhoto += "<img src=" + photoURL + "></img>";
          lightboxPhoto += "<figcaption>Hello World</figcaption>";
          lightboxPhoto += "</figure>";
          lightboxPhoto += "<a href=''>&rsaquo;</a>";
          lightboxPhoto += "</div>"

      $("#overlay").prepend(lightboxPhoto);
    });

    $("#overlay").on("click", function(){
       $("#lightboxPhoto").parent().remove();
       $("#overlay").removeClass("overlay");
    });

})(jQuery);
