/* global src */

$(document).ready(function () {
    
    
new WOW().init();



$('select').select2({
    theme: 'bootstrap'
});
$('alert').alert();
    
    $(function(){
  $('#new-cars').on('hide.bs.collapse', function () {
    $('#collpsBtn1').html('<i class="far fa-plus-square"></i>');
  })
  $('#new-cars').on('show.bs.collapse', function () {
    $('#collpsBtn1').html('<i class="far fa-minus-square"></i>');
  })
    })

        $(function(){
  $('#old-cars').on('hide.bs.collapse', function () {
    $('#collpsBtn2').html('<i class="far fa-plus-square"></i>');
  })
  $('#old-cars').on('show.bs.collapse', function () {
    $('#collpsBtn2').html('<i class="far fa-minus-square"></i>');
  })
})
            $(function(){
  $('#other-cars').on('hide.bs.collapse', function () {
    $('#collpsBtn3').html('<i class="far fa-plus-square"></i>');
  })
  $('#other-cars').on('show.bs.collapse', function () {
    $('#collpsBtn3').html('<i class="far fa-minus-square"></i>');
  })
})
    
});