// Detect device type
function isMobile() {
    return window.innerWidth <= 767;
  }
  
  // Load the appropriate HTML file
  function loadHTML() {
    const htmlFile = isMobile() ? 'mobile/index.html' : 'desktop/index.html';
  
    document.getElementById('content').src = htmlFile;
  }
  
  // Load HTML on page load
  window.addEventListener('load', loadHTML);
  