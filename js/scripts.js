//backend





//frontend
$(document).ready(function(){
  $("form#toDoSubmit").submit(function(event){
  event.preventDefault();
  var listInput = $("#toDoList").val();
  $("#toDoOutput").append(("<li>" + listInput + "</li>"));
  });
});
