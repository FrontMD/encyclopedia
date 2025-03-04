function searchFormController() {
    const formsList = document.querySelectorAll('[data-js="searchForm"]')

    if(formsList.length < 1) return

    formsList.forEach(form => {
        const input = form.querySelector('[data-js="searchFormInput"]');
        const results =  form.querySelector('[data-js="searchFormResults"]');

        input.addEventListener('input', function() {
            const value = this.value

            if(value.length > 0) {
                results.classList.add('active')
            } else {
                results.classList.remove('active')
            }
        })
    })
}