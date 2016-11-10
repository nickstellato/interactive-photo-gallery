(function(){
    var $photos = getPhotosArray();
    console.log($photos);
    var $lightbox = document.getElementById("lightbox");

    $photos.forEach(function(photo){
        photo.addEventListener("click", illuminate, false);
    });

    function illuminate(){
        $lightbox.setAttribute("class", "lightbox");
        $lightbox.addEventListener("click", removeLightbox, false);

        $photoURL = this.getAttribute("src").replace("/thumbnails", "");
        $img = document.createElement("img");
        $img.setAttribute("src", $photoURL);
        $img.setAttribute("class", "largePhoto");
        $img.setAttribute("id", "currentPhoto");

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

        function getPreviousPhoto(){}

        function getNextPhoto(){}

        // currentPhoto = document.getElementById("currentPhoto");
        // console.log(currentPhoto);
        // currentPhotoSRC = currentPhoto.getAttribute("src")
        // console.log(currentPhotoSRC);
        // currentPosition = $photos.indexOf(currentPhotoSRC);
        // console.log(currentPosition);

        currentPhoto = $photos.indexOf(this);
        nextPhoto = currentPhoto + 1;
        previousPhoto = currentPhoto - 1;
        console.log(previousPhoto);
        console.log(nextPhoto);

        console.log($photos.indexOf(this));
    }

    function getPhotosArray(){
        $photosList = document.querySelectorAll("img");
        return Array.prototype.slice.call($photosList);
    }

    function removeLightbox(){
        $lightbox.removeAttribute("class");
        $lightbox.removeChild($figure);
    }
})();
