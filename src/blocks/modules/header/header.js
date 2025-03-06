function headerController() {
    const header = document.querySelector('[data-js="siteHeader"]')

    if(!header) return
    
    const burger = header.querySelector('[data-js="siteHeaderBurger"]')
    const burgerToggleBtn = header.querySelector('[data-js="siteHeaderBurgerBtn"]')
    const pageLayout = document.querySelector('[data-js="pageLayout"]')
    
    if(window.scrollY > header.offsetHeight) {
        {
            pageLayout.style.paddingTop = header.offsetHeight + 'px'
            header.classList.add('site-header--fixed')
        }

        if(window.scrollY > header.offsetHeight + 10) {
            header.classList.add('site-header--visible')
        }
    }
    
    if(burger && burgerToggleBtn) {
        const burgerHeight = burger.scrollHeight
        burgerToggleBtn.addEventListener('click', function() {
            $(header).toggleClass('site-header--burger');

            if(window.innerWidth > 1023) {
                if(header.classList.contains('site-header--burger')) {
                    burger.style.maxHeight = burgerHeight + 'px';
                } else {
                    burger.style.maxHeight = '0px';
                }
            } else {
                if(header.classList.contains('site-header--burger')) {
                    lockBody()
                } else {
                    unlockBody()
                }
            }

        })
    }

    if(burger && window.innerWidth < 1024) {
        const burgerMenus = burger.querySelectorAll('[data-js="burgerMenu"]');

        if(burgerMenus.length > 0) {
            burgerMenus.forEach(menu => {
                const title = menu.querySelector('[data-js="burgerMenuTitle"]')
                const items = menu.querySelector('[data-js="burgerMenuItems"]')

                if(menu.classList.contains('active')) {
                    $(items).slideDown(300);
                }

                title.addEventListener('click', function() {
                    if(menu.classList.contains('active')) {
                        $(items).slideUp(300);
                        menu.classList.remove('active');
                    } else {
                        $(items).slideDown(300);
                        menu.classList.add('active');
                    }
                })
            })
        }
    }

    window.addEventListener('scroll', () => {
        let st = window.scrollY
        let headerHeight = header.offsetHeight
        let isFixed = header.classList.contains('site-header--fixed')

        if(st > headerHeight) {
            if(!isFixed) {
                pageLayout.style.paddingTop = headerHeight + 'px'
                header.classList.add('site-header--fixed')
            }
        } else {
            pageLayout.style.paddingTop = '0px'
            header.classList.remove('site-header--fixed')
        }

        if(st > headerHeight + 10) {
            header.classList.add('site-header--visible')
        } else {
            header.classList.remove('site-header--visible')
        }
    })
}