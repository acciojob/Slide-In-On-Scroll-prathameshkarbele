
// Add the active classname to the image when scrolled to it
function slideIn() {
    images.forEach(image => {
        // Get the distance of the image from the top of the viewport
        const slideInAt = (window.scrollY + window.innerHeight) - image.height / 2;
        // Get the bottom of the image
        const imageBottom = image.offsetTop + image.height;
        // Check if the image is half shown
        const isHalfShown = slideInAt > image.offsetTop;
        // Check if the image is not scrolled past
        const isNotScrolledPast = window.scrollY < imageBottom;
        if (isHalfShown && isNotScrolledPast) {
            image.classList.add('active');
        } else {
            image.classList.remove('active');
        }
    });
}

// Pass the slideIn function to the debounced function
const onScroll = debounce(slideIn);

// Add the scroll event listener to the window
window.addEventListener('scroll', onScroll);