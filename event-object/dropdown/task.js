let dropdownValue = document.querySelector(".dropdown__value");
let dropdownList = document.querySelector(".dropdown__list");
let dropdownItem = document.querySelectorAll(".dropdown__item");

dropdownValue.addEventListener('click', () => {
    dropdownList.classList.toggle('dropdown__list_active')
})

for (let i = 0; i < dropdownItem.length; i++) {
    dropdownItem[i].addEventListener('click', (event) => {
        event.preventDefault();
        dropdownValue.textContent = dropdownItem[i].textContent;
        dropdownList.classList.remove('dropdown__list_active');
    })
}