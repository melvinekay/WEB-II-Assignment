// Slideshow Functionality
const backgrounds = document.querySelectorAll('.background');
let currentBackground = 0;

function changeBackground() {
    backgrounds[currentBackground].classList.remove('active');
    currentBackground = (currentBackground + 1) % backgrounds.length;
    backgrounds[currentBackground].classList.add('active');
}

// Set first background as active
backgrounds[0].classList.add('active');
// Change background every 5 seconds
setInterval(changeBackground, 5000);

// Contact Form Submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.onsubmit = function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Simple validation
        if (name && email && message) {
            alert(`Thank you for your message, ${name}! We will get back to you shortly.`);
            this.reset(); // Reset form fields after submission
        } else {
            alert('Please fill out all fields.');
        }
    };
}

// Recipe Submission
const recipeForm = document.getElementById('submit-recipe-form');
if (recipeForm) {
    recipeForm.onsubmit = function(event) {
        event.preventDefault();
        const recipeTitle = document.getElementById('recipe-title').value;
        const ingredients = document.getElementById('ingredients').value;
        const description = document.getElementById('description').value;

        // Simple validation
        if (recipeTitle && ingredients && description) {
            alert(`Recipe "${recipeTitle}" submitted successfully!`);
            this.reset(); // Reset form fields after submission
        } else {
            alert('Please fill out all fields.');
        }
    };
}
