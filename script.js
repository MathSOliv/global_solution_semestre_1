let lastScroll = 0;
const navbar = document.getElementById('navbar')

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if( scrollTop > lastScroll ){

        navbar.style.top = "-100px"
        
    }else{

        navbar.style.top = "0"

    }

    lastScroll = scrollTop <= 0 ? 0 : scrollTop;

})