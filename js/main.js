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

      var photoURL = ($(this).children('a')).attr("href");

      var lightboxPhoto  = "<i class='fa fa-angle-left fa-pull-left fa-5x'></i>";
          lightboxPhoto += "<figure id='lightboxPhoto'>";
          lightboxPhoto += "<img src=" + photoURL + "></img>";
          lightboxPhoto += "<figcaption>Hello World</figcaption>";
          lightboxPhoto += "</figure>";
          lightboxPhoto += "<i class='fa fa-angle-right fa-pull-right fa-5x'></i>";

      $("#overlay").prepend(lightboxPhoto);
    });

    $("#overlay").on("click", function(){
      $("i").remove();
      $("#lightboxPhoto").remove();
      $("#overlay").removeClass("overlay");
    });

})(jQuery);
