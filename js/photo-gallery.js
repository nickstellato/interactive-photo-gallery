(function(){
    "use strict";

    var $photos = makeArray("img")

    $photos.forEach(function(photo){
        photo.addEventListener("click", illuminate, false);
    });

    function illuminate(){
        var $lightbox = document.getElementById("lightbox");
        $lightbox.setAttribute("class", "lightbox");
        
        var _this = this;
        var $img = makeImage(_this);
        var $figcaption = makeFigCaption(_this);

        var $leftArrow = makeArrow(_this, "left", $figcaption, $img);

        var $rightArrow = makeArrow(_this, "right", $figcaption, $img);

        var $figure = makeFigure($img, $figcaption, $leftArrow, $rightArrow);

        $lightbox.appendChild($figure);
    }

    function makeImage(el){
        var $img = document.createElement("img");
        $img.setAttribute("class", "largePhoto");
        $img.setAttribute("id", "currentPhoto");
        var $photoURL = el.getAttribute("src")
            .replace("/thumbnails", "");
        $img.setAttribute("src", $photoURL);
        return $img;
    }

    function makeFigCaption(el){
        var $caption = el.getAttribute("alt");        
        var $figcaption = document.createElement("figcaption");
        $figcaption.innerText = $caption;
        $figcaption.setAttribute("class", "caption");
        return $figcaption;
    }

    function makeArrow(el, direction, caption, img){
        var arrow = document.createElement("a");
        if (direction === "left"){
            arrow.setAttribute("id", "previous");
            arrow.setAttribute("class", "arrow arrow-left");
            arrow.innerHTML = '&#10094;';
            arrow.addEventListener("click", photoScroll(el, "previous"), 
                false);
        } else if (direction === "right"){
            arrow.setAttribute("id", "next");
            arrow.setAttribute("class", "arrow arrow-right");
            arrow.innerHTML = '&#10095;'
            arrow.addEventListener("click", photoScroll(el, "next"),
                false);
        } else {
            return Error;
        }

        return arrow
    }

    function photoScroll(scope, direction) {
        var currentPhotoIndex = $photos.indexOf(scope);

        if(direction === "next") {
            var nextPhotoIndex = currentPhotoIndex + 1;
            if(nextPhotoIndex > 11) {
                nextPhotoIndex = 1;
            }
        } else if (direction === "previous"){
            var nextPhotoIndex = currentPhotoIndex -1;
            if(nextPhotoIndex < 0) {
                nextPhotoIndex === 11;
            }  
        } else {
            return Error;
        }

        var nextPhoto = $photos[nextPhotoIndex];
        console.log(nextPhoto);
        var nextPhotoURL = nextPhoto.getAttribute("src")
            .replace("/thumbnails", "");
        var currentPhoto = document.getElementById("currentPhoto");
        currentPhoto.setAttribute("src", nextPhotoURL);
        console.log(nextPhoto);
    }

    function makeFigure(img, figcaption, leftArrow, rightArrow) {
        var $figure = document.createElement("figure");
        $figure.appendChild(leftArrow);
        $figure.appendChild(img);
        $figure.appendChild(figcaption);
        $figure.appendChild(rightArrow);
        return $figure;
    }

    function makeArray(tag){
        return Array.prototype.slice.call(document.querySelectorAll(tag));
    }
})();
