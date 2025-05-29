(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 500);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });


    // Hero Header carousel
    $(".header-carousel").owlCarousel({
        animateOut: 'fadeOut',
        items: 1,
        margin: 0,
        stagePadding: 0,
        autoplay: true,
        smartSpeed: 500,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });


    // attractions carousel
    $(".blog-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: false,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="fa fa-angle-right"></i>',
            '<i class="fa fa-angle-left"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });


    // testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="fa fa-angle-right"></i>',
            '<i class="fa fa-angle-left"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 5,
        time: 2000
    });


   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 600) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 100, 'easeInOutExpo');
        return false;
    });


})(jQuery);

// (function ($) {
//     "use strict";

//     // Valid Pages List
//     const validPages = ["index.html", "about.html", "services.html", "contact.html"];

//     // Get Current Page Name
//     let currentPage = window.location.pathname.split("/").pop();

//     // अगर पेज सही लिस्ट में नहीं है, तो 404 पर भेजें
//     if (!validPages.includes(currentPage) && currentPage !== "404.html") {
//         console.warn("Invalid Page! Redirecting to 404...");
//         setTimeout(() => {
//             window.location.href = "404.html";
//         },); // 2 सेकंड बाद Redirect होगा
//     }

// })(jQuery);


(function(){
    emailjs.init("aoHlc5Kua6Acp-_y5"); // अपनी Public Key डालें
})();

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // पेज को Reload होने से रोकता है
    
    // फॉर्म डेटा कलेक्ट करें
    var formData = {
        from_name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        Phone: document.getElementById("phone").value,
        Project: document.getElementById("project").value,
        Subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
        to_name: "CRE8DIGI" 
         // Static Name (Email Template में दिया गया Name)
    };
    console.log(formData);

    emailjs.send("CRE8DIGI", "template_emjok6r", formData)
        .then(function(response) {
            alert("Message Sent Successfully! ✅");
            document.getElementById("contact-form").reset(); // फॉर्म रीसेट करें
        }, function(error) {
            alert("Failed to send message ❌: " + JSON.stringify(error));
        });
});