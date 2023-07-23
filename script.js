//Animations
$(document).ready(() => {
    $(".header h1").css("opacity", "1");
    $(".container").css("opacity", "0");
    $(".container-styled").css("opacity", "0");
    $(".header h1").css("color", "#ffffff");
    setTimeout(() => $("h3").css("opacity", "1"), 500);
    setTimeout(() => $(".image-view").css("opacity", "1"), 200);
    setTimeout(() => $(".monospace").css({
        "opacity": "1"
    }), 250);
    setTimeout(() => $(".container").css({
        "opacity": "1"
    }), 250);
    setTimeout(() => $(".container-styled").css({
        "opacity": "1"
    }), 250);
    setTimeout(() => $(".text-ms").css({
        "opacity": "1"
    }), 250);

})
