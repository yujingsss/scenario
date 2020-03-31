let zoomlink = document.getElementById('zoomlink');
let zoombg = document.getElementById('zoombg');
let multicontrol = document.getElementById('multicontrol');
let milti1 = document.getElementById('multi1');
let milti2 = document.getElementById('multi2');
let milti3 = document.getElementById('multi3');
let milti4 = document.getElementById('multi4');
zoomlink.addEventListener('click', (event) => {
    zoomlink.style.display = 'none';
    zoombg.style.display = 'flex';
    zoombg.style.flexDirection = 'row';
    zoombg.style.animationName = 'popzoom';
    zoombg.style.animationDuration = '1s';
    zoombg.style.animationFillMode = 'forwards';
});
zoombg.addEventListener('click', () => {
    zoombg.style.animationName = 'shrinkzoom';
    zoombg.style.animationDuration = '1s';
    zoombg.style.animationFillMode = 'forwards';
    multicontrol.style.display = 'flex';
    multicontrol.style.animationName = 'popmulti';
    multicontrol.style.animationDuration = '1.5s';
    multicontrol.style.animationFillMode = 'forwards';
});