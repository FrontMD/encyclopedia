function headerController() {
    const header = document.querySelector('[data-js="siteHeader"]')

    if(!header) return

    const burger = header.querySelector('[data-js="siteHeaderBurger"]')
    const burgerToggleBtn = header.querySelector('[data-js="siteHeaderBurgerBtn"]')

    if(burger && burgerToggleBtn) {
        burgerToggleBtn.addEventListener('click', function() {
            $(burger).toggleClass('active');
            $(this).toggleClass('active');
        })
    }
}