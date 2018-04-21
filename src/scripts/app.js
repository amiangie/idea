/*
  Project: Idea
  Author: angie
 */

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






//$('input[type="checkbox"]').on('change', function(e) {
//
//  
//  
//  var checked = $(this).prop("checked"),
//      container = $(this).parent(),
//      siblings = container.siblings();
//
//  container.find('input[type="checkbox"]').prop({
//    indeterminate: false,
//    checked: checked
//  });
//
//  function checkSiblings(el) {
//
//    var parent = el.parent().parent(),
//        all = true;
//
//    el.siblings().each(function() {
//      return all = ($(this).children('input[type="checkbox"]').prop("checked") === checked);
//    });
//
//    if (all && checked) {
//
//      parent.children('input[type="checkbox"]').prop({
//        indeterminate: false,
//        checked: checked
//      });
//
//      checkSiblings(parent);
//
//    } else if (all && !checked) {
//
//      parent.children('input[type="checkbox"]').prop("checked", checked);
//      parent.children('input[type="checkbox"]').prop("indeterminate", (parent.find('input[type="checkbox"]:checked').length > 0));
//      
//      
//      checkSiblings(parent);
//
//    } else {
//
//      el.parents("li").children('input[type="checkbox"]').prop({
//        indeterminate: true,
//        checked: false
//      });
//
//    }
//
//  }
//
//  checkSiblings(container);
//});