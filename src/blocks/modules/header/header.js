function headerController() {
    const header = document.querySelector('[data-js="siteHeader"]')

    if(!header) return

    const burger = header.querySelector('[data-js="siteHeaderBurger"]')
    const burgerHeight = burger.scrollHeight
    const burgerToggleBtn = header.querySelector('[data-js="siteHeaderBurgerBtn"]')
    const pageLayout = document.querySelector('[data-js="pageLayout"]')

    if(burger && burgerToggleBtn) {
        burgerToggleBtn.addEventListener('click', function() {
            $(header).toggleClass('site-header--burger');

            if(window.innerWidth > 1023) {
                if(header.classList.contains('site-header--burger')) {
                    burger.style.maxHeight = burgerHeight + 'px';
                } else {
                    burger.style.maxHeight = '0px';
                }
            }
        })
    }

    window.addEventListener('scroll', () => {
        let st = window.scrollY

        if(st > 55) {
            pageLayout.style.paddingTop = header.offsetHeight + 'px'
            header.classList.add('site-header--fixed')
        } else {
            pageLayout.style.paddingTop = '0px'
            header.classList.remove('site-header--fixed')
        }

        if(st > 100) {
            header.classList.add('site-header--visible')
        } else {
            header.classList.remove('site-header--visible')
        }
    })
}