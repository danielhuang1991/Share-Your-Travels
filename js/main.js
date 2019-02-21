$(document).ready(function() {
  ajaxLoading();
});

function ajaxLoading() {
  $.getJSON("js/data.json", function(data) {
    //call the ajax to get json data

    $.each(data, function(index, value) {
      //loop the gallery class to add image afterwards with path and title value
      var imgTitle = value.title;
      var transImgTitle = imgTitle.replace(/\s/g, "&nbsp;");
      var imgCountry = value.country;
      var transImgCountry = imgCountry.replace(/\s/g, "&nbsp;");
      var imgTaken = value.taken;
      var transImgTaken = imgTaken.replace(/\s/g, "&nbsp;");
      var imgCity = value.city;
      var transImgCity = imgCity.replace(/\s/g, "&nbsp;");

      $(".gallery").append(
        "<img src=images/square/" +
          value.path +
          " " +
          "alt=" +
          transImgTitle +
          " " +
          "cityinfo=" +
          transImgCity +
          " " +
          "countryinfo=" +
          transImgCountry +
          "[" +
          transImgTaken +
          "]" +
          ">"
      );
      //setting up the mouseenter function/event
    });

    $("img").mouseenter(function() {
      $(this).addClass("gray");
      var totalPath = $(this).attr("src");
      var totalInfo = $(this).attr("alt");
      var totalCity = $(this).attr("cityinfo");
      var totalCountry = $(this).attr("countryinfo");
      var thisImgPath = totalPath.substring(14, 30);

      $(".gallery").append(
        "<div id='preview'>" +
          "<img src=images/medium/" +
          thisImgPath +
          "/>" +
          "<p>" +
          totalInfo +
          "<br/>" +
          totalCity +
          "," +
          " " +
          totalCountry +
          "</p>" +
          "</div>"
      );
      $(document).on("mousemove", function(event) {
        $("#preview").css({
          position: "absolute",

          left: event.pageX,
          top: event.pageY
        });
        $("#preview").css("z-index", 200);
      });
      $("#preview")
        .fadeIn("slow")
        .delay(500)
        .fadeOut("slow");
    });
    //setting up the mouseleavve function/event
    $("img").mouseleave(function() {
      $(this).removeClass("gray");
      $("#preview").remove();
    });
  });
}
