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

    // var clickedPhotoURL =

    var lightboxPhoto  = "<figure id='lightboxPhoto'>";
        lightboxPhoto += "<img src='./img/photos/01.jpg'></img>";
        lightboxPhoto += "<figcaption>Hello World</figcaption>";
        lightboxPhoto += "</figure>";

    $("figure").on("click", function(e){
        e.preventDefault();

        if (!$("#overlay").length) {
          $(".container").prepend("<div id='overlay'></div>");
        }

        $("#overlay").addClass("overlay");
        $("#overlay").prepend(lightboxPhoto);
    });

    $("#overlay").on("click", function(){
       $("#lightboxPhoto").remove();
       $("#overlay").removeClass("overlay");
    });

})(jQuery);
