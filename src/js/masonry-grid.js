/*-----------------------------------------------+
 | Filename:     masonry-grid.js                 |
 | Desc:         init Masonry cascading grid     |
 |               library, add click event        |
 |               functionality to grid           |
 | Vendor page:  https://masonry.desandro.com/   |
 +-----------------------------------------------*/

// SECTION: Set up event handlers here
window.onload = function() {
  initMasonryGrid();
}

// open modal image when clicking on the grid image
$('.grid-item').click(function() {
  var dataIndex = $(this).attr('data-index');
  $('#modal').show();
  $(`.modal-image[data-index="${dataIndex}"]`).show();
});

// close modal image when user presses 'x'
$('.modal-icon').click(function() {
  closeModalImage();
});

// close modal image when user presses esc key
$(document).keyup(function(e) {
  if (e.keyCode === 27) closeModalImage();   // esc
});

// SECTION: Define functions here
function initMasonryGrid() {
  var grid = document.querySelector('.grid');
  var msnry = new Masonry(grid, {
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true,
  });
  imagesLoaded(grid).on('progress', function () {
    msnry.layout();
  });
}

function closeModalImage() {
  $('#modal').hide();
  $('.modal-image').hide();
}
