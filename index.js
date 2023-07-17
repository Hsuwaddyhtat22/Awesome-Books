//const Books = [];
const listLink = document.querySelector('#list-link');
const addNewLink = document.querySelector('#add-new-link');
const aboutLink = document.querySelector('#about-link');
const listSection = document.querySelector('#list-section');
const addNewSection = document.querySelector('#add-new-section');
const aboutSection = document.querySelector('#about-section');
const bookList = document.querySelector('#book-list');
const addBookForm = document.querySelector('#add-book-form');
import { handleAddBookFormSubmit } from './modules/bookForm.js';
import { handleBookListClick, showNoBooksMessage } from './modules/bookList.js';
import { updateDateTime } from './modules/dateandtime.js';

updateDateTime();
setInterval(updateDateTime, 1000);

// Event listener for adding a book
addBookForm.addEventListener('submit', (e) => {
    handleAddBookFormSubmit(e, bookList, showNoBooksMessage);
});

// Event delegation for the "Remove" button
bookList.addEventListener('click', (e) => {
    handleBookListClick(e, bookList, showNoBooksMessage);
});


// Event listeners for navbar links
listLink.addEventListener('click', () => {
    displaySection(listSection);
});

addNewLink.addEventListener('click', () => {
    displaySection(addNewSection);
});

aboutLink.addEventListener('click', () => {
    displaySection(aboutSection);
});

// Function to display a section and hide the others
const displaySection = (section) => {
    const sections = [listSection, addNewSection, aboutSection];
    sections.forEach((s) => {
        if (s === section) {
            s.style.display = 'block';
        } else {
            s.style.display = 'none';
        }
    });
};