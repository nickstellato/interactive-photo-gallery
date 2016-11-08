(function(){
    var $photos = document.querySelectorAll("img");
    var $lightbox = document.getElementById("lightbox");

    $photos.forEach(function(photo){
        photo.addEventListener("click", function(){
            $lightbox.className = "lightbox";
        });
    });

    $lightbox.addEventListener("click", function(){
        $lightbox.removeAttribute("class");
    });
})();
