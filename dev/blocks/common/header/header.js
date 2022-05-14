$(document).ready(function(){
    let mainMenuUl = $('.menu');
    let searchInput = $('.search');
    let search = $('.icons--search');
    let persAreaIcon = $('.icons--persArea');
    let persAreaForm = $('.pers-area');
    let header = $('.header');
    let subMenu = $('.submenu');
    let subMenuItems = $('.submenu__items');
    let mobileMenu = $('.icons--menu');
    let winWidth = window.screen.availWidth;
    if (winWidth > 800){
        subMenu.hover(function(){
            subMenuItems.stop().fadeToggle(300);
        })
    } else {
        subMenu.click(function(){
            subMenuItems.toggle(300);
        });
    }
    mobileMenu.click(function(){
        mainMenuUl.toggleClass('menu--mobile');

    });
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