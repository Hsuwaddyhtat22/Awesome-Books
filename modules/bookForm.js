export const handleAddBookFormSubmit = (e, bookList, showNoBooksMessage) => {
    e.preventDefault();
    const titleInput = document.querySelector('#title');
    const authorInput = document.querySelector('#author');
    const title = titleInput.value.trim();
    const author = authorInput.value.trim();

    if (title !== '' && author !== '') {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${title}</td>
            <td>${author}</td>
            <td>
                <button class="remove-button">Remove</button>
            </td>
        `;
        bookList.appendChild(row);
        titleInput.value = '';
        authorInput.value = '';
        showNoBooksMessage(false);
    }
};