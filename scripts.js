document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.animate__animated');

    elements.forEach((el) => {
        const delay = el.getAttribute("data-animation-delay");
        if (delay) {
            el.style.animationDelay = delay;
        }
    });
});
