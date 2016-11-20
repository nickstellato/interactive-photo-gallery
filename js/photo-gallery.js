(function(){
    
    "use strict";

    var photos = makeArray("photo")
    console.log(photos[0]);
    console.log(photos[0].alt);

    photos.forEach(function(photo){
        photo.onclick = illuminate;
    });

    function illuminate(){
        var index = photos.indexOf(this);
        var lightbox = document.getElementById("lightbox");
        var figure = document.getElementById("figure");
        var rightArrow = document.getElementById("next");
        var leftArrow = document.getElementById("previous");
        var currentPhoto = document.getElementById("currentPhoto");
        var currentCaption = document.getElementById("currentCaption");
            figure.setAttribute("class", "");
            lightbox.setAttribute("class", "lightbox");
            rightArrow.setAttribute("class", "arrow arrow-right");
            leftArrow.setAttribute("class", "arrow arrow-left");
            currentPhoto.setAttribute("src", photos[index].src.replace("/thumbnails", ""));
            currentCaption.innerText = photos[index].alt;
            rightArrow.onclick = function(){
                if (index === 11) {
                    index = 0;
                } else {
                    index = index + 1;
                }
                currentPhoto.setAttribute("src", photos[index].src
                    .replace("/thumbnails", ""));
                currentCaption.innerText = photos[index].alt;
            }
            leftArrow.onclick = function(){
                if (index === 0) {
                    index = 11;
                } else {
                    index = index - 1;
                }
                currentPhoto.setAttribute("src", photos[index].src
                    .replace("/thumbnails", ""));
                currentCaption.innerText = photos[index].alt;
            }

    }

    function makeArray(className){
        return Array.prototype.slice.call(
            document.getElementsByClassName(className));
    }
})();

