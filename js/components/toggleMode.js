function darkMode() {
    console.log("darkmode");
    const allElements = document.querySelectorAll('*');

    allElements.forEach(element => {
        if (element.classList.contains('bg-white')) {
            element.classList.remove('bg-white');
            element.classList.add('bg-gray-900');
        }
        
        if (getComputedStyle(element).color === 'rgb(0, 0, 0)') {
            element.style.color = 'white';
        }
    });
}

function lightMode() {
    console.log("lightmode");
    const allElements = document.querySelectorAll('*');

    allElements.forEach(element => {
        if (element.classList.contains('bg-gray-900')) {
            element.classList.remove('bg-gray-900');
            element.classList.add('bg-white');
        }

        if (getComputedStyle(element).color === 'rgb(255, 255, 255)') {
            element.style.color = 'black';
        }
    });
}

function changeThemeMode() {
    const toggleModeBtn = document.getElementById('toggle');

    if (toggleModeBtn.checked) {
        lightMode();
        localStorage.setItem('theme', 'light');
    } else {
        darkMode();
        localStorage.setItem('theme', 'dark');
    }
}

// Check local storage for the theme preference on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const toggleModeBtn = document.getElementById('toggle');

    if (savedTheme === 'dark') {
        toggleModeBtn.checked = true; // Set checkbox to checked
        darkMode(); // Apply dark mode on load
    } else {
        toggleModeBtn.checked = false; // Set checkbox to unchecked
        lightMode(); // Apply light mode on load
    }

    // Add event listener to toggle button
    toggleModeBtn.addEventListener('change', changeThemeMode);
});
