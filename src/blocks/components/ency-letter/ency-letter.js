function encyLetterController() {
    const lettersBlocks = document.querySelectorAll('[data-js="encyLetter"]');
    
    if(lettersBlocks.length < 1) return
    
    const visibleItemsCount = 4
    
    lettersBlocks.forEach(letter => {
        
        const itemsList = letter.querySelectorAll('[data-js="encyLetterLink"]')

        if(itemsList.length > visibleItemsCount + 1) {
            const showMoreLayout =  `
                                    <span class="show">Показать ${itemsList.length - visibleItemsCount}</span>
                                    <span class="hide">Скрыть</span>
                                    `
            let itemsBlock = letter.querySelector('[data-js="encyLetterList"]');
            let fullHeight = itemsBlock.offsetHeight;
            let shortHeight = 0
            let showHideBtn = document.createElement('button');

            for(let i = 0; i < visibleItemsCount; i++) {
                shortHeight += itemsList[i].offsetHeight + 8
            }

            showHideBtn.setAttribute('type', 'button');
            showHideBtn.classList.add('ency-letter__show');
            showHideBtn.innerHTML = showMoreLayout

            letter.appendChild(showHideBtn)
            itemsBlock.style.maxHeight = shortHeight + 'px'

            showHideBtn.addEventListener('click', function(e) {
                if(this.classList.contains('ency-letter__show--opened')) {
                    this.classList.remove('ency-letter__show--opened')
                    itemsBlock.style.maxHeight = shortHeight + 'px'
                } else {
                    this.classList.add('ency-letter__show--opened')
                    itemsBlock.style.maxHeight = fullHeight + 'px'
                }
            })

        }
    })
}