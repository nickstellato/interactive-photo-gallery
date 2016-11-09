(function(){
    var $photos = document.querySelectorAll("img");
    var $lightbox = document.getElementById("lightbox");

    $photos.forEach(function(photo){
        photo.addEventListener("click", illuminate, false);
    });

    $lightbox.addEventListener("click", removeLightbox, false);

    function illuminate(){
        $lightbox.className = "lightbox";

        $photoURL = this.getAttribute("src").replace("/thumbnails", "");
        $img = document.createElement("img");
        $img.setAttribute("src", $photoURL);
        $img.className = "largePhoto";

        $caption = this.getAttribute("alt");        
        $figcaption = document.createElement("figcaption");
        $figcaption.innerText = $caption;
        $figcaption.className = "caption";

        $figure = document.createElement("figure");
        
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
