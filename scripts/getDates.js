document.addEventListener('DOMContentLoaded', function() {
    let lastModifiedTime = "2024-01-12";

    document.getElementById('currentYear').textContent = new Date().getFullYear();

    let currentDateTime = new Date();
    document.getElementById('lastModified').textContent = 'Last Modified: ' + currentDateTime.toLocaleString('en');

});