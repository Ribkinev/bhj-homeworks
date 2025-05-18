let fontSizeControl = document.querySelectorAll('.font-size');
let book = document.getElementById('book');

fontSizeControl.forEach(control => {
    control.addEventListener('click', (e) => {
        e.preventDefault();

        fontSizeControl.forEach(c => c.classList.remove('font-size_active'));
        control.classList.add('font-size_active');
        book.classList.remove('book_fs-small', 'book_fs-big');

        if (control.dataset.size === 'small') {
            book.classList.add('book_fs-small');
        } else if (control.dataset.size === 'big') {
            book.classList.add('book_fs-big');
        }
    });
});