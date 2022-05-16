$(document).ready(function () {
    let textDefault = 'Закрыть описание';
    let textOther = 'Открыть описание';
    let closeBtn = $('.info__close');

    closeBtn.text(textDefault);

    closeBtn.click(function() {
        $('.info').toggle();
        textDefault = textOther;
        textOther = closeBtn.text();
        closeBtn.text(textDefault);
    });

});//end of ready