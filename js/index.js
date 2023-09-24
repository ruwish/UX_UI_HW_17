console.log("Your index.js file is loaded correctly.");

$(document).ready(function() {
    $('.navbar ul li').hover(
      function() {
        $(this).find('a').css('color', '#C8DCB8'); 
        $(this).find('::after').css('width', '100%'); 
      },
      function() {
        $(this).find('a').css('color', '#fff'); 
        $(this).find('::after').css('width', '0');
      }
    );
  });

  $(document).ready(function() {
    $(".title").waypoint(function() {
        $(".title").addClass("animate__animated animate__fadeInDown");
    }, {offset: "60%"});

    $(".work-content").waypoint(function() {
        $(".work-content").addClass("animate__animated animate__fadeInDown");
    }, {offset: "60%"});

    $(".skill-box1").waypoint(function() {
        $(".skill-box1").addClass("animate__animated animate__fadeIn");
    }, {offset: "60%"});

    $(".skill-box2").waypoint(function() {
        $(".skill-box2").addClass("animate__animated animate__fadeIn");
    }, {offset: "60%"});

    $(".CTA").waypoint(function() {
        $(".CTA").addClass("animate__animated animate__bounceIn");
    }, {offset: "70%"});
});

