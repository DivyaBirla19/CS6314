
$(document).ready(function(){
  $('#add-new-item').hide();
  $('li').find("span").hide();
});

//When user clicks on the + icon, it will toggle between showing and hiding the textbox which is used to insert a new item to the list.

$('#add-btn').on('click',function(){
  $('#add-new-item').toggle();
});




//when user presses the enter key, it will add the item to the list.

$('#add-new-item').keypress(function(event){
  if(event.which===13){
    var todoText=$(this).val();
    if (todoText === '') {
      alert("You must write your task !");
    } else {
      $('ul').append('<li>'+todoText+'<span class="delete-btn"><i class="fa fa-trash"></i></span>');
      $('li').find("span").hide();
      
    }



  }

});

//When user hovers over any todo item, it will show delete button
$(document).on('mouseenter',"li",function(){
  $(this).find("span.delete-btn").show();
});

$(document).on('mouseleave',"li",function(){
  $(this).find("span.delete-btn").hide();
});
//when clicked on the delete button, will delete the item from the list.

$('ul').on('click',"span",function(event){
  $(this).parent().fadeOut(500,function(){
    $(this).remove();
  });
  event.stopPropagation();
});


//When user clicks on the todo item, it will strike through the item and show it as completed.
$('ul').on('click',"li",function(){
  $(this).toggleClass('completed');
});
