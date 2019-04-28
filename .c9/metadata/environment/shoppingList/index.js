{"filter":false,"title":"index.js","tooltip":"/shoppingList/index.js","undoManager":{"mark":11,"position":11,"stack":[[{"start":{"row":0,"column":0},"end":{"row":78,"column":12},"action":"insert","lines":["// HELPER FUNCTIONS ///////////////////////////","","// Helper function to get input","function getUserInput() {","  const input = $(\"input\").val();","  return input;","}","","// Helper function to create my HTML","// Dynamically add user input from helper function getUserInput","function makeItem() {","  return  `","      <li>","        <span class=\"shopping-item\">${getUserInput()}</span>","        <div class=\"shopping-item-controls\">","          <button class=\"shopping-item-toggle\">","            <span class=\"button-label\">check</span>","          </button>","          <button class=\"shopping-item-delete\">","            <span class=\"button-label\">delete</span>","          </button>","        </div>","      </li>`","}","","function resetInput() {","  $('#js-shopping-list-form')[0].reset(); ","}","","// Dynamically add HTML from the helper function makeItem","function appendItem() {","  $('.shopping-list').append(`${makeItem()}`);","}","","// Helper function to prevent default on submit event","// Then call the appendItem and reset functions","function handleSubmit(event) {","    event.preventDefault();","    appendItem();","    resetInput();","}","","// helper function to delete closest li","function deleteClosestLi() {","  $(this).closest('li').remove();","}","","// helper function to toggle the closest (<li></li>) class","function toggleClosestLi() {","  $(this).closest('li').toggleClass('shopping-item__checked');","};","","// Event Handlers //////////////////////////////////","","// Handle the submit event and append the output from makeItem","function handleAddItem() {","  $('#js-shopping-list-form').on('submit', handleSubmit);","}","","// Handle the click event on delete button","function handleDeleteItem() {","  // Event delegation on parent ul","  // delete button on click removes closest (<li>...</li>) including itself","  $('.shopping-list').on('click', '.shopping-item-delete', deleteClosestLi)","}","","// Handle the click event on the checked button","function handleCheckItem() {","  $('.shopping-list').on('click', '.shopping-item-toggle', toggleClosestLi)","}","","// function to display the final list with all its functionality after window loads","function showList() {","  handleDeleteItem();","  handleCheckItem();","  handleAddItem();","}","","$(showList);"],"id":1}],[{"start":{"row":61,"column":0},"end":{"row":62,"column":75},"action":"remove","lines":["  // Event delegation on parent ul","  // delete button on click removes closest (<li>...</li>) including itself"],"id":2},{"start":{"row":60,"column":29},"end":{"row":61,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":59,"column":0},"end":{"row":59,"column":42},"action":"remove","lines":["// Handle the click event on delete button"],"id":3},{"start":{"row":58,"column":0},"end":{"row":59,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":63,"column":0},"end":{"row":63,"column":47},"action":"remove","lines":["// Handle the click event on the checked button"],"id":4}],[{"start":{"row":68,"column":0},"end":{"row":68,"column":83},"action":"remove","lines":["// function to display the final list with all its functionality after window loads"],"id":5}],[{"start":{"row":52,"column":0},"end":{"row":54,"column":62},"action":"remove","lines":["// Event Handlers //////////////////////////////////","","// Handle the submit event and append the output from makeItem"],"id":6}],[{"start":{"row":46,"column":0},"end":{"row":47,"column":58},"action":"remove","lines":["","// helper function to toggle the closest (<li></li>) class"],"id":7}],[{"start":{"row":42,"column":0},"end":{"row":42,"column":39},"action":"remove","lines":["// helper function to delete closest li"],"id":8}],[{"start":{"row":34,"column":0},"end":{"row":35,"column":47},"action":"remove","lines":["// Helper function to prevent default on submit event","// Then call the appendItem and reset functions"],"id":9}],[{"start":{"row":28,"column":0},"end":{"row":29,"column":57},"action":"remove","lines":["","// Dynamically add HTML from the helper function makeItem"],"id":10}],[{"start":{"row":8,"column":0},"end":{"row":9,"column":63},"action":"remove","lines":["// Helper function to create my HTML","// Dynamically add user input from helper function getUserInput"],"id":11}],[{"start":{"row":0,"column":0},"end":{"row":2,"column":31},"action":"remove","lines":["// HELPER FUNCTIONS ///////////////////////////","","// Helper function to get input"],"id":12}]]},"ace":{"folds":[],"scrolltop":812,"scrollleft":0,"selection":{"start":{"row":64,"column":14},"end":{"row":64,"column":14},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":53,"state":"no_regex","mode":"ace/mode/javascript"}},"timestamp":1556468040550,"hash":"44ade092749bd236753cbd715c42ea3902eb65a6"}