
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

    // WOW.js
    new WOW().init();

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });

    // Hero Header Carousel
    $("#text-slider").owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: true,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: false,
        onTranslated: function (event) {
            let index = event.item.index % event.item.count;
            let timeout = 10000;

            if (index === 1) timeout = 5000;
            if (index === 2) timeout = 10000;

            $('#text-slider').trigger('stop.owl.autoplay');
            setTimeout(() => {
                $('#text-slider').trigger('play.owl.autoplay', [timeout]);
            }, 50);
        }
    });

    // Blog Carousel
    $(".blog-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: false,
        loop: true,
        margin: 25,
        nav: true,
        navText: [
            '<i class="fa fa-angle-right"></i>',
            '<i class="fa fa-angle-left"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0: { items: 1 },
            576: { items: 1 },
            768: { items: 2 },
            992: { items: 2 },
            1200: { items: 3 }
        }
    });

    // Testimonial Carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav: true,
        navText: [
            '<i class="fa fa-angle-right"></i>',
            '<i class="fa fa-angle-left"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0: { items: 1 },
            576: { items: 1 },
            768: { items: 2 },
            992: { items: 2 },
            1200: { items: 3 }
        }
    });

    // Counter Up
    $('[data-toggle="counter-up"]').counterUp({
        delay: 5,
        time: 2000
    });

    // Back to Top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 100, 'easeInOutExpo');
        return false;
    });

})(jQuery);

// Active nav link highlight on scroll
const sections = document.querySelectorAll("div[id]");
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 200;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

// Smooth scroll via Scrollbar.js
Scrollbar.init(document.querySelector('#scroll-container'), {
    damping: 0.07,
    alwaysShowTracks: true
});

// WhatsApp Form Submission
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  if (!form) {
    console.error("❌ Form element not found");
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // 🔒 Prevent page reload

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const project = document.getElementById("project").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    const whatsappMessage = `✨ *New Project Inquiry via Website* ✨

👤 *Name:* ${name}
📧 *Email:* ${email}
📞 *Phone:* ${phone}
📁 *Project Type:* ${project}
📝 *Subject:* ${subject}
💬 *Message:* 
${message}

📩 Please reach out as soon as possible. Thank you! 🙏`;

    const phoneNumber = "918239374563";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, "_blank");
  });
});