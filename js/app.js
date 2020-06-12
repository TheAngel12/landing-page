/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Define Global Variables
 * 
 */


/**
 * End Global Variables
 * Start Helper Functions
 * 
 */



/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav

function createDynamicNavegation() {
    const sections = document.querySelectorAll('section');
    const menuList = document.querySelector('#navbar__list');

    for (const section of sections) {
        const newMenuElement = document.createElement('li');
        const newElementLink = document.createElement('a');

        /** 
         * Now I'm going to get the element's ID into a variable 
         * so that I can access the section to get the h2 textContent (Name of the section)
         * PD: I could do it in one line but the code wouldn't be as readable
         */

        const linkSource = document.getElementById(section.id);
        newElementLink.textContent = linkSource.querySelector('h2').textContent;

        // Setting the a element's class so that styles can be applied

        newElementLink.className = 'menu__link';

        //Appending both newMenuElement & newElementLink to it's respective parent

        newMenuElement.appendChild(newElementLink);
        menuList.appendChild(newMenuElement);
    }
}



// Add class 'active' to section when near top of viewport


function showActiveSection() {
    addEventListener('scroll', function () {
        const sections = document.querySelectorAll('section');

        for (const section of sections) {
            /**
             * First I need to check if the section is close to the top (showing up in the viewport)
             * Which starts happening when the top of the section is less than the inner height
             * 
             * Then in the same if I need to add a lower limit because otherwise 
             * if I keep scrolling it's still going to be active even if I don't see it
             * 
             */

            if (section.getBoundingClientRect().top < window.innerHeight && section.getBoundingClientRect().top > -50) {
                
                // Before adding the class I need to check if it has it already

                if (section.classList.contains('your-active-class') == false) {
                    section.classList.add('your-active-class');
                }
            }

            // Also before removing the class I need to check if it has it

            else if (section.classList.contains('your-active-class') == true) {
                section.classList.remove('your-active-class');
            }
        }
    });
}


// Scroll to anchor ID using scrollTO event

function scrollToSection() {
    const menuLinks = document.querySelectorAll('a.menu__link');
    const sections = document.querySelectorAll('section');

    for (i = 0; i < menuLinks.length; i++) {

        // Getting the coordinates from the section

        const coordinateX = window.scrollX +  sections.item(i).getBoundingClientRect().left;
        const coordinateY = window.scrollX +  sections.item(i).getBoundingClientRect().top;

        // Setting up the EventListener and scrolling based on the coordinates

        menuLinks.item(i).addEventListener ('click', function () {
            window.scroll(coordinateX, coordinateY);
        });
    }
}

// Executing the functions

createDynamicNavegation();
showActiveSection();
scrollToSection();


/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 

// Scroll to section on link click

// Set sections as active