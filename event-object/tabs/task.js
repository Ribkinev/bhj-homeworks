let tabs = document.querySelectorAll('.tab');
let tabsContents = document.querySelectorAll('.tab__content');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('tab_active'));
        tabsContents.forEach(c => c.classList.remove('tab__content_active'));
        tab.classList.add('tab_active');
        tabsContents[index].classList.add('tab__content_active');
    });
});