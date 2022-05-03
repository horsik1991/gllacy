$(document).ready(function(){
    let mainMenu = $('.header__menu > ul.menu');
        // searchInput = $('.search'),
        // search = $('.icons--search'),
        // persAreaIcon = $('.icons--persArea'),
        // persAreaForm = $('.pers-area'),
    let header = $('.header');
    let subMenu = $('.submenu');
    let subMenuItems = $('.submenu__items');
    let winWidth = window.screen.availWidth;
    console.log(winWidth);
    console.log(header);
    if (winWidth > 800){
        mainMenu.removeClass('menu--mobile');
        subMenu.hover(function(){
            subMenuItems.stop().fadeToggle(300);
        })
    } else {
        mainMenu.addClass('menu--mobile').removeClass('menu');
        subMenu.click(function(){
            subMenuItems.toggle(300);
        });

    }

//     subMenu.hide();
//     if (winWidth  > 800){
//         mainMenu.hover(function(){
//             $(this).removeClass('menu--mobile');
//             subMenu.stop().fadeToggle(300);
//         });
//     } else {
//         mainMenu.click(function () {
//             $(this).addClass('menu--mobile');
//             // $('.submenu > .menu__sub').addClass('menu--mobile').removeClass('menu__sub');
//             subMenu.toggle()
//         });
//     }
//
//     search.click(function(){
//         searchInput.toggle()
//     });
//
//     persAreaIcon.click(function () {
//         persAreaForm.toggle();})
//
});