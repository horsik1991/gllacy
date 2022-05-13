$(document).ready(function(){
    let mainMenu = $('.header__menu > ul.menu');
    let navHeaderMenu = $('#headerMenu');
    let headerUserMenu = $('.header__user-menu');
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
        // mainMenu.addClass('menu--mobile').removeClass('menu');
        navHeaderMenu.css({
            'order': '3',
            'grid-column' : '1/-1'
        });
        headerUserMenu.css({
           'grid-column-end':'-1'
        });
        subMenu.click(function(){
            subMenuItems.toggle(300);
            console.log('click')

        });

    }




    $(document).on('click', function(e) {
        if (!$(e.target).closest(".submenu").length) {
            subMenuItems.hide();
        }
        e.st
        opPropagation();
    });





    search.click(function(){
        searchInput.toggle()
    });

    persAreaIcon.click(function () {
        persAreaForm.toggle();})

});