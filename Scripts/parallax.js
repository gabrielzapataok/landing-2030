let bg1, bg2
window.addEventListener('scroll',function parallex(){

    bg1 = document.getElementById('bg1')
    bg1.style.top = `${window.pageYOffset * .6}px`

    bg2 = document.getElementById('bg2')
    bg2.style.top = `${window.pageYOffset * .4 - 500}px`

});