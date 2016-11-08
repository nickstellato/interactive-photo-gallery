(function(){
    var $photos = document.querySelectorAll("img");
    var $lightbox = document.getElementById("lightbox");
    var $figure = document.createElement("figure");
    var $largeImage = document.createElement("img");

    $photos.forEach(function(photo){
        photo.addEventListener("click", illuminate, false);
    });

    $lightbox.addEventListener("click", removeLightbox, false);

    function illuminate(){
        $lightbox.className = "lightbox";
    }

    function removeLightbox(){
        $lightbox.removeAttribute("class");
    }
})();
