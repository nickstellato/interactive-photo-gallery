/* global photos, jQuery */

(function($){
    'use strict';
    
    $('#search').keyup(function(){
        
        var searchTerm = $(this).val().toLowerCase();
        
        for (var i = 0; i < photos.length; i++){
            
            var $photo = photos[i];
            var $caption = $photo.caption;
            var $id = "photo-" + i;
            
            if ($caption.toLowerCase().indexOf(searchTerm) > 0){
                
                $("#id").fadeOut();
                
            }
        
        }
        
    });
    
}(jQuery));