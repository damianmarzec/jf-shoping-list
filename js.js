
function addNewItem(itemName) {
  
  // Create var with string (all element html)
  let elementHtml = 
    '<div class="list-element"> ' +
      '<div class="text">' +
        itemName +
      '</div>' +
      '<div class="icons">' +
        '<div class="done">' +
          '<input type="checkbox" >'+
        '</div>' +
        '<div class="delete">X</div>' +
      '</div>' +
    '</div>';

  // Append created string to end of .list div html
  // @todo make it ID not class
  $('.list').append(elementHtml);

  // add delete event listener
  // We need to do it every time we add new div .delete
  $('.delete').click(function () {
    $(this).parent().parent().remove();
  });
}

// document is ready
$(function () {
  $('#add-button').click(function () {
    addNewItem($('#new-item').val());
  });
});
