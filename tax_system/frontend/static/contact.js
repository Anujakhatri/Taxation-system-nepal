
function handleContactSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const message = document.getElementById('contactMessage').value.trim();

    if (name && email && message) {
        console.log("Contact Form Submitted:");
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);

        const successMsg = document.getElementById('contactSuccess');
        if (successMsg) {
            successMsg.style.display = 'block';
            setTimeout(() => {
                successMsg.style.display = 'none';
            }, 5000);
        }

        document.getElementById('contactForm').reset();
    }
}
