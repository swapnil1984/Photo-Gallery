$(document).ready(function() {
    $(".taskProgress") && $(".taskProgress").each(function() {
        var e = parseInt($(this).html());
        $(this).progressbar({
            value: e
        });
        $(this).parent().find(".percent").html(e + "%")
    })
});