// Form validation and submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Simple form validation
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert("Thank you for contacting us, " + name + "! We'll get back to you soon.");
    } else {
        alert("Please fill out all fields.");
    }

    // Clear form after submission
    document.getElementById("contact-form").reset();
});
// Search Functionality
function filterBooks() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const books = document.querySelectorAll('.book-item');

    books.forEach(book => {
        const title = book.getAttribute('data-title').toLowerCase();
        if (title.includes(input)) {
            book.style.display = '';
        } else {
            book.style.display = 'none';
        }
    });
}

// Search functionality for Courses
function filterCourses() {
    const input = document.getElementById('searchCourses').value.toLowerCase();
    const courses = document.querySelectorAll('.course-item');

    courses.forEach(course => {
        const title = course.getAttribute('data-title').toLowerCase();
        if (title.includes(input)) {
            course.style.display = '';
        } else {
            course.style.display = 'none';
        }
    });
}

// Filter functionality for Day-Wise Notes
function filterNotes() {
    const input = document.getElementById('searchNotes').value.toLowerCase();
    const notes = document.querySelectorAll('.note-item');

    notes.forEach(note => {
        const day = note.getAttribute('data-day').toLowerCase();
        if (day.includes(input)) {
            note.style.display = '';
        } else {
            note.style.display = 'none';
        }
    });
}
