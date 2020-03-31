$(document).ready(function(){
   $('li.fields').addClass('hide');
   $('ul').on('click','li.title',function(){
    $(this).next().slideDown(200).siblings('li.fields').slideUp(200);
   });
});
