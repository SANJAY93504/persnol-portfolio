/* =========================================================
   SANJAY MAURYA - PORTFOLIO
   JavaScript
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       MOBILE MENU
       ===================================================== */

    const menuBtn = document.querySelector(".menu-btn");
    const nav = document.querySelector(".navbar nav");

    if (menuBtn && nav) {

        menuBtn.addEventListener("click", () => {

            nav.classList.toggle("show");

            const icon = menuBtn.querySelector("i");

            if (nav.classList.contains("show")) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");
            } else {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }

        });

    }


    /* =====================================================
       CLOSE MOBILE MENU AFTER CLICKING LINK
       ===================================================== */

    const navLinks = document.querySelectorAll(".navbar nav a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            if (nav) {
                nav.classList.remove("show");
            }

            const icon = menuBtn?.querySelector("i");

            if (icon) {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }

        });

    });


    /* =====================================================
       ACTIVE NAVBAR LINK
       ===================================================== */

    const sections = document.querySelectorAll("section[id]");

    function updateActiveLink() {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 130;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            const href = link.getAttribute("href");

            if (href === "#" + currentSection) {
                link.classList.add("active");
            }

        });

    }

    window.addEventListener("scroll", updateActiveLink);

    updateActiveLink();


    /* =====================================================
       BACK TO TOP BUTTON
       ===================================================== */

    const backTop = document.querySelector(".back-top");

    if (backTop) {

        backTop.style.opacity = "0";
        backTop.style.visibility = "hidden";

        window.addEventListener("scroll", () => {

            if (window.scrollY > 400) {

                backTop.style.opacity = "1";
                backTop.style.visibility = "visible";

            } else {

                backTop.style.opacity = "0";
                backTop.style.visibility = "hidden";

            }

        });

    }


    /* =====================================================
       SMOOTH SCROLL
       ===================================================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {

                e.preventDefault();

                const navbarHeight = 70;

                const targetPosition =
                    target.getBoundingClientRect().top +
                    window.scrollY -
                    navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });

            }

        });

    });


    /* =====================================================
       SCROLL REVEAL ANIMATION
       ===================================================== */

    const revealElements = document.querySelectorAll(
        ".glass-card, .project-card, .skill-box, .certificate"
    );

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach(element => {

        element.classList.add("reveal");

        revealObserver.observe(element);

    });


    /* =====================================================
        CONTACT FORM
       ===================================================== */

   const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const message = document.getElementById("message").value.trim();

        if (!message) {
            alert("Please enter your message.");
            return;
        }

        // अपना WhatsApp नंबर डालो
        const whatsappNumber = "919889615423";

        const whatsappURL =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(message);

        window.open(whatsappURL, "_blank");
    });
}

            /* Basic validation */

            if (!name || !email || !message) {

                alert(
                    "Please fill in your Name, Email and Message."
                );

                return;
            }


            /* Email validation */

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {

                alert("Please enter a valid email address.");

                return;
            }


            /*
             * Demo submission
             *
             * This does not send an email to a server.
             * Backend/email service can be connected later.
             */

            alert(
                `Thank you ${name}! Your message has been received.`
            );

            contactForm.reset();

        });

    }


    /* =====================================================
        TYPING EFFECT
       ===================================================== */

    const typingElement = document.querySelector(".hero h2 span");

    if (typingElement) {

        const words = [
            "Web Developer",
            "Frontend Developer",
            "Python Developer",
            "Django Developer"
        ];

        let wordIndex = 0;
        let charIndex = 0;
        let deleting = false;


        function typeEffect() {

            const currentWord = words[wordIndex];

            if (!deleting) {

                typingElement.textContent =
                    currentWord.substring(0, charIndex + 1);

                charIndex++;

                if (charIndex === currentWord.length) {

                    deleting = true;

                    setTimeout(typeEffect, 1500);

                    return;
                }

            } else {

                typingElement.textContent =
                    currentWord.substring(0, charIndex - 1);

                charIndex--;

                if (charIndex === 0) {

                    deleting = false;

                    wordIndex++;

                    if (wordIndex >= words.length) {
                        wordIndex = 0;
                    }

                }

            }

            const speed = deleting ? 60 : 100;

            setTimeout(typeEffect, speed);

        }

        typeEffect();

    }


    /* =====================================================
        PROJECT CARD HOVER EFFECT
       ===================================================== */

    const projectCards =
        document.querySelectorAll(".project-card");

    projectCards.forEach(card => {

        card.addEventListener("mousemove", e => {

            const rect = card.getBoundingClientRect();

            const x =
                ((e.clientX - rect.left) / rect.width) * 100;

            const y =
                ((e.clientY - rect.top) / rect.height) * 100;

            card.style.background = `
                radial-gradient(
                    circle at ${x}% ${y}%,
                    rgba(111, 68, 255, 0.12),
                    rgba(9, 16, 35, 0.85) 45%
                )
            `;

        });

        card.addEventListener("mouseleave", () => {

            card.style.background =
                "rgba(9, 16, 35, 0.8)";

        });

    });


    /* =====================================================
        CURRENT YEAR
       ===================================================== */

    const footer = document.querySelector("footer");

    if (footer) {

        const footerText = footer.querySelector("p");

        if (footerText) {

            const currentYear =
                new Date().getFullYear();

            footerText.innerHTML =
                `© ${currentYear} Sanjay Maurya. All Rights Reserved.`;

        }

    }


    /* =====================================================
        DOWNLOAD CV BUTTON
       ===================================================== */

    const downloadCV =
        document.querySelector(".download-btn");

    if (downloadCV) {

        downloadCV.addEventListener("click", () => {

            console.log("CV download started...");

        });

    }


    /* =====================================================
        CONSOLE MESSAGE
       ===================================================== */

    console.log(
        "%c SANJAY MAURYA PORTFOLIO ",
        "color:#a855f7;font-size:18px;font-weight:bold;"
    );

    console.log(
        "%c Welcome to my portfolio!",
        "color:#4d8dff;font-size:13px;"
    );

});