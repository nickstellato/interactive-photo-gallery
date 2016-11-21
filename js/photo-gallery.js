(function(){
    
    "use strict";

    var photos = makeArray("photo");

    photos.forEach(function(photo){
        photo.onclick = illuminate;
    });

    function illuminate(){
        var index = photos.indexOf(this);
        var lightbox = document.getElementById("lightbox");
        var closeButton = document.getElementById("close");
        var figure = document.getElementById("figure");
        var rightArrow = document.getElementById("next");
        var leftArrow = document.getElementById("previous");
        var currentPhoto = document.getElementById("currentPhoto");
        var currentCaption = document.getElementById("currentCaption");
            figure.setAttribute("class", "");
            lightbox.setAttribute("class", "lightbox");
            closeButton.setAttribute("class", "close");
            rightArrow.setAttribute("class", "arrow arrow-right");
            leftArrow.setAttribute("class", "arrow arrow-left");
            currentPhoto.setAttribute("src", photos[index].src.replace("/thumbnails", ""));
            currentCaption.innerText = photos[index].alt;

            closeButton.addEventListener("click", function(){
                figure.setAttribute("class", "hidden");
                lightbox.setAttribute("class", "hidden");
                closeButton.setAttribute("class", "hidden");
                rightArrow.setAttribute("class", "hidden");
                leftArrow.setAttribute("class", "hidden");
            }, false)

            rightArrow.addEventListener("click", function(){
                if (index === 11) {
                    index = 0;
                } else {
                    index = index + 1;
                }
                currentPhoto.setAttribute("src", photos[index].src
                    .replace("/thumbnails", ""));
                currentCaption.innerText = photos[index].alt;
            }, false);
            
            leftArrow.addEventListener("click", function(){
                if (index === 0) {
                    index = 11;
                } else {
                    index = index - 1;
                }
                currentPhoto.setAttribute("src", photos[index].src
                    .replace("/thumbnails", ""));
                currentCaption.innerText = photos[index].alt;
            }, false);

    }

    function makeArray(className){
        return Array.prototype.slice.call(
            document.getElementsByClassName(className));
    }
})();

