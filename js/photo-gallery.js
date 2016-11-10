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
            arrow.addEventListener("click", function(){}, false);
        } else if (direction === "right"){
            arrow.setAttribute("id", "next");
            arrow.setAttribute("class", "arrow arrow-right");
            arrow.innerHTML = '&#10095;';
            arrow.addEventListener("click", function(){
                var currentPhotoIndex = $photos.indexOf(el);
                var nextPhotoIndex = currentPhotoIndex + 1;
                var nextPhoto = $photos[nextPhotoIndex];
                console.log(nextPhoto);
                caption = nextPhoto.getAttribute("alt");
                img = nextPhoto.getAttribute("src");
            }, false);
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

    function makeElement(tag, classes, ids){
        var element = document.createElement(tag);
        element.setAttribute("id", ids);

        if (typeof classes === "string"){
            element.setAttribute("class", classes);
        } else {
            element.setAttribute("class", classes.join(" "));
        }

        return element;
    }

    function makeArray(tag){
        return Array.prototype.slice.call(document.querySelectorAll(tag));
    }
})();
