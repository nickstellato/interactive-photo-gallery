/* global $ */

$.getJSON('js/photos.json', function(data) {
    var output;

    for (var i in data.data.photos) {
        output = "<figure>";
        output += "<img src=." + data.data.photos[i].thumbnailURL + "></img>";
        output += "</figure>";
    }
        
    output+="</figure>";
    
    var gallery = document.getElementById("photo-gallery");
    gallery.innerHTML=output;
    
    console.log(output);
    
});