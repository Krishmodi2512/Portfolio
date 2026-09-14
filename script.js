"use strict";

/* =========================================
   PORTFOLIO APP.JS
   ========================================= */


/* -----------------------------------------
   Theme Toggle
   ----------------------------------------- */

const themeToggle = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("portfolio-theme");


/*
   Apply saved theme
*/
if (savedTheme === "light") {
    document.body.setAttribute("data-theme", "light");
}


/*
   Update theme button
*/
function updateThemeButton() {

    if (!themeToggle) {
        return;
    }

    const currentTheme =
        document.body.getAttribute("data-theme");

    if (currentTheme === "light") {

        themeToggle.textContent = "☾";

        themeToggle.setAttribute(
            "aria-label",
            "Switch to dark theme"
        );

        themeToggle.setAttribute(
            "title",
            "Switch to dark theme"
        );

    } else {

        themeToggle.textContent = "☀";

        themeToggle.setAttribute(
            "aria-label",
            "Switch to light theme"
        );

        themeToggle.setAttribute(
            "title",
            "Switch to light theme"
        );
    }
}


/*
   Theme button click
*/
if (themeToggle) {

    themeToggle.addEventListener("click", function () {

        const currentTheme =
            document.body.getAttribute("data-theme");


        if (currentTheme === "light") {

            document.body.removeAttribute("data-theme");

            localStorage.setItem(
                "portfolio-theme",
                "dark"
            );

        } else {

            document.body.setAttribute(
                "data-theme",
                "light"
            );

            localStorage.setItem(
                "portfolio-theme",
                "light"
            );
        }


        updateThemeButton();

    });

}


/* -----------------------------------------
   Initialize Theme Button
   ----------------------------------------- */

updateThemeButton();


/* -----------------------------------------
   Keyboard Accessibility
   ----------------------------------------- */

/*
   Add keyboard focus class to body
   when user navigates using keyboard.
*/

document.addEventListener("keydown", function (event) {

    if (event.key === "Tab") {

        document.body.classList.add(
            "keyboard-user"
        );

    }

});


/*
   Remove keyboard-user class
   when using mouse.
*/

document.addEventListener("mousedown", function () {

    document.body.classList.remove(
        "keyboard-user"
    );

});


/* -----------------------------------------
   Contact Form
   ----------------------------------------- */

const contactForm =
    document.querySelector("form");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            /*
               Frontend-only portfolio form.
               Prevent page reload until
               backend is connected.
            */

            event.preventDefault();


            const name =
                document.getElementById("name");

            const email =
                document.getElementById("email");

            const subject =
                document.getElementById("subject");

            const message =
                document.getElementById("message");


            /*
               Basic validation
            */

            if (
                !name ||
                !email ||
                !subject ||
                !message
            ) {
                return;
            }


            if (
                !name.value.trim() ||
                !email.value.trim() ||
                !subject.value.trim() ||
                !message.value.trim()
            ) {

                alert(
                    "Please fill in all required fields."
                );

                return;
            }


            /*
               Email validation
            */

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (!emailPattern.test(email.value.trim())) {

                alert(
                    "Please enter a valid email address."
                );

                email.focus();

                return;
            }


            /*
               Temporary success message
            */

            alert(
                "Thank you! Your message has been received."
            );


            contactForm.reset();

        }
    );

}


/* -----------------------------------------
   Page Loaded
   ----------------------------------------- */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        document.body.classList.add(
            "page-loaded"
        );

    }
);