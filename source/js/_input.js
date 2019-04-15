$(document).ready(function() {
  $('.js-toggle-icon').on('click', function(){
    $(this).toggleClass('show');
  });
  // set indeterminate for checkbox
  $('.js-checkbox-indeterminate').prop('indeterminate', true);
  // edit input number control
  $('.js-custom-number-plus').on('click', function(){
    var input = $(this).parent().parent().find('input');
    var maxInput = input.attr('max');
    var maxValue = parseInt(maxInput);
    var oldInput = $(this).parent().parent().find('input').val();
    var oldValue = parseInt(oldInput);
    if(oldValue < maxValue){
      input.val(oldValue + 1);
    }
  });
  $('.js-custom-number-minus').on('click', function(){
    var input = $(this).parent().parent().find('input');
    var minInput = input.attr('min');
    var minValue = parseInt(minInput);
    var oldInput = $(this).parent().parent().find('input').val();
    var oldValue = parseInt(oldInput)
    if(oldValue > minValue){
      input.val(oldValue - 1);
    }
  });

  // input file : update input show value
  $('.js-custom-file-input').on('change', function (e) {
    var files = this.files;
    var fileLabel = $(this).next('.js-custom-file-label');
    var labelText = fileLabel.text();

    // print count file if upload more than one
    fileLabel.text(files.length + ' files selected');
    
    // print name file if upload one file
    if (files.length <= 2) {
      var fileNames = [];
      for (var i = 0; i < files.length; i++) {
        fileNames.push(files[i].name);
      }
      fileLabel.text(fileNames.join(', '));
    }

    // no file select
    if (!files.length) {
      fileLabel.text('Choose file');
    }
  });
  // input password : toggle password
  $('.js-toggle-password-button').on('click', function(e){
    e.preventDefault();
    $(this).children('i').toggleClass('fa-eye fa-eye-slash');
    $(this).children('.toggle-password-text').text(function(i, text){
      return text ==='Show' ? 'Hide' : 'Show';
    });
    var input = $(this).parent().parent().find('.js-custom-password-input');
    if(input.attr('type')=='password'){
      input.attr('type', 'text');
    }
    else {
      input.attr('type', 'password');
    }
  });
  // clearable input 
  var toggleClearableButton = function(input){
    var inputValue = $(input).val();
    if(!inputValue){
      $(input).next('.js-clearable-button').removeClass('show');
    }
    else {
      $(input).next('.js-clearable-button').addClass('show');
    }
  }
  $('.js-clearable-button').on('click', function(){
    $(this).parent().find('input[type="text"]').val('');
    $(this).removeClass('show');
  });
  toggleClearableButton('.js-clearable-input');
  $('.js-clearable-input').on('keyup', function(){
    toggleClearableButton($(this));
  });
  // input floating label
  $('.js-custom-input-floating-label').on('focus blur keyup change', function(){
    var oldDataValue = $(this).val();
    if(!oldDataValue){
      $(this).addClass('show-placeholder');
    }
    else {
      $(this).removeClass('show-placeholder');
    }
  });
});
