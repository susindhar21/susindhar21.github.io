$(function () {
    $("#type").text('wants to make a difference.');
    var roles = ["believes tech must be regulated.","owes his sanity to Indian food.","is prepared to enter the metaverse.","thinks chai is overrated. There, I said it.","believes technology can save the planet.","acts like he doesn't follow pop culture, but he does.","wants to make a difference."];
    var count = 0;
    setInterval(() => {
        $("#type").fadeOut("slow", function () {
            $(this).text(roles[count++ % roles.length]);
            $(this).fadeIn("slow");
        });
    }, 5500);    
});