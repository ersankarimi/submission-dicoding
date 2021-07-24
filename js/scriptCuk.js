// const toggleButton = document.querySelector('.menu-toggle');
// const link = document.querySelector('.my-link');
// const listLink = link.querySelectorAll('a');

// toggleButton.addEventListener('click', function () {
//     if (link.style.display === 'block') {
//         link.style.display = 'none';
//     } else {
//         link.style.display = 'block';

//         if (link.style.display === 'block') {
//             listLink.forEach(function (e) {
//                 e.addEventListener('click', function () {
//                     link.style.display = 'none';
//                 })
//             })
//         } else {
//             link.style.display = 'flex';
//         }
//     }
// });

// // link di click dia nutup
// const phone = window.matchMedia('(min-width: 768px)');

// function screenTest(e) {
//     if (e.matches) {
//         const link = document.querySelector('.my-link');
//         link.style.display = 'flex';
//     } else {
//         link.style.display = 'none';
//     }
// }
// phone.addEventListener('change', screenTest);

// document.addEventListener('click', function (e) {
//     const target = e.currentTarget.classList;
//     const targetId = e.target.id;
//     if (target !== target.contains('my-link') && target !== target.contains('menu-toggle')) {
//         toggleButton.classList.remove('active');
//         link.classList.remove('active');
//     } else if (targetId !== targetId.target.id !== 'header') {

//         toggleButton.classList.remove('active');
//         link.classList.remove('active');
//     }
// });

// listLink.onclickList = function () {
//     toggleButton.classList.toggle('anjay');
//     link.classList.toggle('anjay');
// };

// document.onclick = function (e) {
//     if (e.target.classList !== '.my-link' && e.target.id !== 'header') {
//         toggleButton.classList.remove('active');
//         link.classList.remove('active');
//     }
// }

// toggleButton.onclick = function () {
//     toggleButton.classList.toggle('active');
//     link.classList.toggle('active');
// };

// tutup link
const header = document.getElementById('header');
const toggleButton = document.querySelector('.menu-toggle');
const link = document.querySelector('.my-link');
const listLink = header.querySelectorAll('li');

toggleButton.addEventListener('click', function () {
    toggleButton.classList.toggle('active');
    link.classList.toggle('active');
});

listLink.forEach(function (e) {
    e.addEventListener('click', function () {
        toggleButton.classList.toggle('active');
        link.classList.toggle('active');
    })
});