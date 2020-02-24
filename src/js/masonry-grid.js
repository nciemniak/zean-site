/*-----------------------------------------------+
 | Filename:     masonry-grid.js                 |
 | Desc:         init Masonry cascading grid     |
 |               library, add click event        |
 |               functionality to grid           |
 | Vendor page:  https://masonry.desandro.com/   |
 +-----------------------------------------------*/

window.onload = function() {
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

$('.grid-item').click(function() {
  var dataIndex = $(this).attr('data-index');
  $('#modal').show();
  $(`.modal-image[data-index="${dataIndex}"]`).show();
});

$('.modal-icon').click(function() {
  $('#modal').hide();
  $('.modal-image').hide();
});
