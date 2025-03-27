$(document).ready(function () {
    $(".profile-img").css({
        "display": "block",
        "margin": "0 auto",
        "max-width": "100%",
        "height": "auto",
        "border-radius": "20px"
    });
});

$(document).ready(function () {
    $("a").on("click", function (event) {
      if (this.hash !== "") {
        event.preventDefault();
        let hash = this.hash;
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top,
          },
          800
        );
      }
    });
  });

  $(document).ready(function () {
    $(window).scroll(function () {
      $(".fade-in").each(function () {
        let position = $(this).offset().top;
        let topOfWindow = $(window).scrollTop() + $(window).height();
        if (position < topOfWindow) {
          $(this).addClass("visible");
        }
      });
    });
  });

  $(document).ready(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 200) {
        $("#btnTopo").fadeIn();
      } else {
        $("#btnTopo").fadeOut();
      }
    });
  
    $("#btnTopo").click(function () {
      $("html, body").animate({ scrollTop: 0 }, 800);
    });
  });