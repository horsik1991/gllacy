$(document).ready(function(){
    let searchInput = $('.search');
    let search = $('.icons--search');
    let persAreaIcon = $('.icons--persArea');
    let persAreaForm = $('.pers-area');
    let header = $('.header');
    let subMenu = $('.submenu');
    let subMenuItems = $('.submenu__items');
    let winWidth = window.screen.availWidth;
    console.log(winWidth);
    console.log(header);
    if (winWidth > 800){
        subMenu.hover(function(){
            subMenuItems.stop().fadeToggle(300);
            console.log('hover')
        })
    } else {
        subMenu.click(function(){
            subMenuItems.toggle(300);
            console.log('click')
        });
    }

//Функция закрытия подменю кликом по любому месту не являющемуся собственно блоком с подменю
    $(document).on('click', function(e) {
        if (!$(e.target).closest(".submenu").length) {
            subMenuItems.hide();
        }
        e.stopPropagation();
    });

    search.click(function(){
        searchInput.toggle()
    }); //end of search.CLICK

    persAreaIcon.click(function () {
        persAreaForm.toggle();}) //end of personalArea.CLICK

}); //end of READY