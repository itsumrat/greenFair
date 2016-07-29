jQuery(document).ready(function() {
     var api=jQuery('.megafolio-container').megafoliopro(
        {
            filterChangeAnimation:"rotatescale",
            filterChangeSpeed:600,
            filterChangeRotate:99,
            filterChangeScale:0.6,          
            delay:20,
            paddingHorizontal:10,
            paddingVertical:10,
            layoutarray:[0]
         });
 
      // CALL FILTER FUNCTION IF ANY FILTER HAS BEEN CLICKED
      jQuery('.filter').click(function() { 
          api.megafilter(jQuery(this).data('category'));  
      });
      
      
      // THE FANCYBOX PLUGIN INITALISATION
        jQuery(".fancybox").fancybox({
             openEffect  : 'none',
             closeEffect : 'none',
             helpers : {
                         media : {}
                        }
        });
        
   });
   

