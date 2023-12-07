document.addEventListener('DOMContentLoaded', function () {
    // Get the current year and update the current-year span
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;

    // Incrementing Button
    let count = 1;
    document.getElementById('btn-counter').onclick = () => {
        count++;
        const counterText = document.getElementById('txt-counter');

        // Check if the number is even or odd and update the content
        counterText.innerHTML = `Number: ${count} (${count % 2 === 0 ? 'Even' : 'Odd'})`;

        // Apply corresponding class
        counterText.classList.remove('even', 'odd');
        counterText.classList.add(count % 2 === 0 ? 'even' : 'odd');
    };

    // For loop to populate the ordered list with 100 items
    const numbersList = document.getElementById('numbers');
    for (let i = 1; i <= 50; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = i % 2 === 0 ? 'Even' : 'Odd';
        numbersList.appendChild(listItem);
    }

    // Hover functionality for navigation buttons
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('mouseover', function () {
            this.textContent = this.getAttribute('href') === '#hobbies' ? 'Selected Hobbies' : 'Selected Reasons';
        });

        link.addEventListener('mouseleave', function () {
            // Revert to regular text
            this.textContent = this.getAttribute('href') === '#hobbies' ? 'Hobbies' : 'Reasons';
        });
    });

    // Alert button functionality
    const alertButton = document.createElement('button');
    alertButton.textContent = 'Click me for an alert';
    alertButton.addEventListener('click', function () {
        alert('Hello world, website is working to full extent');
    });

    // Append the alert button to the footer
    const footer = document.querySelector('footer');
    footer.appendChild(alertButton);
});