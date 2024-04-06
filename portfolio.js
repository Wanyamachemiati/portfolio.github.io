// Get the form element
const contactForm = document.getElementById("contactForm");

// Add an event listener for form submission
contactForm.addEventListener("submit", function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the form inputs
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const message = contactForm.querySelector('textarea').value;

    // Check if the inputs are not empty
    if (name.trim() !== '' && email.trim() !== '' && message.trim() !== '') {
        // Display a success message
        alert(`Thank you, ${name}! Your message has been sent.`);
        
        // Clear the form inputs
        contactForm.reset();
    } else {
        // Display an error message if any input is empty
        alert("Please fill in all the fields.");
    }
});
