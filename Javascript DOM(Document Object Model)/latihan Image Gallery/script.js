const jumbo = document.querySelector('.jumbo');
const thumbs = document.querySelectorAll('.thumb');
const container = document.querySelector('.container');

// Only Container
container.addEventListener('click', function (e) {
    // check apakah element yang diklik adalah element dengan class thumb
    if (e.target.className == 'thumb') {
        jumbo.src = e.target.src;
        jumbo.classList.add('fade');
        setTimeout(function () {
            jumbo.classList.remove('fade');
        }, 500)
        thumbs.forEach(function (thumb) {
            // if (thumb.classList.contains('active'){
            //     thumb.classList.remove('active');

            thumb.className = 'thumb';
        });
        e.target.classList.add('active');
    };
});
