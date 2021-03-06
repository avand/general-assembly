$("#new-item-form").on("submit", function(event) {
  event.preventDefault();

  $("#new-item-input").val().split(",").forEach(addListItem);
});

function addListItem(listItemText) {
  var listItem = $("<li>").appendTo("#todo-list");
  var label = $("<label>").appendTo(listItem);
  $("<input>").attr("type", "checkbox").appendTo(label);
  $("<span>").text(listItemText.trim()).appendTo(label);
}



// var form = document.querySelector("#new-item-form");
// var input = document.querySelector("#new-item-input");
// var list = document.querySelector("#todo-list");
//
// function createItem(todo) {
//   var listItem = document.createElement("li");
//   var checkbox = document.createElement("input");
//   var label = document.createElement("label");
//   var span = document.createElement("span");
//
//   checkbox.setAttribute("type", "checkbox");
//   span.textContent = todo;
//
//   label.appendChild(checkbox);
//   label.appendChild(span);
//   listItem.appendChild(label);
//   list.appendChild(listItem);
// }
//
// function formSubmitted(event) {
//   event.preventDefault();
//
//   input.value.split(",").forEach(createItem);
//
//   form.reset();
// }
//
// form.addEventListener("submit", formSubmitted);
