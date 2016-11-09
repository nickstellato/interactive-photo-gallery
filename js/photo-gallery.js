(function(){
    var $photos = document.querySelectorAll("img");
    var $lightbox = document.getElementById("lightbox");

    $photos.forEach(function(photo){
        photo.addEventListener("click", illuminate, false);
    });

    $lightbox.addEventListener("click", removeLightbox, false);

    function illuminate(){
        $lightbox.className = "lightbox";
        $thumbnailURL = this.getAttribute("src");
        $figure = document.createElement("figure");
        $figcaption = document.createElement("figcaption");
        $img = document.createElement("img");
        //add the src to the image

        //add arrows to the figure
        
        //append arrows to the figure

        $figure.appendChild($img);
        $figure.appendChild($figcaption);
        $lightbox.appendChild($figure);
    }

    function removeLightbox(){
        $lightbox.removeAttribute("class");
        $lightbox.removeChild($figure);
    }
})();
