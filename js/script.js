

// Code Loading Page
$(window).load(function()
{
    $(".sk-spinner").fadeOut(3000,
    function()
    {
        //Show The Scroll
        $("body").css("overflow-y","auto");

        $(this).parent().fadeOut(3000,
        function()
        {
            // Remove All <div Class="loading"></div>
            $(this).remove();
        });
    });
    
});


