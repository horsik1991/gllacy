$(document).ready(function(){
    let mainPageColor = $('.page'),
        checker = $('.radio__input'),
        mainPageImage = $('.slide__image'),
        mainPageTextIceCream = $('.slide__title');
    checker.click(function(){
        if ($(this).attr('id')==='slide1') {
            mainPageColor.css('background-color','#849d8f');
            mainPageImage.attr('src','static/images/content/1.png');
            mainPageTextIceCream.text('Крем-брюле и пломбир с малиновым джемом')
        } else
        if ($(this).attr('id')==='slide2'){
            mainPageColor.css('background-color','#8996a6');
            mainPageImage.attr('src','static/images/content/2.png');
            mainPageTextIceCream.text('Шоколадный пломбир и лимонный сорбет')
        } else {
            mainPageColor.css('background-color','#9d8b84');
            mainPageImage.attr('src','static/images/content/3.png');
            mainPageTextIceCream.text('Пломбир с помадкой и клубничный щербет')
        }
    });

});
