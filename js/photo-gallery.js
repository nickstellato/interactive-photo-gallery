(function(){
    "use strict";

    var $photos = getPhotosArray();
    var $lightbox = document.getElementById("lightbox");

    $photos.forEach(function(photo){
        photo.addEventListener("click", illuminate, false);
    });

    function illuminate(){
        $lightbox.setAttribute("class", "lightbox");

        var $photoURL = this.getAttribute("src").replace("/thumbnails", "");
        var $img = document.createElement("img");
        $img.setAttribute("src", $photoURL);
        $img.setAttribute("class", "largePhoto");
        $img.setAttribute("id", "currentPhoto");
        // var $currentPhotoIndex = $photos.indexOf(this);

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
        $rightArrow.addEventListener("click", function(){}, false);

        $figure.appendChild($leftArrow);
        $figure.appendChild($img);
        $figure.appendChild($rightArrow);
        $figure.appendChild($figcaption);
        $lightbox.appendChild($figure);       
    }

    function getPhotosArray(){
        var $photosList = document.querySelectorAll("img");
        return Array.prototype.slice.call($photosList);
    }
})();
