jQuery(document).ready(function () {
  jQuery(".submit input").attr("value", "");
  var interval;
  jQuery(".submit input").click(function () {
    clearInterval(interval);
    setTimeout(() => {
      if (jQuery(".form-group").hasClass("has-error")) {
        jQuery(".form-group.submit").addClass("has-err");
        jQuery(".col-xs-12").addClass("checked");

        interval = setInterval(check, 300);
      } else {
        clearInterval(interval);
        jQuery(".form-group.submit").removeClass("has-err");
        jQuery(".col-xs-12").removeClass("checked");
        if (jQuery(".active").length) {
          jQuery(".active").addClass("sended");
        }
      }
    }, 0);
  });

  function check() {
    if (!jQuery(".has-error").length) {
      jQuery(".form-group.submit").removeClass("has-err");
    } else {
      jQuery(".form-group.submit").addClass("has-err");
    }
  }
});
