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
        if (count % 2 === 0) {
            counterText.innerHTML = `Number: ${count} (Even)`;
        } else {
            counterText.innerHTML = `Number: ${count} (Odd)`;
        }

        // Apply corresponding class
        counterText.classList.remove('even', 'odd');
        if (count % 2 === 0) {
            counterText.classList.add('even');
        } else {
            counterText.classList.add('odd');
        }
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
            if (this.getAttribute('href') === '#hobbies') {
                this.textContent = 'Selected Hobbies';
            } else if (this.getAttribute('href') === '#reasons') {
                this.textContent = 'Selected Reasons';
            }
        });

        link.addEventListener('mouseleave', function () {
            // Revert to regular text
            if (this.getAttribute('href') === '#hobbies') {
                this.textContent = 'Hobbies';
            } else if (this.getAttribute('href') === '#reasons') {
                this.textContent = 'Reasons';
            }
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
