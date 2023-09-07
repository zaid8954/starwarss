$('#slider-1.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    smartSpeed: 1000,
    autoplayTimeout:1000,
    dots:false,
    navText:["<span class='bi bi-arrow-left'<span>" ,"<span class='bi bi-arrow-right' <span>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});

$('#slider-2.owl-carousel').owlCarousel({
    loop:true,
    smartSpeed: 1000,
    autoplayTimeout:1000,
    margin:20,
    nav:true,
    dots:false,
    navText:["<span class='bi bi-arrow-left'<span>" ,"<span class='bi bi-arrow-right' <span>"],
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:6
        },
    }
})

$('#slider-3.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    autoplayTimeout:1000,
    smartSpeed: 1000,
    
    nav:true,
    dots:false,
    navText:["<span class='bi bi-arrow-left'<span>" ,"<span class='bi bi-arrow-right' <span>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        },
    }
})