"use strict";

var photos = makeArray("img")

photos.forEach(function(photo){
    photo.addEventListener("click", illuminate, false);
});

function illuminate(){
    var lightbox = document.getElementById("lightbox");
    lightbox.setAttribute("class", "lightbox");

    var index = photos.indexOf(this);

    var img = makeImage(index);
    
    var figcaption = makeFigCaption(index);

    var leftArrow = makeArrow(index, "left", figcaption, img);

    var rightArrow = makeArrow(index, "right", figcaption, img);

    var figure = makeFigure(img, figcaption, leftArrow, rightArrow);

    lightbox.appendChild(figure);
}

function makeImage(index){
    var img = document.createElement("img");
    img.setAttribute("class", "largePhoto");
    img.setAttribute("id", "currentPhoto");
    var photoURL = photos[index].src.replace("/thumbnails", "");
    img.setAttribute("src", photoURL);
    return img;
}

function makeFigCaption(index){
    var caption = photos[index].alt;        
    var figcaption = document.createElement("figcaption");
    figcaption.innerText = caption;
    figcaption.setAttribute("class", "caption");
    return figcaption;
}

function makeArrow(index, direction, caption, img){
    var arrow = document.createElement("a");
    if (direction === "left"){
        arrow.setAttribute("id", "previous");
        arrow.setAttribute("class", "arrow arrow-left");
        arrow.innerHTML = '&#10094;';
        arrow.addEventListener("click", photoScroll(index, "previous", caption, img), 
            false);
    } else if (direction === "right"){
        arrow.setAttribute("id", "next");
        arrow.setAttribute("class", "arrow arrow-right");
        arrow.innerHTML = '&#10095;'
        arrow.addEventListener("click", photoScroll(index, "next", caption, img),
            false);
    } else {
        return Error;
    }

    return arrow
}

function makeFigure(img, figcaption, leftArrow, rightArrow) {
    var figure = document.createElement("figure");
    figure.appendChild(leftArrow);
    figure.appendChild(img);
    figure.appendChild(figcaption);
    figure.appendChild(rightArrow);
    return figure;
}

function photoScroll(index, direction, caption, img) {

    if(direction === "next") {
        if((index + 1) > 11) {
            index = 0;
        } else {
            index = index + 1;
        }
    } else if (direction === "previous"){
        if((index - 1) < 0) {
            index = 11;
        } else {
            index = index - 1;
        }
    } else {
        return Error;
    }

    caption.innerText = photos[index].alt;
    img.setAttribute("src", photos[index].src.replace("/thumbnails", ""));
}


function makeArray(tag){
    return Array.prototype.slice.call(document.querySelectorAll(tag));
}
