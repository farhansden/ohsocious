let currentIndex = 0;
const cards = document.querySelectorAll('.card');

function swipeCard(direction) {
    if (direction === 'left') {
        cards[currentIndex].style.transform = 'translateX(-100%)';
    } else {
        cards[currentIndex].style.transform = 'translateX(100%)';
    }
    currentIndex = (currentIndex + 1) % cards.length;
}

// Add event listeners for touch events to detect swipes
let startX;

const handleSwipe = (moveX) => {
    const diffX = startX - moveX;

    if (Math.abs(diffX) > 50) { // Threshold for swipe
        if (diffX > 0) {
            swipeCard('left');
        } else {
            swipeCard('right');
        }
        startX = null; // Reset startX after swipe
    }
};

// Touch events
document.addEventListener('touchstart', (event) => {
    startX = event.touches[0].clientX;
    console.log('Touch Start:', startX);
});

document.addEventListener('touchmove', (event) => {
    const moveX = event.touches[0].clientX;
    console.log('Touch Move:', moveX);
    handleSwipe(moveX);
});

// Mouse events
document.addEventListener('mousedown', (event) => {
    startX = event.clientX;
    console.log('Mouse Down:', startX);
});

document.addEventListener('mousemove', (event) => {
    if (startX !== null) {
        console.log('Mouse Move:', event.clientX);
        handleSwipe(event.clientX);
    }
});

document.addEventListener('mouseup', () => {
    startX = null; // Reset startX after swipe
});
