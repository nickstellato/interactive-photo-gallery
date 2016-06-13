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
    
    $("figure").on("click", function(e){
      e.preventDefault();

      if (!$("#overlay").length) {
        $(".container").prepend("<div id='overlay'></div>");
      }

      $("#overlay").addClass("overlay");

      var index = $("figure").index(this);
      
      console.log(index);

      var lightboxPhoto  = "<div id='lightbox-container'>"
          lightboxPhoto += "<a id='left-arrow' href= ''>&lsaquo;</a>";
          lightboxPhoto += "<figure id='lightboxPhoto'>";
          lightboxPhoto += "<img src= ./img/photos/" + photos[index].name + "></img>";
          lightboxPhoto += "<figcaption>" + photos[index].caption + "</figcaption>";
          lightboxPhoto += "</figure>";
          lightboxPhoto += "<a id='right-arrow' href=''>&rsaquo;</a>";
          lightboxPhoto += "</div>"

      $("#overlay").prepend(lightboxPhoto);
    });

    $("#overlay").on("click", function(){
       $("#lightboxPhoto").parent().remove();
       $("#overlay").removeClass("overlay");
    });

})(jQuery);
