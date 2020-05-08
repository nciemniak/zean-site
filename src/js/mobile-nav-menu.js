// Close mobile nav menu when clicking outside of it
$("section").click(function() {
  if ($('.collapse.show').length > 0) {
    $('.navbar-toggle').get(0).click()
  }
});

// Close mobile nav menu when clicking on one of the nav items
$("a.mobile-navlink").click(function() {
  if ($('.collapse.show').length > 0) {
    $('.navbar-toggle').get(0).click()
  }
});