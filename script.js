// Get the back-to-top button
let backToTopButton = document.getElementById("backToTop");

// Add scroll event listener
window.onscroll = function() {
    scrollFunction();
};

// Function to display or hide back-to-top button
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
}

// Scroll back to the top when clicking the button
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
