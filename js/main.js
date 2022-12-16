// $( "#image1" ).mouseover(function() {
//     $( "#icon1" ).addClass('fadeInUp');
// });
// $( "#icon1" ).mouseover(function() {
//     $( "#icon1" ).addClass('fadeInUp');
// });
// $( "#image1" ).mouseleave(function() {
//     $( "#icon1" ).removeClass('fadeInUp');
// });
function enableAnimation(element, className){
  $( element ).addClass(className);
}
function disableAnimation(element, className){
  $( element ).removeClass(className);
}