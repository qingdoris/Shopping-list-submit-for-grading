
// add items 
function handleFormSubmit() {
  $('#js-shopping-list-form').on('submit', function(e) {
    e.preventDefault();
    const input = $(e.currentTarget).find('#shopping-list-entry').val()
          $("ul").append(
          `<li>
          <span class="shopping-item">${input}</span>
          <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
              <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
              <span class="button-label">delete</span>
            </button>
          </div>
        </li>`
        );
    $("#shopping-list-entry").val("");
  })
}

// check items 
function handleCheck() {
    
      $('ul').on('click','.shopping-item-toggle',event => {
            const clickedButton = $(event.target);
            const targetItem = clickedButton.parent().parent().parent().children('span');
            targetItem.toggleClass('shopping-item__checked');
      
      });

}  

// delete items
function handleDelete() { 
  
  $('ul').on('click','.shopping-item-delete',event => {
    const clickedButton = $(event.target);
    const targetItem = clickedButton.closest('li');
    targetItem.remove();

  });
}

  $(handleFormSubmit);
  $(handleCheck);
  $(handleDelete);