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


// // Hover efek untuk biodata
// const biodata = document.getElementById('biodata');
// const leftTopCircle = biodata.querySelector('.left-top');
// const biodataCard = biodata.querySelector('.biodata-card');

// biodataCard.addEventListener('mouseenter', function () {
//     leftTopCircle.style.top = 0;
//     leftTopCircle.style.right = 0;
//     leftTopCircle.style.marginTop = '-50px';
//     leftTopCircle.style.marginRight = '-50px';
// })
// biodataCard.addEventListener('mouseleave', function () {
//     leftTopCircle.classList.toggle('hover-left-top');
// })