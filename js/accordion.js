document.addEventListener("DOMContentLoaded", function () {
    const accordions = document.querySelectorAll('.accordion input[type="checkbox"]');
    
    accordions.forEach(function (accordion) {
        accordion.addEventListener('change', function () {
            const ul = this.parentNode.querySelector('ul');
            const lineElement = this.parentNode.querySelector('.line'); // Add this line to select the line element

            if (this.checked) {
                ul.style.display = 'flex';

                // Add the typewriter effect to the line element
                animateText(lineElement, 100, 0);

                // Add the typewriter effect to each li element within the accordion
                ul.querySelectorAll('li').forEach((li, index) => {
                    animateText(li.querySelector('.typewriter'), 100, index * 100);
                });
            } else {
                ul.style.display = 'none';
            }
        });
    });
});

function initTypewriter() {
    animateText(document.querySelector(".text-3 .typewriter"), 100, 0);
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function animateText(element, speed, delay, cb) {
    const charArray = element.innerText.split("");
    let acc = "";
    element.innerText = acc;
    await sleep(delay);

    for (const char of charArray) {
        acc += char;
        element.innerText = acc;
        await sleep(speed);
    }

    cb && cb();
}

function init() {
    animateText(document.querySelector("h1"), 250);
    animateText(document.querySelector("p"), 100, 250 * 9);
    
}

init();
