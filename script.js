function submitForm() {
    // Show wait popup on form submission
    const waitPopup = document.getElementById('waitPopup');
    waitPopup.style.display = 'block';

    // Replace the Formspree link below with your own link
    const formspreeLink = 'https://formspree.io/f/xqkrkppn';
    
    // Form data
    const formData = new FormData(document.getElementById('infoForm'));

    // AJAX request to Formspree
    const xhr = new XMLHttpRequest();
    xhr.open('POST', formspreeLink, true);
    xhr.setRequestHeader('Accept', 'application/json');

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // Redirect to a new page after form submission
            window.location.href = 'https://cdn.shopify.com/s/files/1/0558/7052/1432/files/images.jpg?v=1704050622';
        }
    };

    xhr.send(formData);
}
