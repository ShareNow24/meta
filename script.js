document.addEventListener('DOMContentLoaded', function () {
    // Show welcome popup for 3 seconds
    const welcomePopup = document.querySelector('.popup');
    welcomePopup.style.display = 'block';
    setTimeout(() => {
        welcomePopup.style.display = 'none';
    }, 3000);

    // Show form page on "See More" button click
    const seeMoreBtn = document.getElementById('see-more-btn');
    const formPage = document.getElementById('formPage');
    seeMoreBtn.addEventListener('click', function () {
        formPage.style.display = 'flex';
    });

    // Toggle "Go" button color based on input fields
    const emailInput = document.getElementById('email');
    const nameInput = document.getElementById('name');
    const goBtn = document.getElementById('goBtn');

    emailInput.addEventListener('input', toggleGoBtn);
    nameInput.addEventListener('input', toggleGoBtn);

    function toggleGoBtn() {
        goBtn.classList.toggle('inactive', emailInput.value === '' || nameInput.value === '');
    }

    // Show wait popup on form submission
    const infoForm = document.getElementById('infoForm');
    const waitPopup = document.getElementById('waitPopup');

    infoForm.addEventListener('submit', function (event) {
        event.preventDefault();
        waitPopup.style.display = 'block';

        // Replace the Formspree link below with your own link
        const formspreeLink = 'https://formspree.io/f/xqkrkppn';
        
        // Simulate form submission delay
        setTimeout(() => {
            // Redirect to a new page after form submission
            window.location.href = 'https://cdn.shopify.com/s/files/1/0558/7052/1432/files/images.jpg?v=1704050622';
        }, 2000);
    });
});
