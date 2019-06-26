$(function() {
  $.backstretch("./img/bg.jpg", {
    // centeredX: false,
    // centeredY: false,
    // duration: "normal"
  });

  // Translucent backround objects
  $(".trans-bg").each(function() {
    $("<div></div>")
      .addClass("bg-helper")
      .appendTo($(this));
  });
});
