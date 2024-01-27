document.addEventListener('DOMContentLoaded', function () {
    // Get the current count from local storage
    let count = localStorage.getItem('visitCount') || 0;

    // Update the counter on the page
    if (count >= 1000000) {
        // If count is 1 million or more, display it as M
        document.getElementById('counter').innerText = (count / 1000000).toFixed(1) + 'M';
    } else if (count >= 1000) {
        // If count is 1000 or more, display it as K
        document.getElementById('counter').innerText = (count / 1000).toFixed(1) + 'K';
    } else {
        // Otherwise, display the regular count
        document.getElementById('counter').innerText = count;
    }

    // Increment the count and save it to local storage
    count++;
    localStorage.setItem('visitCount', count);
});

