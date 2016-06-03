/* global photos */

var gallery = document.getElementById("photo-gallery");
var output = '';

for (var i = 0; i < photos.length; i++) {
    output += "<a href=." + photos[i].imageURL + ">"
    output += "<figure>";
    output += "<img src=." + photos[i].thumbnailURL + "></img>";
    output += "</figure>";
    output += "</a>"
}

gallery.innerHTML = output;