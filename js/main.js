$(window).load(function() {
 $(".preloader").fadeOut("slow", function() {
  $(".preloader-left").addClass("slide-left");
  $(".preloader-right").addClass("slide-right");
  $("#portfolio-case").addClass("full-portfolio");
 });
});





$('.menu-item').on('click', function() {
 $('.nblk').addClass('reverse');
 $('.nbc').addClass('reverse');
 $('.mblks').addClass('hidden');
 $('.imc').removeClass('hidden');
 $('.imc').addClass('showx');
});

$('.about').on('click', function() {
 $('.cblocks').removeClass('showx');
 $('.cblocks').addClass('hidden');
 $('.cblocks.about').removeClass('hidden');
 $('.cblocks.about').addClass('showx');
 $('.menu-item').removeClass('active');
 $('.menu-item.about').addClass('active');
});

$('.portfolio').on('click', function() {
 $('.cblocks').removeClass('showx');
 $('.cblocks').addClass('hidden');
 $('.cblocks.portfolio').removeClass('hidden');
 $('.cblocks.portfolio').addClass('showx');
 $('.menu-item').removeClass('active');
 $('.menu-item.portfolio').addClass('active');
});

$('.blog').on('click', function() {
 $('.cblocks').removeClass('showx');
 $('.cblocks').addClass('hidden');
 $('.cblocks.blog').removeClass('hidden');
 $('.cblocks.blog').addClass('showx');
 $('.menu-item').removeClass('active');
 $('.menu-item.blog').addClass('active');
});

$('.contact').on('click', function() {
 $('.cblocks').removeClass('showx');
 $('.cblocks').addClass('hidden');
 $('.cblocks.contact').removeClass('hidden');
 $('.cblocks.contact').addClass('showx');
 $('.menu-item').removeClass('active');
 $('.menu-item.contact').addClass('active');
});


$('#close').on('click', function() {
 $('.nblk').removeClass('reverse');
 $('.nbc').removeClass('reverse');
 $('.mblks').removeClass('hidden');
 $('.cblocks').removeClass('showx');
 $('.cblocks').addClass('hidden');
 $('.imc').removeClass('showx');
 $('.imc').addClass('hidden');
 $('.menu-item').removeClass('active');
});