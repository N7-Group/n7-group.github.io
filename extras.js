$(document).ready(() => {
    if (!$(".navbar").length && $("nav").length) {
        $("nav").addClass(["fixed-top", "d-flex", "justify-content-between"]);
        $("nav").html(`
<div class="brand">
    <a href="https://teamspettro.github.io">
        <div class="d-flex">
            <img src="https://teamspettro.github.io/img/logo.png">
            <div style="color: #ffffff;" class="align-self-center">Team Spettro </div>
            <div style="color: #ffffff72;" class="align-self-center">- Website still W.I.P</div>
        </div>
    </a>
</div>`);
    $(".search-trigger").on("click", () => {
        console.log("search init")
    })
    }
    if (!$(".footer").length && $("footer").length) {

    }
});

$(window).scroll(() => !$(window).scrollTop() ? $("nav").removeClass("nav-fixed") : $("nav").addClass("nav-fixed"))
