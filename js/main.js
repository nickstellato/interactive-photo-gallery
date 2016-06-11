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
    
    var lightboxPhoto  = "<div id='overlay' class='overlay'>"
        lightboxPhoto += "<figure id='lightboxPhoto'>";
        lightboxPhoto += "<img src='./img/photos/01.jpg'></img>";
        lightboxPhoto += "<figcaption>Hello World</figcaption>";
        lightboxPhoto += "</figure>";
        lightboxPhoto += "</div>"
    
    $("figure").on("click", function(e){
        e.preventDefault();
        $(".container").prepend(lightboxPhoto);
    });
    
})(jQuery);