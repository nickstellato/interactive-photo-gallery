/* global photos, jQuery */

(function($){
    'use strict';
    
    var photo = document.getElementsByTagName("figure");
    var body = document.getElementsByTagName("body");
    
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
    
    $(photo).on("click", function(e){
        e.preventDefault();
        $("#photo-gallery-container").addClass("overlay");
        $("#figure-container").addClass("secondary-overlay");
    });
    
    $("#photo-gallery-container").on("click", function(){
        $(this).removeClass("overlay");
        $("#figure-container").removeClass("secondary-overlay");
    });
    
})(jQuery);