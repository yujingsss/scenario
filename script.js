let zoomlink = document.getElementById('zoomlink');
let zoombg = document.getElementById('zoombg');
let multicontrol = document.getElementById('multicontrol');
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
multicontrol.addEventListener('click', () => {
    multicontrol.style.animationName = 'shrinkmulti';
    multicontrol.style.animationDuration = '.5s';
    multicontrol.style.animationFillMode = 'forwards';
    zoomlink.style.display = 'block';
    zoomlink.style.animationName = 'poplink';
    zoomlink.style.animationDuration = '1.5s';
    zoomlink.style.animationFillMode = 'forwards';
});
