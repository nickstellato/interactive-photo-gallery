/* global photos */

var gallery = document.getElementById("photo-gallery");
var output = '';

for (var i = 0; i < photos.length; i++) {
    output += "<figure class='photo'>"
    output += "<a href=." + photos[i].imageURL + ">"
    output += "<img src=." + photos[i].thumbnailURL + "></img>";
    output += "</a>"
    output += "</figure>"
}

gallery.innerHTML = output;