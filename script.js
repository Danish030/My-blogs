document.addEventListener('DOMContentLoaded', function () {
    const contentDiv = document.getElementById('content');

    // Function to load content dynamically
    function loadContent(page) {
        fetch(page)
            .then(response => response.text())
            .then(html => {
                contentDiv.innerHTML = html;
            })
            .catch(error => {
                console.error('Error fetching content: ', error);
            });
    }

    // Initial content loading
    loadContent('home.html');

    // Event listeners for navigation
    document.getElementById('home-link').addEventListener('click', function (e) {
        e.preventDefault();
        loadContent('home.html');
    });

    document.getElementById('about-link').addEventListener('click', function (e) {
        e.preventDefault();
        loadContent('about.html');
    });

    document.getElementById('contact-link').addEventListener('click', function (e) {
        e.preventDefault();
        loadContent('contact.html');
    });
});
