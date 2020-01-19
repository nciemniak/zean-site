// Close mobile nav menu when clicking outside of it
$("section").click(function() {
  if ($('.collapse.show').length > 0) {
    $('.navbar-toggle').get(0).click()
  }
});

// Navigate to home page and scroll to section when clicking on a mobile navlink
$(".mobile-navlink").click(function(e) {
  if (window.location.href.includes("work/")) {
    console.log($(e.target).attr("scroll-index"));
    scrollIndex = $(e.target).attr("scroll-index");
    window.location.href = `/?scrollindex=${scrollIndex}`;
  }
});