function addHeaderContent() {
    const header = document.getElementById("header-container");

    const h1 = document.createElement("h1");
    h1.textContent = "Jazmin Vidal's Jaded Vulture 🂲 ITIS3135";
    header.appendChild(h1);
}

function addSlogan(submenuContainer) {
    const slogan = document.createElement("p");
    slogan.innerHTML = '<i>Figures as fierce as the vulture\'s gaze.</i>';

    submenuContainer.parentNode.insertBefore(slogan, submenuContainer.nextSibling);
}

function addValidationButtons() {
    const footerContainer = document.getElementById("footer-container");

    const validationButtonsContainer = document.createElement("div");
    validationButtonsContainer.id = "validation-buttons";

    const validateHTMLLink = document.createElement("a");
    validateHTMLLink.href = "https://validator.w3.org/nu/?doc=" + encodeURIComponent(window.location.href);
    validateHTMLLink.id = "validate-html";
    
    const htmlImg = document.createElement("img");
    htmlImg.src = "images/button_validation_html5.png";
    htmlImg.width = 88;
    htmlImg.height = 31;
    htmlImg.alt = "Validate webpage HTML.";
    
    validateHTMLLink.appendChild(htmlImg);
    validationButtonsContainer.appendChild(validateHTMLLink);

    const validateCSSLink = document.createElement("a");
    validateCSSLink.href = "https://jigsaw.w3.org/css-validator/validator?uri=" + encodeURIComponent(window.location.href) + "&profile=css3svg&usermedium=all&warning=1";
    validateCSSLink.id = "validate-css";
    
    const cssImg = document.createElement("img");
    cssImg.src = "images/button_validation_css.png";
    cssImg.width = 88;
    cssImg.height = 31;
    cssImg.alt = "Validate webpage CSS.";
    
    validateCSSLink.appendChild(cssImg);
    validationButtonsContainer.appendChild(validateCSSLink);

    const validateAIMLink = document.createElement("a");
    validateAIMLink.href = "https://webaim.org/search/?q=afsd";
    validateAIMLink.id = "validate-aim";
    validateAIMLink.textContent = "Validate AIM";

    validationButtonsContainer.appendChild(validateAIMLink);

    footerContainer.appendChild(validationButtonsContainer);
}

function loadMenu(jsonFile, containerId, isFooter = false) {
    fetch(jsonFile)
        .then((response) => response.json())
        .then((data) => {
            const container = document.getElementById(containerId);
            
            data.forEach((item, index) => {
                const link = document.createElement("a");
                link.href = item.url;
                link.textContent = item.name;
                link.classList.add(isFooter ? "footer-link" : "nav-link");
                container.appendChild(link);

                if (index < data.length - 1 && !isFooter) {
                    container.appendChild(document.createTextNode(" 🂲 "));
                }

                if (isFooter && index < data.length - 1) {
                    container.appendChild(document.createTextNode(" 🂲 "));
                }
            });

            if (isFooter) {
                const extraInfo = document.createElement("p");
                extraInfo.innerHTML = `
                    Designed by <a href="https://jzvcreations.com/index.html" target="_blank">JZV Creations</a> &copy; 2024, 
                    <i><a href="https://www.freecodecamp.org/certification/jvidal2/responsive-web-design" target="_blank">Certified in Responsive Web Design</a></i>, 
                    <i><a href="https://www.freecodecamp.org/certification/jvidal2/javascript-algorithms-and-data-structures-v8" target="_blank">Certified in JS</a></i>
                `;
                container.appendChild(extraInfo);
                addValidationButtons();
            }
            if (containerId === "header-container") {
                const submenuContainer = document.getElementById("submenu-container");
                addSlogan(submenuContainer);
            }
        })
        .catch((error) => console.error("Error loading JSON:", error));
}

function validateHTML() {
    const currentURL = encodeURIComponent(window.location.href);
    window.open(`https://validator.w3.org/nu/?doc=${currentURL}`, "_blank");
}

function validateCSS() {
    const currentURL = encodeURIComponent(window.location.href);
    window.open(`https://jigsaw.w3.org/css-validator/validator?uri=${currentURL}&profile=css3svg&usermedium=all&warning=1`, "_blank");
}

function validateAIM() {
    window.open("https://webaim.org/search/?q=accessibility", "_blank");
}

document.addEventListener("DOMContentLoaded", function () {

    addHeaderContent();

    loadMenu("scripts/header.json", "header-container", false);
    loadMenu("scripts/submenu.json", "submenu-container", false);
    loadMenu("scripts/footer.json", "footer-container", true);

    document.getElementById("validate-html").addEventListener("click", validateHTML);
    document.getElementById("validate-css").addEventListener("click", validateCSS);
    document.getElementById("validate-aim").addEventListener("click", validateAIM);
});