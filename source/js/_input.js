$(document).ready(function() {
  $('.js-toggle-icon').on('click', function(){
    $(this).toggleClass('show');
  });
  // set indeterminate for checkbox
  $('.js-checkbox-indeterminate').prop('indeterminate', true);
});
