function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    
    // Show wait popup on form submission
    const waitPopup = document.getElementById('waitPopup');
    waitPopup.style.display = 'block';

    // Replace the Formspree link below with your own link
    const formspreeLink = 'https://formspree.io/f/xqkrkppn';
    
    // Simulate form submission delay
    setTimeout(() => {
        // Redirect to a new page after form submission
        window.location.href = 'https://cdn.shopify.com/s/files/1/0558/7052/1432/files/images.jpg?v=1704050622';
    }, 2000);
}
