// Check Authentication for Protected Pages
function checkAuthentication() {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    
    // If not authenticated, redirect to login page
    if (!isAuthenticated || isAuthenticated !== 'true') {
      window.location.href = '/pages/login.html';
    }
  }
  
  // Call this function on every protected page to enforce authentication
  checkAuthentication();