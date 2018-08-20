//backend


function toDo(itemList) {
  this.itemList = itemList;
}

toDo.prototype.removeitemList = function () {
  $("#toDoOutput li").unbind('click').click(function(){
    $(this).remove();
    $("#completed").append("<li>" + $(this).text() + "</li>");
  })

}


//frontend
$(document).ready(function(){
  $("form#toDoSubmit").submit(function(event){
  event.preventDefault();
    var listInput = $("#toDoList").val();
    var newList = new toDo(listInput);
    // var
    $("#toDoList").val();
    $(".completed").show();
    $("#toDoOutput").append(("<li>" + listInput + "</li>"));
    newList.removeitemList();

    });
  });
// });
