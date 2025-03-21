document.addEventListener('DOMContentLoaded', () => {
    $('img.lazyload').lazyload();
    fancyboxInit();
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

// инициализация фансибокса
function fancyboxInit() {
    Fancybox.bind("[data-fancybox]", {
        placeFocusBack: false,
        mainClass: 'my-fancybox',
        idle: false,
        Carousel: {
            transition: "crossfade",
            Navigation: {
                prevTpl: `<svg><use xlink:href=/img/sprites/sprite.svg#arrow_classic></use></svg>`,
                nextTpl: `<svg><use xlink:href=/img/sprites/sprite.svg#arrow_classic></use></svg>`,
              },
        },
        Thumbs: {
            type: "classic",
        },
        Toolbar: {
            enabled: true,
            display: {
                left: [],
                middle: [],
                right: [
                  "close",
                ],
            },
        }

    });
}