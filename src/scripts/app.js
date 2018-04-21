/*
  Project: Idea
  Author: angie
 */

// -------------------------
// Accordion 
// -------------------------

const accordionButtons = document.querySelectorAll('.js-accordion-trigger');

[...accordionButtons].forEach(accordionButton => {
  accordionButton.addEventListener('click', function(event) {
    const buttonPanel = document.getElementById(accordionButton.getAttribute('aria-controls'));
    const newAriaExpanded = !(this.getAttribute('aria-expanded') == 'true');
    
    collapseOtherPanels(this);

    this.setAttribute('aria-expanded', newAriaExpanded);
    buttonPanel.setAttribute('aria-hidden', !newAriaExpanded);
    this.setAttribute('aria-selected', newAriaExpanded);
    this.classList.toggle('-expanded');
  });
});


function collapseOtherPanels(ele) {
  const otherAccordionButtons = [...accordionButtons].filter(btn => btn !== ele);
  
  otherAccordionButtons.forEach(accordionButton => {
    const buttonPanel = document.getElementById(accordionButton.getAttribute('aria-controls'));
    
    accordionButton.setAttribute('aria-expanded', false);
    accordionButton.setAttribute('aria-selected', false);
    buttonPanel.setAttribute('aria-hidden', true);
    accordionButton.classList.remove('-expanded');
  });
}



// -------------------------
// Indeterminate checkboxes
// -------------------------

const checkboxGroups = document.querySelectorAll('.js-checkbox-group');
const button = document.getElementById('download');

[...checkboxGroups].forEach(checkboxGroup => {
  const checkboxes = checkboxGroup.querySelectorAll('input[type="checkbox"]:not([aria-controls])'); 
  const checkallBox = checkboxGroup.querySelectorAll('input[type="checkbox"][aria-controls]')[0];
  const checkboxesCount = checkboxes.length;
  
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', function(event) {
      let checkedCount = checkboxGroup.querySelectorAll('input[type="checkbox"]:not([aria-controls]):checked').length;
      
      checkallBox.checked = checkedCount > 0;
      checkallBox.indeterminate = checkedCount > 0 && checkedCount < checkboxes.length;
      
      checkButton();
    });
  });
  
  checkallBox.addEventListener('click', function(event) {
    checkboxes.forEach(checkbox => {
      checkbox.checked = this.checked;
    });
    
    checkButton();
  });
});

function checkButton() {
  let checkedCount = document.querySelectorAll('input[type="checkbox"]:checked').length; 
  checkedCount > 0 ? button.removeAttribute('disabled') : button.setAttribute('disabled', true);
}
