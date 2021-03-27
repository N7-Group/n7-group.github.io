$(document).ready(() => {
    $(".header h1").css("opacity", "1");
    setTimeout(() => $("h3").css("opacity", "1"), 500);
    setTimeout(() => $(".monoteam").css({
        "transform": "translateX(0%)", 
        "opacity": "1"
    }), 1000);
    setTimeout(() => $(".monobot").css({
        "transform": "translateX(0%)",
        "opacity": "1"
    }), 1000);
})