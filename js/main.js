/* global photos, jQuery */

(function($){
    
    var gallery = document.getElementById("photo-gallery");
    var photo = document.getElementsByClassName(photo);
    var output = '';
    
    for (var i = 0; i < photos.length; i++) {
        output += "<figure class='photo'>";
        output += "<a href=./img/photos/" + photos[i].name + ">";
        output += "<img src=./img/thumbnails/" + photos[i].name + "></img>";
        output += "</a>";
        output += "</figure>";
    }
    
    gallery.innerHTML = output;
    
    $("figure").click(function(event) {
        event.preventDefault();

    });
    
    
})(jQuery);