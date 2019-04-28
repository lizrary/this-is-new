
function getUserInput() {
  const input = $("input").val();
  return input;
}


function makeItem() {
  return  `
      <li>
        <span class="shopping-item">${getUserInput()}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`
}

function resetInput() {
  $('#js-shopping-list-form')[0].reset(); 
}

function appendItem() {
  $('.shopping-list').append(`${makeItem()}`);
}


function handleSubmit(event) {
    event.preventDefault();
    appendItem();
    resetInput();
}


function deleteClosestLi() {
  $(this).closest('li').remove();
}

function toggleClosestLi() {
  $(this).closest('li').toggleClass('shopping-item__checked');
};


function handleAddItem() {
  $('#js-shopping-list-form').on('submit', handleSubmit);
}

function handleDeleteItem() {
  $('.shopping-list').on('click', '.shopping-item-delete', deleteClosestLi)
}


function handleCheckItem() {
  $('.shopping-list').on('click', '.shopping-item-toggle', toggleClosestLi)
}


function showList() {
  handleDeleteItem();
  handleCheckItem();
  handleAddItem();
}

$(showList);