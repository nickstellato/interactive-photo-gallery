(function(){
    var $photos = getPhotosArray();
    var $lightbox = document.getElementById("lightbox");

    $photos.forEach(function(photo){
        photo.addEventListener("click", illuminate, false);
    });

    $lightbox.addEventListener("click", removeLightbox, false);

    function illuminate(){
        $lightbox.setAttribute("class", "lightbox");

        $photoURL = this.getAttribute("src").replace("/thumbnails", "");
        $img = document.createElement("img");
        $img.setAttribute("src", $photoURL);
        $img.setAttribute("class", "largePhoto");

        $caption = this.getAttribute("alt");        
        $figcaption = document.createElement("figcaption");
        $figcaption.innerText = $caption;
        $figcaption.setAttribute("class", "caption");

        $figure = document.createElement("figure");

        $leftArrow = document.createElement("a");
        $leftArrow.setAttribute("class", "arrow arrow-left");
        $leftArrow.setAttribute("id", "previous");
        $leftArrow.innerHTML = '&#10094;';
        $leftArrow.addEventListener("click", getPreviousPhoto, false);

        $rightArrow = document.createElement("a");
        $rightArrow.setAttribute("class", "arrow arrow-right");
        $rightArrow.setAttribute("id", "next");        
        $rightArrow.innerHTML = '&#10095;';
        $rightArrow.addEventListener("click", getNextPhoto, false);

        $figure.appendChild($leftArrow);
        $figure.appendChild($img);
        $figure.appendChild($rightArrow);
        $figure.appendChild($figcaption);
        $lightbox.appendChild($figure);
    }

    function getPhotosArray(){
        $photosList = document.querySelectorAll("img");
        return Array.prototype.slice.call($photosList);
    }

    function getPreviousPhoto(){
        var $previousPhoto = this.previousSibling;
        console.log($previousPhoto);
    }

    function getNextPhoto(){
        var $nextPhoto = this.nextSibling;
        console.log($nextPhoto);
    }

    function removeLightbox(){
        $lightbox.removeAttribute("class");
        $lightbox.removeChild($figure);
    }
})();
