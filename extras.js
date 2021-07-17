$(document).ready(() => {
    if (!$(".navbar").length && $("nav").length) {
        $("nav").addClass(["fixed-top", "d-flex", "justify-content-between"]);
        $("nav").html(`
<div class="brand">
    <a href="https://monoteam-nx.github.io">
        <div class="d-flex">
            <img src="https://monoteam-nx.github.io/img/MonoBot Transparent.png">
            <div class="align-self-center">Monoteam</div>
        </div>
    </a>
</div>
<div class="search d-flex">
    <div class="align-self-center">
        <i class="search-trigger fas fa-search"></i>
    </div>
</div>`);
    $(".search-trigger").on("click", () => {
        console.log("search init")
    })
    }
    if (!$(".footer").length && $("footer").length) {

    }
});

$(window).scroll(() => !$(window).scrollTop() ? $("nav").removeClass("nav-fixed") : $("nav").addClass("nav-fixed"))
