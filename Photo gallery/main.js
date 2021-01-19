$(document).ready(function() {
  var dataItemsTitle=[];
  var dataItemsDate=[];
  var dataItemsCity=[];
  $.getJSON("js/data.json", function(data) {

    $("ul.gallery li:first").remove();

    $.each(data, function(index, value) {

      dataItemsCity.push(value.city);
      dataItemsTitle.push(value.title);
      dataItemsDate.push(value.taken);
      $("ul.gallery").append("<li id='" + index + "'><img src =./images/square/" + value.path + " alt='" + value.title + "' id='" + index + "'/></li>");

    });

  });
  //Add gray class
  $("ul.gallery").on("mouseenter", "li", function () {
    var div = $("<div>", {
      id: "preview"
    });


    $(this).find("img").addClass("gray");
    $("ul.gallery").append(div);
    var  new_path = $(this).find('img').attr("src").replace("square", "medium");;
    $(div).append("<img src=" + new_path+">");
    var img_id = $(this).attr("id");

    $("#preview").fadeIn(1000).css({"left":""+(event.pageX+20)+"px","top": ""+(event.pageY+20)+"px"});
    $(div).append("<p>"+dataItemsTitle[img_id]+"<br />"+dataItemsCity[img_id]+"["+dataItemsDate[img_id]+"]</p>");

  });
  $("ul.gallery").on("mousemove", "li", function () {
      $("#preview").css({"left":""+(event.pageX+20)+"px","top": ""+(event.pageY+20)+"px"});


  });
  $("ul.gallery").on("mouseleave", "li", function () {
    $(this).removeClass("gray");
    $("ul.gallery").find("div").fadeIn("3000",function() { $(this).remove(); });
    $(this).find("#preview").remove();


  });


  });
