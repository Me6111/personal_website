// C:\Users\user\Desktop\projects\m_portfolio\button.js


const titleElements = document.querySelectorAll('.sub-page-container-title');

// Set all visible to false initially
titleElements.forEach(titleElement => {
  titleElement.visible = false; // Add property directly to element
});

titleElements.forEach(titleElement => {
  titleElement.addEventListener('click', () => {
    const contentElement = titleElement.nextElementSibling;
    if (contentElement && contentElement.classList.contains('sub-page-container-content')) {

      // Check if clicked element is already visible
      if (titleElement.visible) {
        // Set clicked element's visible to false
        titleElement.visible = false;
      } else {
        // Set all other elements' visible to false
        titleElements.forEach(element => element.visible = false);
        // Set clicked element's visible to true
        titleElement.visible = true;
      }

      // Update styles for all elements (regardless of visible state)
      changeContentStyle(titleElements);
    }
  });
});

// Function to change content style based on visibility
function changeContentStyle(elements) {
  elements.forEach(element => {
    const contentElement = element.nextElementSibling;
    if (contentElement) {
      if (element.visible) {
        contentElement.style.height = 'auto';
        contentElement.style.padding = '20px';
      } else {
        contentElement.style.height = '0';
        contentElement.style.padding = '0';
      }
    }
  });
}








