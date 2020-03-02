$('#work-show-all').click(function() {
  makeButtonActive(this);
  $('.work-item').show();
});

$('#work-show-papers').click(function() {
  makeButtonActive(this);
  $('.work-item[data-is-paper]').show();
  $('.work-item:not([data-is-paper])').hide();
});

$('#work-show-projects').click(function() {
  makeButtonActive(this);
  $('.work-item[data-is-project]').show();
  $('.work-item:not([data-is-project])').hide();
});

function makeButtonActive(btn) {
  $('.work-toolbar button').removeClass('btn-active');
  $(btn).addClass('btn-active');
}

