$(function()
{
    $('.button-action').click(function()
    {
        $('#video2').animate({opacity: 1}, 500);
        $(this).animate({opacity: 0}, 500);
        $('#video1').addClass('blur');
        document.getElementById("video2").play();
        
    });
});