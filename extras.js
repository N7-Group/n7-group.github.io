$(document).ready(() => {
    $("nav").html(`
    <!-- META STUFF (discord/twitter embeds, etc) -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta property="og:title" content="Team Spettro">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Team Spettro">
    <meta property="og:locale" content="en_US">
    <meta property="og:url" content="https://teamspettro.github.io">
    <meta property="og:image" content="https://teamspettro.github.io/img/MonoBot%20Transparent.png">
    <meta property="article:section" content="Home">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Team Spettro">
    <meta name="twitter:description" content="Creators of Project Polychrome">
    <meta name="twitter:domain" content="teamspettro.github.io">
    <meta name="theme-color" content="#f2f2f2">`);

    if (!$(".navbar").length && $("nav").length) {
        $("nav").addClass(["fixed-top", "d-flex", "justify-content-between"]);
        $("nav").html(`
<div class="brand">
    <a href="https://teamspettro.github.io">
        <div class="d-flex">
            <img src="https://teamspettro.github.io/img/logo.png">
            <div style="color: #ffffff;" class="align-self-center">Team Spettro </div>
            <div style="color: #ffffff72; padding: 0px 5px 0px" class="align-self-center"> Website still W.I.P</div>
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
