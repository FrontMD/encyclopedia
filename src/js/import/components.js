@@include("../../blocks/components/search-form/search-form.js")
@@include("../../blocks/components/sidebar-about/sidebar-about.js")
@@include("../../blocks/components/ency-letter/ency-letter.js")

document.addEventListener('DOMContentLoaded', () => {
    searchFormController();
    sidebarAboutController();
    encyLetterController();
})