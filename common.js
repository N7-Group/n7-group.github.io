$(document).ready(() => {
    $('head').append(`
    <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-6ZF0R39DJ7"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-6ZF0R39DJ7');
</script>`);

    if (!$(".navbar").length && $("nav").length) {
        $("nav").addClass(["fixed-top", "d-flex", "nav-fixed"]);
        $("nav").html(`
<div class="brand">
    <a href="/">
        <div class="d-flex">
        <img src="https://teamspettro.github.io/img/logo.png" style="width:40px; height:40px">
            <div style="color: #ffffff; font-family: Raleway;" class="align-self-center">Team Spettro </div>            
        </div>
    </a>
</div>
<div class="vr" style="width: 10px; z-index:10;"></div>
<div class="separator"></div>
<div class="vr" style="width: 10px; z-index:10;"></div>
<div>
    <a href="/blog">
        <div class="d-flex">
        <div class="topbar-item">Blog</div>      
        </div>
    </a>
    <div class="vr" style="width: 10px; z-index:10;"></div>
</div>
<div class="vr" style="width: 10px; z-index:10;"></div>
<div>
    <a href="/contact">
        <div class="d-flex">
        <div class="topbar-item">Contact</div>      
        </div>
    </a>
    <div class="vr" style="width: 10px; z-index:10;"></div>
</div>
<div class="vr" style="width: 10px; z-index:10;"></div>
<div>
    <a href="/hiring">
        <div class="d-flex">
        <div class="topbar-item">Join us</div>      
        </div>
    </a>
    <div class="vr" style="width: 10px; z-index:10;"></div>
</div>
`);


        $(".search-trigger").on("click", () => {
            console.log("search init")
        })
    }
    if (!$(".footer").length && $("footer").length) {

    }
    
});

// $(window).scroll(() => !$(window).scrollTop() ? $("nav").removeClass("nav-fixed") : $("nav").addClass("nav-fixed"))
//
