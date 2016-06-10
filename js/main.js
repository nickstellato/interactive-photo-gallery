/* global photos, jQuery */

(function(){
    'use strict';
    
    function loadGallery(){
        var gallery = document.getElementById("photo-gallery");
        var output = '';
        
        for (var i = 0; i < photos.length; i++) {
            output += "<figure class='photo'>";
            output += "<a href=./img/photos/" + photos[i].name + ">";
            output += "<img src=./img/thumbnails/" + photos[i].name + "></img>";
            output += "</a>";
            output += "</figure>";
        }
        
        gallery.innerHTML = output;    
        
    }
    
    loadGallery();
    
})();