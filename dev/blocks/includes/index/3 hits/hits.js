function mobileSlider(){
    $(document).ready(function(){
        let sectionHits = $('.hitsForSlick');
        let innerWidth = $(window).width();
        // sectionHits.addClass('hits');
        if(innerWidth>379){
            sectionHits.slick('unslick');
            sectionHits.addClass('hits');

        } else {

            sectionHits.removeClass('hits');
            sectionHits.slick({
                dots:true,
                arrows: true
            });
        }
    })

}
$(window).on('load resize', function() {
    mobileSlider();
});