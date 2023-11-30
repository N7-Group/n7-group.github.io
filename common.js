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

    if (!$(".navbar").length && $("nav").length) 
    {
        $("nav").addClass(["fixed-top", "d-flex", "nav-fixed"]);
        // Load up header and all common elements
        $("nav").load(`common_elements.html`);


        $(".search-trigger").on("click", () => {
            console.log("search init")
        })
    }
    if (!$(".footer").length && $("footer").length) {

    }
    
});

// $(window).scroll(() => !$(window).scrollTop() ? $("nav").removeClass("nav-fixed") : $("nav").addClass("nav-fixed"))
//
