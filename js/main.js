/* global photos */

var gallery = document.getElementById("photo-gallery");
var output = '';

for (var i = 0; i < photos.length; i++) {
    output += "<a class='photo' href=." + photos[i].imageURL + ">"
    output += "<img src=." + photos[i].thumbnailURL + "></img>";
    output += "</a>"
}

gallery.innerHTML = output;