//I'm guessing these are animations
$(document).ready(() => {
    $(".header h1").css("opacity", "1");
    $(".header h1").css("color", "#ffffff");
    setTimeout(() => $("h3").css("opacity", "1"), 500);
    setTimeout(() => $(".image-view").css("opacity", "1"), 500);
    setTimeout(() => $(".monospace").css({
        "transform": "translateX(0%)", 
        "opacity": "1"
    }), 250);
    setTimeout(() => $(".text-ms").css({
        "transform": "translateX(-0%)",
        "opacity": "1"
    }), 1000);
})
