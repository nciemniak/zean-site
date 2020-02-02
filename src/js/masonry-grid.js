/*-----------------------------------------------+
 | Filename:     masonry-grid.js                 |
 | Desc:         init Masonry cascading grid     |
 |               library                         |
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