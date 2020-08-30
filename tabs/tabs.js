const tabs = document.querySelector('.tabs');

// for multipol tabs => need to target all tabs with role tab
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]')); // from nodelist to array of tabs

function handleTabClick(event) {
  // 1. hide all tab panels
  tabPanels.forEach(panel => {
    panel.hidden = true;
  });

  // 2. mark all tabs as unselected
  tabButtons.forEach(tab => {
    tab.setAttribute('aria-selected', false); // tab.ariaSelected = false. need to add set attributefor aria selector.
  });

  // 3.  mark the clicked tab as selected
  event.currentTarget.setAttribute('aria-selected', true);

  // 4. find the associated tabPanel and show it!
  const { id } = event.currentTarget; // an id variable that have the same name as property.  
  // const id = event.currentTarget.id

  /*
    METHOD 1
  const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
  console.log(tabPanel);
  tabPanel.hidden = false;
  */

  // METHOD 2 - find in the array of tabPanels
  console.log(tabPanels);
  const tabPanel = tabPanels.find(
    panel => panel.getAttribute('aria-labelledby') === id
  );
  tabPanel.hidden = false;
}


// add event for each button
tabButtons.forEach(button => button.addEventListener('click', handleTabClick));