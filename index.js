// Detect device type
function isMobile() {
    return window.innerWidth <= 767;
  }
  
  // Load the appropriate HTML file
  function loadHTML() {
    const htmlFile = isMobile() ? 'mobile/index.html' : 'desktop/index.html';
  
    fetch(htmlFile)
      .then(response => response.text())
      .then(html => {
        document.getElementById('content').innerHTML = html;
      })
      .catch(error => {
        console.error('Error loading HTML:', error);
      });
  }
  
  // Load HTML on page load
  window.addEventListener('load', loadHTML);
  