function sidebarAboutController() {
    const sidebars = document.querySelectorAll('[data-js="sidebarAbout"]');
    const vw = window.innerWidth;
    
    if(sidebars.length < 1 || vw > 1023) return
    
    const visibleItemsCount = 4
    const showMoreLayout =  `
                            <span class="show">Показать все</span>
                            <span class="hide">Скрыть</span>
                            `
    
    sidebars.forEach(sidebar => {
        
        const itemsList = sidebar.querySelectorAll('[data-js="sidebarAboutItem"]')

        if(itemsList.length > visibleItemsCount) {
            let itemsBlock = sidebar.querySelector('[data-js="sidebarAboutItems"]');
            let fullHeight = itemsBlock.offsetHeight;
            let shortHeight = 0
            let showHideBtn = document.createElement('button');

            for(let i = 0; i < visibleItemsCount; i++) {
                shortHeight += itemsList[i].offsetHeight + 16
            }

            showHideBtn.setAttribute('type', 'button');
            showHideBtn.classList.add('sidebar-about__show');
            showHideBtn.innerHTML = showMoreLayout

            sidebar.appendChild(showHideBtn)
            itemsBlock.style.maxHeight = shortHeight + 'px'

            showHideBtn.addEventListener('click', function(e) {
                if(this.classList.contains('sidebar-about__show--opened')) {
                    this.classList.remove('sidebar-about__show--opened')
                    itemsBlock.style.maxHeight = shortHeight + 'px'
                } else {
                    this.classList.add('sidebar-about__show--opened')
                    itemsBlock.style.maxHeight = fullHeight + 'px'
                }
            })

        }
    })
}