document.addEventListener('DOMContentLoaded', function () {
    // Check Authentication for Protected Pages
    function checkAuthentication() {
      const isAuthenticated = localStorage.getItem('isAuthenticated');
  
      // If not authenticated, redirect to login page
      if (!isAuthenticated || isAuthenticated !== 'true') {
        window.location.href = '/pages/login.html';
      } else {
        // Select the anchor element by its ID
        const anchorTag = document.getElementById('a-btn');
  
        // Check if the anchor element exists before modifying it
        if (anchorTag) {
          // Change the inner text
          anchorTag.textContent = 'ShowCases';
  
          // Change the href attribute
          anchorTag.setAttribute('href', '/componentsLayout.html');
        }
      }
    }
  
    // Call the function
    checkAuthentication();
  });
  