// Script navbar-toggle

// const toggleButton = document.getElementsByClassName('menu-toggle');
// toggleButton.forEach(function (link) {
//     link.addEventListener('click', function () {
//         const link = document.querySelector('.nav-link');
//         if (link.style.display === "none") {
//             link.style.display = "block";
//         } else {
//             link.style.display = "block";
//         }
//     })
// });

const toggleButton = document.querySelector('.menu-toggle');
const link = document.querySelector('.nav-link');

toggleButton.addEventListener('click', function () {
    if (link.style.display === 'block') {
        link.style.display = 'none';
    } else {
        link.style.display = 'block';
    }
})

// link di click dia nutup



const phone = window.matchMedia('(min-width: 768px)');

function screenTest(e) {
    if (e.matches) {
        const link = document.querySelector('.nav-link');
        link.style.display = 'block';
    } else {
        link.style.display = 'none';
        const listLink = link.querySelectorAll('a');
        listLink.forEach(function (e) {
            e.addEventListener('click', function () {
                if (link.style.display === 'block') {
                    link.style.display = 'none';
                } else {
                    link.style.display = 'block';
                }
            })
        });
    }
}
phone.addEventListener('change', screenTest);