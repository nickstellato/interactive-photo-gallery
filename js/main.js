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
    
    //Need to add the output that is added to the lightbox
    //What do we need:
        //Left Arrow that clicks to the previous picture
        //Image
        //Figure caption
        //Right Arrow that moves forward when clicked
    
    $("figure").on("click", function(e){
        e.preventDefault();
        $("#lightbox-container").addClass("overlay");
        var lightboxPhoto  = "<figure>";
            lightboxPhoto += "<img src=" + $(this).find('a').attr("href") + "></img>";
            lightboxPhoto += "<figcaption>" + photos[0].caption + "</figcaption>";
            lightboxPhoto += "</figure>";
        $("#lightbox").html(lightboxPhoto);
    });
    
    $("#lightbox-container").on("click", function(){
        $(this).removeClass("overlay");
    });
    
})(jQuery);