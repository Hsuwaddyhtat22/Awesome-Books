export const handleBookListClick = (e, bookList, showNoBooksMessage) => {
    if (e.target.classList.contains('remove-button')) {
        const row = e.target.closest('tr');
        row.remove();

        if (bookList.childElementCount === 0) {
            showNoBooksMessage(true);
        }
    }
};

export const showNoBooksMessage = (show) => {
    const noBooksMessage = document.querySelector('#no-books-message');
    noBooksMessage.style.display = show ? 'block' : 'none';
};