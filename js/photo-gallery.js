(function(){
    var $photos = document.getElementsByClassName("photo");
    var $body = document.getElementsByTagName("body");

    //when you click on a photo, the photo adds the overlay class to the body

    for (var i = 0; i < $photos.length(); i++){
        $photos[i].addEventListener("click", function(){
            $body.className += "overlay";
        })

    }
})();