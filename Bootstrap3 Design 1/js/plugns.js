$(document).ready(function(){
    $("html").niceScroll();

$('.carousel').carousel({
    interval:10000
});

$('.gearchecked').click(function(){
    $('.color-option').toggle();
});

var colorLS =$(".color-option ul li");
colorLS
.eq(0).css("background-Color","#f42222").end()
.eq(1).css("background-Color","pink").end()
.eq(2).css("background-Color","purple").end()
.eq(3).css("background-Color","green").end()
.eq(4).css("background-Color","blue");

colorLS.click(function(){
   $("link[href*='theme']").attr("href",$(this).attr("data-value"));
});

var buttonscroll = $("#scroll-top");

$(window).scroll(function()
{
  $(this).scrollTop()>=480 ?buttonscroll.show() :buttonscroll.hide() ;
 
});

buttonscroll.click(function()
 {
     $("html , body").animate({scrollTop:0},2000);
 });
});

$(window).load(function()
{
$(".loading-overlay .sk-circle").fadeOut(2000,
    function(){
        $("body").css("overflow","auto");
        $(this).parent().fadeOut(2000);
    });
    

});