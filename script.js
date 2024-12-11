document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".about-text, .about-photo, .skills-grid, .skill-item");

    function checkScroll() {
        const triggerHeight = window.innerHeight / 1.3;

        elements.forEach((el) => {
            const elementTop = el.getBoundingClientRect().top;

            if (elementTop < triggerHeight) {
                el.classList.add("scroll-animation");
            }
        });
    }

    // Run checkScroll on page load and when scrolling
    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Run once to capture elements already in view
});



document.addEventListener("DOMContentLoaded", () => {
    const skillItems = document.querySelectorAll(".skill-item");

    const onScroll = () => {
        skillItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                item.classList.add("visible");
            }
        });
    };

    window.addEventListener("scroll", onScroll);

    // Trigger the scroll event initially to show elements already in view
    onScroll();
});
