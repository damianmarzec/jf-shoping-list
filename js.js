function addNewItem(itemName, id) {

    // Create var with string (all element html)
    let elementHtml =
        '<div class="list-element" id="item-' + id + '"> ' +
        '<div class="text" id="text-' + id + '">' +
        itemName +
        '</div>' +
        '<div class="icons">' +
        '<div class="done">' +
        '<input class="done-checkbox" id="checkbox-' + id + '" type="checkbox" >' +
        '</div>' +
        '<div class="delete">X</div>' +
        '</div>' +
        '</div>';

    // Append created string to end of .list div html
    // @todo make it ID not class
    $('.list').append(elementHtml);

    // add delete event listener
    // We need to do it every time we add new div .delete
    refreshAllActionsInElementList();
}

function lineThrough(clickedElement, mainId) {
    if ($(clickedElement).is(":checked")) {
        $('#text-' + mainId).addClass('lineThrough');
    } else {
        $('#text-' + mainId).removeClass('lineThrough');
    }
}

function refreshAllActionsInElementList() {
    $('.delete').click(function () {
        $(this).parent().parent().remove();
    });

    $(".done-checkbox").click(function () {

        let clickedElementId = $(this).attr('id'); // checkbox-N

        let splitClickedElementId = clickedElementId.split('-'); // ['checkbox', 'N']

        let mainId = splitClickedElementId[1]; // N

        lineThrough(this, mainId);

        if ($(this).is(":checked")) {
            moveToTheEnd(mainId);
        } else {
            moveToTheTop(mainId);
        }
    });
}
function moveToTheTop(mainId) {
    let lastElement = $(".list").children().first();
    $("#item-" + mainId).insertBefore(lastElement);
}

function moveToTheEnd(mainId) {
    let lastElement = $(".list").children().last();
    $("#item-" + mainId).insertAfter(lastElement);
}

function generateId() {
    return $(".list").children().length + 1;
}


// document is ready
$(function () {
    $('#add-button').click(function () {
        addNewItem(
            $('#new-item').val(),
            generateId()
        );
    });

    for (var i = 1; i <= 10; i++) {
        addNewItem(
            Math.ceil(Math.random() * 10000),
            generateId()
        );
    }

});
