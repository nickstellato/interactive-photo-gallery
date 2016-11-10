(function(){
    "use strict";

    var $photos = getPhotosArray();
    console.log($photos);
    var $lightbox = document.getElementById("lightbox");

    $photos.forEach(function(photo){
        photo.addEventListener("click", illuminate, false);
    });

    function illuminate(){
        $lightbox.setAttribute("class", "lightbox");
        var _this = this;

        var $img = makeImage(_this);

        

        

        var $caption = this.getAttribute("alt");        
        var $figcaption = document.createElement("figcaption");
        $figcaption.innerText = $caption;
        $figcaption.setAttribute("class", "caption");

        var $figure = document.createElement("figure");

        var $leftArrow = document.createElement("a");
        $leftArrow.setAttribute("class", "arrow arrow-left");
        $leftArrow.setAttribute("id", "previous");
        $leftArrow.innerHTML = '&#10094;';
        $leftArrow.addEventListener("click", function(){}, false);

        var $rightArrow = document.createElement("a");
        $rightArrow.setAttribute("class", "arrow arrow-right");
        $rightArrow.setAttribute("id", "next");        
        $rightArrow.innerHTML = '&#10095;';
        $rightArrow.addEventListener("click", function(){
            var currentPhotoIndex = $photos.indexOf(_this);
            var nextPhotoIndex = currentPhotoIndex + 1;
            var nextPhoto = $photos[nextPhotoIndex];
            console.log(nextPhoto);
            $caption = nextPhoto.getAttribute("alt");
            $img = nextPhoto.getAttribute("src");
        }, false);

        $figure.appendChild($leftArrow);
        $figure.appendChild($img);
        $figure.appendChild($figcaption);
        $figure.appendChild($rightArrow);
        $lightbox.appendChild($figure);

        // var currentPhotoIndex = $photos.indexOf(this);
        // console.log(currentPhotoIndex);
        // var nextPhotoIndex = incrementIndex(currentPhotoIndex);
        // console.log(nextPhotoIndex);
        // var prevPhotoIndex = decrementIndex(currentPhotoIndex);

        // function setNextPhoto(index) {
        //     var nextPhoto = $photos[index];
        //     console.log(nextPhoto);
        //     var nextPhotoSRC = nextPhoto.values("src");
        //     var nextPhotoALT = nextPhoto.values("alt");
        //     $img.setAttribute("src", nextPhotoSRC);
        //     $img.setAttribute("alt", nextPhotALT);
        // }

        // function incrementIndex(index) {
        //     return index + 1;

        // }

        // function decrementIndex(index) {
        //     return index - 1;
        // }
    }

    function makeImage(el){
        var $photoURL = el.getAttribute("src")
            .replace("/thumbnails", "");
        var $img = document.createElement("img");
        $img.setAttribute("src", $photoURL);
        $img.setAttribute("class", "largePhoto");
        $img.setAttribute("id", "currentPhoto");
        return $img;
    }

    function getPhotosArray(){
        var $photosList = document.querySelectorAll("img");
        return Array.prototype.slice.call($photosList);
    }
})();
