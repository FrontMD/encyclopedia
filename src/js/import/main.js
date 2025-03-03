document.addEventListener('DOMContentLoaded', () => {
    $('img.lazyload').lazyload();
})

// Блокировка скролла при открытии модалок
function lockBody(onlyHeaderPadding = false) {
    let scrollbarWidth = getScrollbarWidth()

    if(!onlyHeaderPadding) {
        $('body').addClass('no-scroll');
        $('body').css('padding-right', scrollbarWidth)
    }

    $('[data-js="siteHeader"]').css('padding-right', scrollbarWidth)
}

function unlockBody() {
	$('body').removeClass('no-scroll');
    $('body').css('padding-right', 0);
    $('[data-js="siteHeader"]').css('padding-right', 0)
}

function getScrollbarWidth() {
    let div = document.createElement('div');

    div.style.overflowY = 'scroll';
    div.style.width = '50px';
    div.style.height = '50px';

    document.body.append(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;

    div.remove();

    return scrollWidth
}