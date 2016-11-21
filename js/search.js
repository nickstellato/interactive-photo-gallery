(function(){
    'use strict';

    var photos = makeArray("photo")

    var searchBox = document.getElementById("searchBox");

    searchBox.addEventListener("keyup", function(){
        for (var i = 0; i < photos.length; i++){
            if (photos[i].alt.search(searchBox.value) === -1) {
                photos[i].setAttribute("class", "hidden");
            }
        }
    });

    function makeArray(className){
        return Array.prototype.slice.call(
            document.getElementsByClassName(className));
    }

})();