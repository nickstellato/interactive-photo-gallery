(function(){
    
    "use strict";

    var photos = makeArray("photo")

    photos.forEach(function(photo){
        photo.onclick = illuminate;
    });

    function illuminate(){
        var index = photos.indexOf(this);
        var lightbox = document.getElementById("lightbox");
            lightbox.setAttribute("class", "lightbox");
            lightbox.appendChild(makeLeftArrow(index));
            lightbox.appendChild(makeFigure(makeImage(index),
                makeFigCaption(index)));
            lightbox.appendChild(makeRightArrow(index));
    }

    function makeImage(index){
        var photoURL = photos[index].src.replace("/thumbnails", "");
        var img = document.createElement("img");
            img.setAttribute("class", "largePhoto");
            img.setAttribute("id", "currentPhoto");
            img.setAttribute("src", photoURL);
        return img;
    }

    function makeFigCaption(index){ 
        var figcaption = document.createElement("figcaption");
            figcaption.innerText = photos[index].alt;
            figcaption.setAttribute("class", "caption");
            figcaption.setAttribute("id", "currentCaption");
        return figcaption;
    }

    function makeLeftArrow(index){
        var arrow = document.createElement("a");
            arrow.setAttribute("id", "previous");
            arrow.setAttribute("class", "arrow arrow-left");
            arrow.innerHTML = '&#10094;'
        return arrow
    }

    function makeRightArrow(index){
        var arrow = document.createElement("a");
            arrow.setAttribute("id", "next");
            arrow.setAttribute("class", "arrow arrow-right");
            arrow.innerHTML = '&#10095;'
        return arrow;
    }       

    function makeFigure(img, figcaption) {
        var figure = document.createElement("figure");
            figure.appendChild(img);
            figure.appendChild(figcaption);
        return figure;
    }

    function nextPhoto(index){
        if (index === 11) {
            index = 0;
        } else {
            index = index + 1;
        }

        var caption = document.getElementById("currentCaption");
            caption.setAttribute("alt", photos[index].alt);
        var img = document.getElementById("currentPhoto");
            img.setAttribute("src", photos[index].src
                .replace("/thumbnails", ""));
    }

    function prevPhoto(index){
        if (index === 0) {
            index = 11;
        } else {
            index = index - 1;
        }

        var caption = document.getElementById("currentCaption");
            caption.setAttribute("alt", photos[index].alt);
        var img = document.getElementById("currentPhoto");
            img.setAttribute("src", photos[index].src
                .replace("/thumbnails", ""));
    }

    function makeArray(className){
        return Array.prototype.slice.call(
            document.getElementsByClassName(className));
    }

})();

