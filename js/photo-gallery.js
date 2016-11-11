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
        $leftArrow.addEventListener("click", photoScroll(_this, "previous"), false);

        var $rightArrow = makeArrow(_this, "right", $figcaption, $img);
        $rightArrow.addEventListener("click", photoScroll(_this, "next"), false);

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

    function photoScroll(scope, direction) {
        var currentPhotoIndex = $photos.indexOf(scope);
        var currentPhoto = document.getElementById("currentPhoto");

        if(direction === "next") {
            var nextPhotoIndex = currentPhotoIndex + 1;
            if(nextPhotoIndex > 11) {
                nexPhotoIndex = 1;
            }
        } else {
            var nextPhotoIndex = currentPhotoIndex -1;
            if(nextPhotoIndex < 0) {
                nextPhotoIndex === 11;
            }  
        }

        var nextPhoto = $photos[nextPhotoIndex];
        var nextPhotoURL = nextPhoto.getAttribute("src")
            .replace("/thumbnails", "");
        currentPhoto.setAttribute("src", nextPhotoURL);
        console.log(nextPhoto);
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
        } else if (direction === "right"){
            arrow.setAttribute("id", "next");
            arrow.setAttribute("class", "arrow arrow-right");
            arrow.innerHTML = '&#10095;';
        } else {
            return Error("Need a direction!");
        }

        return arrow
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
