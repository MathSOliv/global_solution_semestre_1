let lastScroll = 0;
const navbar = document.getElementById('navbar')

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScroll) {

        navbar.style.top = "-100px"

    } else {

        navbar.style.top = "0"

    }

    lastScroll = scrollTop <= 0 ? 0 : scrollTop;

})

 document.getElementById('botao-navigate-demo').addEventListener('click', () => {

    window.location.href = "/demo-proj";

    console.log('seila')

})

var map = L.map('map').setView([-23.5505, -46.6333], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var circle = L.circle([-23.5505, -46.6333], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

var circle2 = L.circle([-23.598198, -46.740933],{
    color: 'orange',
    fillColor: 'orange',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map)

var circle3 = L.circle([-23.588197, -46.740933],{
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map)