const hamburger = document.getElementById('hamburger-menu');
const navigation = document.querySelector('.site-navigation');

function toggleNavigation() {
    navigation.classList.toggle('active');
}

function checkWindowSize() {
    if (window.innerWidth > 800) {
        navigation.classList.remove('active');
    }
}

function debounce(func, wait) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
}

hamburger.addEventListener('click', toggleNavigation);
window.addEventListener('resize', debounce(checkWindowSize, 100));

checkWindowSize(); // Initial check